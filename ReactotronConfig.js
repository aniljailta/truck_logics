import Reactotron, {networking, asyncStorage} from 'reactotron-react-native';
// import sagaPlugin from 'reactotron-redux-saga';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.configure() // controls connection & communication settings
  // .use(sagaPlugin())
  .useReactNative() // add all built-in react native plugins
  .use(
    networking({
      ignoreUrls: /\/(logs|symbolicate)$/,
    }),
  )
  .use(asyncStorage())
  .use(reactotronRedux())
  .connect(); // let's connect!

export default reactotron;
