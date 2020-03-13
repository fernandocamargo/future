export const getOptionLabel = ({ country: { name: country }, accent }) =>
  `${accent}, ${country}`;

export const getOptionSelected = (option, value) => option.name === value.name;
