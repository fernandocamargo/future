import { lazy } from 'react';

export const Account = lazy(() => import('./account'));

export const Dashboard = lazy(() => import('./dashboard'));

export const Home = lazy(() => import('./home'));

export const Login = lazy(() => import('./login'));

export const NotFound = lazy(() => import('./404'));

export const Profile = lazy(() => import('./profile'));

export const Referrals = lazy(() => import('./referrals'));

export const Registration = lazy(() => import('./registration'));
