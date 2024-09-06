module.exports = {
  project: {
    ios: {},
    android: {
      watchModeCommandParams: [
        '--mode',
        'developmentdebug',
        '--appId',
        'com.trucklogics.development',
      ],
    },
  },
  assets: ['./src/assets/fonts'],
};
