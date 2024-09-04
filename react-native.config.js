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
  assets: ['./assets/fonts'],
};
