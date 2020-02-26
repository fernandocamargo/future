import { lazy } from 'react';

export const Index = lazy(() => import('./index/index'));

export const RecoverPassword = lazy(() => import('./recover-password'));

export const SetNewPassword = lazy(() => import('./set-new-password'));
