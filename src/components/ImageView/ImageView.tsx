import React, {ReactNode} from 'react';
import {ImageBackground, StatusBar, SafeAreaView} from 'react-native';
import styles from './Styles';

const ImageView = ({children}: {children: ReactNode}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        style={styles.image}
        source={require('@/assets/images/bg.jpg')}
        resizeMode="stretch">
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default ImageView;
