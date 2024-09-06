import {View} from 'react-native';
import React from 'react';
import TrendLogo from '@/assets/svg/TrendLogo';
import {SCREEN_HEIGHT} from '@/constants/PixelScaling';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, top: SCREEN_HEIGHT * 0.35, alignItems: 'center'}}>
      <TrendLogo width={308} height={100} />
    </View>
  );
};

export default SplashScreen;
