import em from 'app/utils/em';
import { BASE_COLOR } from 'app/style/colors';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

export default {
  'NativeBase.Left': {
    flex: 60,
    'NativeBase.Title': {
      fontSize: em(1.2),
      fontWeight: '500',
      color: '#FFF',
    },
    'NativeBase.Subtitle': {
      fontSize: em(1),
      color: '#FFF',
    },
  },
  'NativeBase.Right': {
    flex: 40,
    'NativeBase.Text': {
      fontSize: em(1.5),
      color: '#FFF',
    },
  },
  width: '100%',
  flexDirection: 'row',
  ...ifIphoneX({
    height: 60 + getBottomSpace(),
    paddinBottom: getBottomSpace(),
  }, {
    height: 60,
    paddinBottom: 0,
  }),
  backgroundColor: BASE_COLOR,
  paddingHorizontal: 15,
};
