import {StyleSheet, ViewStyle} from 'react-native';

export interface Style {
  container: ViewStyle;
}

const baseStyles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default baseStyles;
