import em from 'app/utils/em';
import variable from './../variables/platform';

export default (variables = variable) => {
  const platform = variables.platform;

  const tabHeadingTheme = {
    flexDirection: 'column',
    backgroundColor: variables.tabDefaultBg,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: variables.tabDefaultBg, 
    '.scrollable': {
      paddingHorizontal: 20,
      flex: platform === 'android' ? 0 : 1,
      minWidth: platform === 'android' ? undefined : 60,
    },
    'NativeBase.Text': {
      fontSize: em(0.8),
      color: variables.topTabBarTextColor,
      marginHorizontal: 7,
    },
    'NativeBase.Icon': {
      fontSize: em(1.3),
      color: variables.topTabBarTextColor,
    },
    '.active': {
      'NativeBase.Text': {
        color: variables.topTabBarActiveTextColor,
        fontWeight: '600',
      },
      'NativeBase.Icon': {
        color: variables.topTabBarActiveTextColor,
      },
    },
  };

  return tabHeadingTheme;
};
