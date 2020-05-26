import {StyleSheet, ViewStyle} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../appConstans';
import {colors} from '../../assets/colors';

export interface Style {
  container: ViewStyle;
  linearGradient: ViewStyle;
}

const getSheet = (length: number = 0): Style =>
  StyleSheet.create<Style>({
    container: {
      width: SCREEN_WIDTH * length,
      opacity: 0.85,
      backgroundColor: colors.black,
    },
    linearGradient: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT / 2,
      position: 'absolute',
      left: 0,
      bottom: 0,
    },
  });

export default getSheet;
