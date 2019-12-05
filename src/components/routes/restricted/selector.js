import { createSelector } from 'reselect';

const selectProfile = ({ profile }) => profile;

const selectDetails = ({ details }) => details;

const selectLogged = details => ({ logged: !!Object.keys(details).length });

const selectProfileDetails = createSelector(selectProfile, selectDetails);

export default createSelector(selectProfileDetails, selectLogged);
