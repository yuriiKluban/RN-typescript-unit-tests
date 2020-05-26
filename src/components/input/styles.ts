import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SCREEN_WIDTH} from '../../appConstans';
import {colors} from '../../assets/colors';

export interface Style {
  container: ViewStyle;
  input: TextStyle;
  eyeBtn: ViewStyle;
  eye: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: SCREEN_WIDTH - 40,
    height: 54,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 28,
    borderColor: colors.brown,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginVertical: 18,
    position: 'relative',
  },
  input: {
    fontSize: 20,
    color: colors.white,
    height: 54,
  },
  eyeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  eye: {
    fontSize: 26,
  },
});

export default styles;
