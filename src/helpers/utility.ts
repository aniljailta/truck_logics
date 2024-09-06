import {Platform} from 'react-native';

export const keyboardScroller = Platform.OS === 'ios' ? 'padding' : 'height';
