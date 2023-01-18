import axios from 'axios';

class API {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  signUp = (data) => axios.post(`/api/auth/signup/`, data);

  logIn = (data) => axios.post(`/api/auth/login/`, data);

  getJobs = () =>
    axios.get('/api/jobs', {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  viewJob = id =>
    axios.get(`/api/jobs/view/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  message = data =>
    axios.post('/api/message', data, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  getMessages = otherUserID =>
    axios.get(`api/message/${otherUserID}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
  });

  sendMessage = data =>
    axios.post('api/message/',data, {headers: { 'Auth-Token': localStorage.getItem('token') }
  });

  getUsers = () => 
    axios.get('api/user/getUsers', {
      headers: { 'Auth-Token': localStorage.getItem('token') }
  });

  postJob = data =>{
    axios.post('/api/jobs', data, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });
  }

  getJobsPosted = () =>
    axios.get('api/jobs/jobsPosted', {
      headers: { 'Auth-Token': localStorage.getItem('token') }
});

  getAppliedJobs = () =>
    axios.get('api/user/appliedJobs' ,{
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  getSavedJobs = () =>
  axios.get('api/user/savedJobs' ,{
    headers: { 'Auth-Token': localStorage.getItem('token') }
  });

  applyToJob = id =>
    axios.patch(`/api/jobs/apply/${id}`, null, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });
    
  saveJob = id =>
  axios.patch(`/api/jobs/save/${id}`, null, {
    headers: { 'Auth-Token': localStorage.getItem('token') }
  });

  getProfile = () =>
    axios.get('/api/profile', {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  getAppliedUsers = jobID =>
    axios.get(`/api/jobs/appliedUsers/${jobID}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });
    
    getJobAnalytics = jobID =>
      axios.get(`/api/jobs/analytics/${jobID}`, {
        headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  async reviewApplication(data) {
      const response = await fetch('http://localhost:8080/api/jobs/appReview', {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Auth-Token': localStorage.getItem('token'),
    },
  });
  return await response.json();
    }

    getAppliedUsersProfiles = ({jobID, appliedUsers}) => 
      axios.post(`/api/profile/recruiter/${jobID}`,appliedUsers, {
        headers: { 'Auth-Token': localStorage.getItem('token') }
      });

  updateProfile = data =>
    axios.patch(`/api/profile`, data, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });
}

export default API;
