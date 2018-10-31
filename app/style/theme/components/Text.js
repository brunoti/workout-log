import variable from './../variables/platform';
import em from 'app/utils/em';

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize - 1,
    fontFamily: variables.fontFamily,
    fontWeight: variables.fontWeight,
    color: variables.textColor,
    '.error': {
      color: '#ED1727',
      fontSize: em(0.8),
      marginTop: 5,
      marginLeft: 15,
    },
    '.note': {
      color: '#a7a7a7',
      fontSize: variables.noteFontSize,
    },
    '.aboveButton': {
      flex: 1,
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  };

  return textTheme;
};
