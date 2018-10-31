import { Platform, Dimensions } from 'react-native';
import { DARK_BLUE } from 'app/style/colors';

const deviceHeight = Dimensions.get('window').height;

export default (variables) => {
  const theme = {
    '.padder': {
      padding: variables.contentPadding,
    },
    '.center': {
      justifyContent: 'center',
      alignItems: 'center',
    },
    'NativeBase.Text': {
      '.empty': {
        color: DARK_BLUE,
      },
    },
    flex: 1,
    backgroundColor: '#FFF',
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
  };

  return theme;
};
