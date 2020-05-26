import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SCREEN_WIDTH} from '../../appConstans';
import {colors} from '../../assets/colors';

export interface Style {
  container: ViewStyle;
  title: TextStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    bottom: 150,
    left: 0,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  text: {
    color: colors.white,
    fontSize: 28,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});

export default styles;
