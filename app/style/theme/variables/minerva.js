import { Platform, Dimensions } from 'react-native';

import color from 'color';
import * as colors from 'app/style/colors';
import * as sizes from 'app/style/sizes';
import em from 'app/utils/em';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = 'material';
const isIphoneX =
  platform === 'ios' && deviceHeight === 812 && deviceWidth === 375;

export default {
  platformStyle,
  platform,

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: false,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: 0,

  // Button
  btnFontFamily: 'Roboto-Medium',
  btnDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return em(1.1);
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',

  // CheckBox
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 5,
  CheckboxIconSize: 16,
  CheckboxIconMarginTop: 1,
  CheckboxFontSize: em(1.15),
  DefaultFontSize: em(1.15),
  checkboxBgColor: '#039BE5',
  checkboxSize: em(1.35),
  checkboxTickColor: '#fff',

  // Color
  brandPrimary: colors.BRAND_PRIMARY,
  brandInfo: colors.BRAND_INFO,
  brandSuccess: colors.BRAND_SUCCESS,
  brandDanger: colors.BRAND_DANGER,
  brandWarning: colors.BRAND_WARNING,
  brandDark: colors.BRAND_DARK,
  brandLight: colors.BRAND_LIGHT,

  // Font
  fontFamily: 'Roboto-Medium',
  fontSizeBase: em(1),
  fontWeight: '300',
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: isIphoneX ? 89 : 56,
  footerDefaultBg: '#3F51B5',
  footerPaddingBottom: isIphoneX ? 34 : 0,

  // FooterTab
  tabBarTextColor: '#bfc6ea',
  tabBarTextSize: 11,
  activeTab: '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: '#fff',
  tabActiveBgColor: '#3F51B5',

  // Header
  toolbarBtnColor: '#393939',
  toolbarDefaultBg: 'white',
  toolbarHeight: 56,
  toolbarSearchIconSize: 23,
  toolbarInputColor: '#393939',
  searchBarHeight: platform === 'ios' ? 30 : 40,
  searchBarInputHeight: platform === 'ios' ? 40 : 50,
  toolbarBtnTextColor: '#393939',
  toolbarDefaultBorder: 'transparent',
  iosStatusbar: 'dark-content',
  get statusBarColor() {
    return '#FFF'
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: 'MaterialCommunityIcons',
  iconFontSize: em(1.75),
  iconHeaderSize: em(1.75),

  // InputGroup
  inputFontSize: em(1.15),
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 24,

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: 12,
  listNoteColor: '#808080',
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: 23,
  radioSelectedColorAndroid: '#3F51B5',
  radioBtnLineHeight: 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: '#3F51B5',
  segmentActiveBackgroundColor: '#fff',
  segmentTextColor: '#fff',
  segmentActiveTextColor: '#3F51B5',
  segmentBorderColor: '#fff',
  segmentBorderColorMain: '#3F51B5',

  // Spinner
  defaultSpinnerColor: colors.BASE_COLOR,
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabDefaultBg: colors.BASE_COLOR,
  topTabBarTextColor: '#E9A1A2',
  topTabBarActiveTextColor: '#FFF',
  topTabBarBorderColor: '#FFF',
  topTabBarActiveBorderColor: colors.BASE_COLOR,

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: em(1),

  // Text
  textColor: colors.DEFAULT_FONT_COLOR,
  inverseTextColor: '#fff',
  noteFontSize: em(0.95),
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: 'Roboto-Medium',
  titleFontSize: em(1.35),
  titleFontWeight: '300',
  subTitleFontSize: em(0.95),
  subtitleColor: colors.DEFAULT_FONT_COLOR,
  titleFontColor: colors.DEFAULT_FONT_COLOR,

  // Other
  borderRadiusBase: 2,
  borderWidth: sizes.DEFAULT_BORDER_WIDTH,
  contentPadding: 8,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,
};
