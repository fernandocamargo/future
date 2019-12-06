import { lazy } from 'react';

export const Account = lazy(() =>
  import(/* webpackChunkName: "account" */ './account')
);

export const Dashboard = lazy(() =>
  import(/* webpackChunkName: "dashboard" */ './dashboard')
);

export const Home = lazy(() => import(/* webpackChunkName: "home" */ './home'));

export const Login = lazy(() =>
  import(/* webpackChunkName: "login" */ './login')
);

export const NotFound = lazy(() =>
  import(/* webpackChunkName: "404" */ './404')
);

export const Profile = lazy(() =>
  import(/* webpackChunkName: "profile" */ './profile')
);

export const Referrals = lazy(() =>
  import(/* webpackChunkName: "referrals" */ './referrals')
);

export const Registration = lazy(() =>
  import(/* webpackChunkName: "registration" */ './registration')
);
