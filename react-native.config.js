module.exports = {
  project: {
    ios: {},
    android: {
      watchModeCommandParams: [
        '--mode',
        'productiondebug',
        '--appId',
        'com.trucklogics',
      ],
    },
  },
  assets: ['./src/assets/fonts'],
};
