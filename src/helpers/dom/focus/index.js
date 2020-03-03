export default element =>
  [
    'focus' in element && element.focus(),
    'scrollIntoView' in element &&
      element.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    'select' in element && element.select(),
  ].filter(Boolean);
