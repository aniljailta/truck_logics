import React, { ReactNode } from 'react';
import { StyleSheet, ImageBackground, StatusBar, SafeAreaView } from 'react-native';

const ImageView = ({ children }: { children: ReactNode }) => {
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
        resizeMode="stretch"
      >
        <SafeAreaView style={styles.container}>
          {children}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default ImageView;