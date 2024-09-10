import React, {ReactNode} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const ImageView = ({children}: {children: ReactNode}) => {
  return (
    <ImageBackground
      style={styles.image}
      source={require('@/assets/images/bg.jpg')}
      resizeMode="cover">
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageView;
