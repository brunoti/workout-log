import { DARK_BLUE, CONTAINER_SECONDARY_BACKGROUND } from 'app/style/colors';
import variable from './../variables/platform';

export default (variables = variable) => {
  const contentTheme = {
    '.grayBackground': {
      backgroundColor: CONTAINER_SECONDARY_BACKGROUND,
    },
    '.padder': {
      padding: variables.contentPadding / 2,
    },
    '.verticalPadder': {
      paddingVertical: variables.contentPadding / 2,
      paddingHorizontal: 0,
    },
    'NativeBase.Text': {
      '.empty': {
        color: DARK_BLUE,
      },
    },
    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: 'transparent',
    },
    flex: 1,
    backgroundColor: '#FFF',
  };

  return contentTheme;
};
