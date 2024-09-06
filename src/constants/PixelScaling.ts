import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

const scaleVertical = SCREEN_HEIGHT / 812;

function actuatedNormalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

function actuatedNormalizeVertical(size: number) {
  const newSize = size * scaleVertical;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

function isTab() {
  if (SCREEN_WIDTH > 550) {
    return true;
  } else {
    return false;
  }
}

function isScreenHeight770() {
  if (SCREEN_HEIGHT > 740 && SCREEN_HEIGHT < 760) {
    return true;
  } else {
    return false;
  }
}

export {
  actuatedNormalize,
  actuatedNormalizeVertical,
  isTab,
  isScreenHeight770,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
