import em from 'app/utils/em';
import variable from './../variables/platform';

export default (variables = variable) => {
  const labelTheme = {
    '.focused': {
      width: 0,
    },
    color: variables.defaultTextColor,
    fontSize: em(1),
  };

  return labelTheme;
};
