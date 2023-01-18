import * as ROUTES from './routes';

const PUBLIC_LINKS = [
  {
    path: ROUTES.LANDING,
    text: 'Home'
  },
  {
    path: ROUTES.SIGN_UP,
    text: 'Sign Up'
  },
  {
    path: ROUTES.LOG_IN,
    text: 'Log In'
  }
];

const USER_LINKS= [
  {
    path: ROUTES.HOME,
    text: 'Home'
  },

  {
    path: ROUTES.JOBS,
    text: 'Jobs'
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile'
  },
  {
    path: ROUTES.RECRUITER_VIEW,
    text: 'Recruiter'
  }
];

export { PUBLIC_LINKS, USER_LINKS };
