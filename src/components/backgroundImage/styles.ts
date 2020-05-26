import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';

export interface Style {
  container: ViewStyle;
  image: ImageStyle;
}

const getSheet = (opacity: number = 1): Style =>
  StyleSheet.create<Style>({
    container: {
      flex: 1,
      width: '100%',
    },
    image: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity,
    },
  });

export default getSheet;
