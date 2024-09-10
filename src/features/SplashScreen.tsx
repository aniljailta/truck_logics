import {View} from 'react-native';
import React from 'react';
import TrendLogo from '@/assets/svg/TrendLogo';
import {SCREEN_HEIGHT} from '@/constants/PixelScaling';
import ImageView from '@/components/ImageView';

const SplashScreen = () => {
  return (
    <ImageView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TrendLogo width={308} height={100} />
      </View>
    </ImageView>
  );
};

export default SplashScreen;
