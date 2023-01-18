import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Landing from '../components/Landing/Lazy';
import SignUpContainer from '../containers/SignUpContainer/Lazy';
import LogInContainer from '../containers/LogInContainer/Lazy';
import HomeContainer from '../containers/HomeContainer/Lazy';
import NotFound from '../components/NotFound/Lazy';
import PostJobContainer from '../containers/PostJobContainer/Lazy';
import JobViewContainer from '../containers/JobViewContainer/Lazy';
import ChatViewContainer  from '../containers/ChatViewContainer/Lazy';
import RecruiterAllJobContainer from '../containers/RecruiterAllJobContainer/Lazy';
import RecruiterJobReviewContainer from '../containers/RecruiterJobReviewContainer/Lazy';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.LANDING} component={Landing} exact />
      <PublicRoute path={ROUTES.SIGN_UP} component={SignUpContainer} exact />
      <PublicRoute path={ROUTES.SIGN_UP_USER} component={SignUpContainer} />
      <PublicRoute path={ROUTES.LOG_IN} component={LogInContainer} exact />
      <PublicRoute path={ROUTES.LOG_IN_USER} component={LogInContainer} />
      <PrivateRoute path={ROUTES.HOME} component={HomeContainer} />
      <PrivateRoute path={ROUTES.POST_JOB} component={PostJobContainer} />
      <PrivateRoute path={ROUTES.JOB_VIEW} component={JobViewContainer}/>
      <PrivateRoute path={ROUTES.CHAT_VIEW} component={ChatViewContainer}/>
      <PrivateRoute path={ROUTES.RECRUITER_VIEW} component={RecruiterAllJobContainer} />
      <PrivateRoute path={ROUTES.JOB_REVIEW_VIEW} component={RecruiterJobReviewContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
