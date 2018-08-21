import color from "color";

import { Platform, Dimensions, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "material";
const isIphoneX =
  platform === "ios" && (deviceHeight === 812 || deviceWidth === 812);

export default {
  platformStyle,
  platform,

  //Accordion
  headerStyle: "#edebed",
  iconStyle: "#000",
  contentStyle: "#f5f4f5",
  expandedIconStyle: "#000",
  accordionBorderColor: "#d3d3d3",

  // Android
  androidRipple: true,
  androidRippleColor: "rgba(256, 256, 256, 0.3)",
  androidRippleColorDark: "rgba(0, 0, 0, 0.15)",
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: "#ED1727",
  badgeColor: "#fff",
  badgePadding: 3,

  // Button
  btnFontFamily: "System",
  btnDisabledBg: "#b5b5b5",
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
    return this.fontSizeBase * 1.1;
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
  cardDefaultBg: "#fff",
  cardBorderColor: "#ccc",
  cardBorderRadius: 2,
  cardItemPadding: platform === "ios" ? 10 : 12,

  // CheckBox
  CheckboxRadius: 13,
  CheckboxBorderWidth: 1,
  CheckboxPaddingLeft: 4,
  CheckboxPaddingBottom: 0,
  CheckboxIconSize: 21,
  CheckboxIconMarginTop: undefined,
  CheckboxFontSize: 23 / 0.9,
  checkboxBgColor: "#039BE5",
  checkboxSize: 20,
  checkboxTickColor: "#fff",

  // Color
  brandPrimary: "#007aff",
  brandInfo: "#62B1F6",
  brandSuccess: "#5cb85c",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandDark: "#000",
  brandLight: "#f4f4f4",

  //Container
  containerBgColor: "#fff",

  //Date Picker
  datePickerTextColor: "#000",
  datePickerBg: "transparent",

  // Font
  DefaultFontSize: 16,
  fontFamily: "System",
  fontSizeBase: 15,
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
  footerHeight: 55,
  footerDefaultBg: "#F8F8F8",
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: "#6b6b6b",
  tabBarTextSize: 14,
  activeTab: "#007aff",
  sTabBarActiveTextColor: "#007aff",
  tabBarActiveTextColor: "#007aff",
  tabActiveBgColor: "#cde1f9",

  // Header
  toolbarBtnColor: "#007aff",
  toolbarDefaultBg: "#F8F8F8",
  toolbarHeight: 64,
  toolbarSearchIconSize: 20,
  toolbarInputColor: "#CECDD2",
  searchBarHeight: platform === "ios" ? 30 : 40,
  searchBarInputHeight: platform === "ios" ? 40 : 50,
  toolbarBtnTextColor: "#007aff",
  toolbarDefaultBorder: "#a7a6ab",
  iosStatusbar: "dark-content",
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: "Ionicons",
  iconFontSize: 30,
  iconHeaderSize: 33,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: "#D9D5DC",
  inputSuccessBorderColor: "#2b8339",
  inputErrorBorderColor: "#ed2f2f",
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return "#575757";
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 20,

  // List
  listBg: "transparent",
  listBorderColor: "#c9c9c9",
  listDividerBg: "#f4f4f4",
  listBtnUnderlayColor: "#DDD",
  listItemPadding: 10,
  listNoteColor: "#808080",
  listNoteSize: 13,
  listItemSelected: "#3F51B5",

  // Progress Bar
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",

  // Radio Button
  radioBtnSize: 25,
  radioSelectedColorAndroid: "#3F51B5",
  radioBtnLineHeight: 29,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: "#F8F8F8",
  segmentActiveBackgroundColor: "#007aff",
  segmentTextColor: "#007aff",
  segmentActiveTextColor: "#fff",
  segmentBorderColor: "#007aff",
  segmentBorderColorMain: "#a7a6ab",

  // Spinner
  defaultSpinnerColor: "#45D56E",
  inverseSpinnerColor: "#1A191B",

  // Tab
  tabDefaultBg: "#F8F8F8",
  topTabBarTextColor: "#6b6b6b",
  topTabBarActiveTextColor: "#007aff",
  topTabBarBorderColor: "#a7a6ab",
  topTabBarActiveBorderColor: "#007aff",

  // Tabs
  tabBgColor: "#F8F8F8",
  tabFontSize: 15,

  // Text
  textColor: "#000",
  inverseTextColor: "#fff",
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: "System",
  titleFontSize: 17,
  subTitleFontSize: 11,
  subtitleColor: "#8e8e93",
  titleFontColor: "#000",

  // Other
  borderRadiusBase: 5,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: "#414142",
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  //iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21
    }
  }
};
