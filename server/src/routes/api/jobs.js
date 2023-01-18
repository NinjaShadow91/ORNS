const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');

const Applications = require('../../models/application');
const JobPosts = require('../../models/jobPost');
const Users = require('../../models/user');
const JobViewTrackings = require('../../models/jobViewtracking');

router.get('/', authorization, async (req, res) => {
  const userID = (await Users.findById(req.user._id)).userID;
  console.log(userID);
  JobPosts.find({})
    .then(jobs => {
      console.log("jobs");
      var sjobs = [];
      jobs.map(job => {
        const _id = job._id;
        const jobID = job.jobID;
        const jobTitle= job.jobTitle;
        const company = job.company;
        const jobResponsibility = job.jobResponsibility;
        console.log(job.recruiterID);
        if (job.recruiterID != userID) sjobs.push({_id, jobID, jobTitle, company, jobResponsibility}); 
      });
      res.status(200).send(sjobs)}
      )
    .catch(error => res.status(400).send({ message: error.message }));
});

router.post('/', authorization, async (req, res) => {
  console.log("Posting");
  const user = await Users.findById(req.user._id);

  const { jobTitle, company, contactDetails,jobResponsibility,jobLocation,
    maxNumofApplicants,maxNumofSelections,industryType,
    requirements, requiredDegree, requiredExperience,
    approxSalary } = req.body;
    console.log(approxSalary);
  const job = new JobPosts({
        jobTitle: jobTitle,
        company: company,
        contactDetails: contactDetails,
        jobResponsibility: jobResponsibility,
        jobLocation: jobLocation,
        maxNumofApplicants: maxNumofApplicants,
        maxNumofSelections: maxNumofSelections,
        industryType: industryType,
        requirements: requirements,
        requiredDegree: requiredDegree,
        requiredExperience: requiredExperience,
        aprroxSalary: approxSalary,
        releaseDate: new Date(),
        recruiterID: user.userID
  });
  console.log(job);
  job
    .save()
    .then( () => { 
      const data = job;
      res.status(200).send(data)
    })
    .catch(error => {
      console.log(error.message);
      res.status(400).send({ message: error.message })});
});

router.patch('/apply/:id', authorization, async (req, res) => {
  const user = await Users.findById(req.user._id);
  const jobID = (await JobPosts.findById(req.params.id)).jobID;
  var application = await Applications.findOne({jobID: jobID, applicantID:user.userID});
  var numAlreadyApplied = Object.keys(await Applications.find({jobID: jobID})).length;

  console.log(application);
    return JobPosts.findById(req.params.id)
      .then(job => {
        if (numAlreadyApplied==job.maxNumofApplicants){
          res.status(400).send({ message: "Maximum numbero of applicants limit reached." });
        }
        else {
        if (application !=null){
          application.applied=true;
        }
        else{
          application = new Applications({
            applied: true,
            saved: false,
            jobID: job.jobID,
            applicantID: user.userID,
          });
          console.log(application);
        }
        application
          .save()
          .then( () => {})
          .catch(error => {
            console.log(error.message);
            res.status(400).send({ message: error.message })});

        user.appliedJob.push(job.jobID);
        user
          .save()
          .then( () => { 
            res.status(200).send()
          })
          .catch(error => {
            console.log(error.message);
            res.status(400).send({ message: error.message })});
      }})
      .catch(error => res.status(400).send({ message: error.message }));
});

router.patch('/save/:id', authorization, async (req, res) => {
  const user = await Users.findById(req.user._id);
  const jobID = (await JobPosts.findById(req.params.id)).jobID;
  var application = await Applications.findOne({jobID: jobID, applicantID:user.userID});
  console.log(application);
    return JobPosts.findById(req.params.id)
      .then(job => {
        console.log(job);
        if (application !=null){
          application.saved=true;
        }
        else{
          application = new Applications({
            applied: false,
            saved: true,
            jobID: job.jobID,
            applicantID: user.userID,
          });
          console.log(application);
        }
        application
          .save()
          .then( () => {})
          .catch(error => {
            console.log(error.message);
            res.status(400).send({ message: error.message })});

        user.savedJob.push(job.jobID);
        user
          .save()
          .then( () => { 
            res.status(200).send()
          })
          .catch(error => {
            console.log(error.message);
            res.status(400).send({ message: error.message })});
      })
      .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/view/:id', authorization, async (req, res) => {
  const userID = (await Users.findById(req.user._id)).userID;
  const jobID = (await JobPosts.findById(req.params.id)).jobID;

  JobPosts.findById(req.params.id)
  .then( job => {
    const jobViewTracker = new JobViewTrackings({
      userID:userID,
      jobID: jobID
    });
    jobViewTracker
      .save()
      .then(()=>{res.status(200).send(job)})
      .catch(error => res.status(400).send({ message: error.message }));
  })
  .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/jobsPosted', authorization, async (req, res) => {
  const userID = (await Users.findById(req.user._id)).userID;
  JobPosts.find({})
  .then(jobs => {
    // console.log(jobs);
    var sjobs = [];
    jobs.map(job => {
      if (job.recruiterID == userID)
        sjobs.push(job); 
    });
    res.status(200).send(sjobs)}
    )
  .catch(error => res.status(400).send({ message: error.message }));

});

router.get('/appliedUsers/:jobID', authorization, async (req, res) => {
  const jobID = req.params.jobID;
  Applications.find({jobID})
    .then( resp => {
      var sresponse=[];
      resp.map(r => {
        if (r.applied){
          const rp = r.toObject();
          delete rp.saved
          delete rp.applied
          sresponse.push(rp);
        }
      })
      res.status(200).send(sresponse);
      console.log(res.data);
    })
    .catch(error => {
      res.status(400).send({ message: error.message })
      console.log(error);
    });
})

router.get('/analytics/:jobID', authorization, async (req, res) => {
  console.log("in applications analytics api");
  const jobID = req.params.jobID;
  Users.find({appliedJob: jobID})
    .then( resp => {
      var sresponse=[];
      resp.map(r => {
          var isPresent = false;
          sresponse.forEach((element,i) => {
            if (r.country == element.name){
              sresponse[i].count+=1;
              isPresent=true;
            }
          });

          if (!isPresent){
            const country= {};
            country['name'] = r.country;
            country['count'] = 1;
            console.log("anlaytics for country: ",r.country);
            sresponse.push(country);
          }
      })
      // console.log(sresponse);
      res.status(200).send(sresponse);
      console.log(res.data);
    })
    .catch(error => {
      res.status(400).send({ message: error.message })
      console.log(error);
    });
})

router.patch('/appReview', authorization, async (req, res) => {

  const userID = (await Users.findById(req.user._id)).userID;
  Applications.findOne({jobID: req.body.jobID, applicantID: req.body.reviewApplicantID})
    .then( resp => {
      if (resp.recruiterID=userID){
        resp.reviewedDate=Date();
        resp
          .save()
          .then( ()=>{
            res.status(200).send(resp)
          })
          .catch(error => res.status(400).send({message: error.message}))
      }
      else res.status(404).send({message:"Access Denied"});
    }
    )
    .catch(error => {ṭ 
      res.status(400).send({message: error.message})
    }
    )
    })

module.exports = router;