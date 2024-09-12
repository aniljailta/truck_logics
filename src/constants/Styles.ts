import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const baseWidth = 375;
const widthScale = width / baseWidth;
const heightScale = height / baseWidth;
const paddingHorizontal = Math.min(width, height) * 0.04 * widthScale;
const paddingVertical = Math.min(width, height) * 0.05 * heightScale;
const inputHeight = Math.min(width, height) * 0.075 * heightScale;
const buttonHeight = Math.min(width, height) * 0.054 * heightScale;
const backToLoginButtonHeight = Math.min(width, height) * 0.08 * heightScale;
const appDimensions = {
  HEIGHT: height,
  WIDTH: width,
};
const appBackToLoginButtonHeight = {
  HEIGHT: backToLoginButtonHeight,
};
const appPaddings = {
  PADDING_HORIZONTAL: paddingHorizontal,
  PADDING_VERTICAL: paddingVertical,
  PADDING_2: 2,
  PADDING_3: 3,
  PADDING_4: 4,
  PADDING_5: 5,
  PADDING_6: 6,
  PADDING_8: 8,
  PADDING_10: 10,
  PADDING_12: 12,
  PADDING_14: 14,
  PADDING_15: 15,
  PADDING_16: 16,
  PADDING_18: 18,
  PADDING_20: 20,
  PADDING_24: 24,
  PADDING_27: 27,
  PADDING_30: 30,
  PADDING_32: 32,
  PADDING_70: 70,
};
const appInputHeight = {
  HEIGHT: inputHeight,
};
const appButtonHeight = {
  HEIGHT: buttonHeight,
};
const appBuyNowButtonWidth = {
  WIDTH: 104,
};
const commonRegisteredCompetitionWrapperWidth = {
  WIDTH: 325,
};
const registeredCompetitionItemSeparatorGap = {
  gap: 16,
};
const appMargins = {
  MARGIN_4: 4,
  MARGIN_5: 5,
  MARGIN_8: 8,
  MARGIN_10: 10,
  MARGIN_12: 12,
  MARGIN_16: 16,
  MARGIN_20: 20,
  MARGIN_24: 24,
  MARGIN_25: 25,
  MARGIN_30: 30,
  MARGIN_NEGATIVE_50: -50,
  MARGIN_50: 50,
};

const appWidthAndHeight = {
  APP_WIDTH_1: 1,
  APP_WIDTH_5: 5,
  APP_WIDTH_8: 8,
  APP_WIDTH_10: 10,
  APP_WIDTH_12: 12,
  APP_WIDTH_16: 16,
  APP_WIDTH_20: 20,
  APP_WIDTH_22: 22,
  APP_WIDTH_24: 24,
  APP_WIDTH_30: 30,
  APP_WIDTH_32: 32,
  APP_WIDTH_40: 40,
  APP_WIDTH_44: 44,
  APP_WIDTH_50: 50,
  APP_WIDTH_54: 54,
  APP_WIDTH_60: 60,
  APP_WIDTH_100: 100,
  APP_WIDTH_102: 102,
  APP_HEIGHT_4: 4,
  APP_HEIGHT_8: 8,
  APP_WIDTH_200: 200,
  APP_WIDTH_250: 250,
  APP_WIDTH_120: 120,
  APP_HEIGHT_10: 10,
  APP_HEIGHT_12: 12,
  APP_HEIGHT_20: 20,
  APP_HEIGHT_22: 22,
  APP_HEIGHT_24: 24,
  APP_HEIGHT_30: 30,
  APP_HEIGHT_32: 32,
  APP_HEIGHT_40: 40,
  APP_HEIGHT_44: 44,
  APP_HEIGHT_50: 50,
  APP_HEIGHT_54: 54,
  APP_HEIGHT_60: 60,
  APP_HEIGHT_70: 70,
  APP_HEIGHT_80: 80,
  APP_HEIGHT_96: 96,
  APP_HEIGHT_100: 100,
  APP_HEIGHT_120: 120,
  APP_HEIGHT_130: 130,
  APP_HEIGHT_150: 150,
  APP_HEIGHT_170: 170,
  APP_HEIGHT_200: 200,
  APP_HEIGHT_220: 220,
  APP_HEIGHT_250: 250,
  APP_HEIGHT_400: 400,
};
const appRadius = {
  RADIUS_2: 2,
  RADIUS_4: 4,
  RADIUS_5: 5,
  RADIUS_7: 7,
  RADIUS_8: 8,
  RADIUS_10: 10,
  RADIUS_12: 12,
  RADIUS_14: 14,
  RADIUS_15: 15,
  RADIUS_20: 20,
  RADIUS_25: 25,
  RADIUS_28: 28,
  RADIUS_30: 30,
  RADIUS_50: 50,
  RADIUS_60: 60,
  RADIUS_100: 100,
};
const competitionButtonPadding = {
  PADDING_HORIZONTAL: 12,
  PADDING_VERTICAL: 6,
};
const appGap = {
  gap_4: 4,
  gap_5: 5,
  gap_8: 8,
  gap_10: 10,
  gap_12: 12,
  gap_16: 16,
  gap_20: 20,
  gap_24: 24,
  gap_32: 32,
};
const appBorderWidth = {
  width_half: 0.5,
  width_1: 1,
  width_2: 2,
  width_3: 3,
};
export {
  appDimensions,
  appPaddings,
  appMargins,
  appRadius,
  appInputHeight,
  appButtonHeight,
  appBackToLoginButtonHeight,
  competitionButtonPadding,
  appWidthAndHeight,
  appGap,
  appBorderWidth,
  appBuyNowButtonWidth,
  commonRegisteredCompetitionWrapperWidth,
  registeredCompetitionItemSeparatorGap,
};
