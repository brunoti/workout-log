import em from 'app/utils/em';

export default {
  'NativeBase.Header': {
    'NativeBase.Left': {
      flex: 0,
      width: 60,
      'NativeBase.Button': {
        width: '100%',
        'NativeBase.Icon': {
          fontSize: em(1.8),
        },
      },
    },
    'NativeBase.Body': {
      flex: 1,
    },
    'NativeBase.Right': {
      flex: 0,
      width: 60,
      'NativeBase.Button': {
        width: '100%',
        '.transparent': {
          borderRadius: 0,
          'NativeBase.Text': {
            margin: 0,
            fontFamily: 'Roboto-Thin',
            fontWeight: '300',
            paddingLeft: 0,
            paddingRight: 0,
          },
          'NativeBase.Icon': {
            fontSize: em(1.8),
          },
          margin: 0,
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
    },
  },
  '.black': {
    backgroundColor: '#000',
    borderBottomColor: '#000',
  },
  '.borderTop': {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  '.negativeMarginTop': {
    marginTop: -25,
  },
  '.borderBottom': {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  '.bigger': {
    height: 130,
  },
  '.hasButton': {
    'NativeBase.Header': {
      'NativeBase.Body': {
        flex: 70,
      },
      'NativeBase.Right': {
        flex: 30,
        paddingHorizontal: 10,
        'NativeBase.Button': {
          height: null,
          borderWidth: 1,
          borderColor: '#FFF',
          paddingHorizontal: 0,
          paddingVertical: 10,
        },
      },
    },
  },
  '.noLeft': {
    'NativeBase.Header': {
      'NativeBase.Body': {
        paddingLeft: 15,
      },
    },
  },
  zIndex: 1,
  width: '100%',
  marginHorizontal: 0,
};
