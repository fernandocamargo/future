export default element => {
  element.focus();
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  element.select();
};
