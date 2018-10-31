import variable from './../variables/platform';

export default (variables = variable) => {
  const iconTheme = {
    fontSize: variables.iconFontSize,
    color: '#717272',
    '.gray': {
      color: '#565C63',
    },
  };

  return iconTheme;
};
