import {Dimensions, Platform} from 'react-native';

const SCREEN_WIDTH: number = Dimensions.get('window').width;
const SCREEN_HEIGHT: number = Dimensions.get('window').height;
const isIos: boolean = Platform.OS === 'ios';

export {SCREEN_WIDTH, SCREEN_HEIGHT, isIos};
