import property from 'lodash/property';

export const normalize = ({ bucket, id, name }) =>
  !!bucket && (!!id || !!name)
    ? `https://s3.eu-central-1.amazonaws.com/${bucket}/${id || name}`
    : '';

export const formatEducation = ({
  school: { logo = {}, ...school },
  ...education
}) => ({ school: { logo: normalize(logo), ...school }, ...education });

export const formatExperience = ({
  company: { logo = {}, ...company },
  ...experience
}) => ({ company: { logo: normalize(logo), ...company }, ...experience });

export const formatProfile = ({
  data: {
    isRemoteOnly = false,
    photo = {},
    experiences = [],
    educations = [],
    ...profile
  },
}) => ({
  photo: normalize(photo),
  educations: educations.map(formatEducation),
  experiences: experiences.map(formatExperience),
  isRemoteOnly,
  ...profile,
});

export const formatFocusRoleList = property('data.data');
