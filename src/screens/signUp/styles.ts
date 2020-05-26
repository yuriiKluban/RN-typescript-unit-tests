import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SCREEN_WIDTH} from '../../appConstans';
import {colors} from '../../assets/colors';

export interface Style {
  container: ViewStyle;
  title: TextStyle;
  button: ViewStyle;
  btnText: TextStyle;
  forgotBtn: ViewStyle;
  forgotText: TextStyle;
  dontHave: TextStyle;
  goSignUp: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    color: colors.white,
    marginBottom: '16%',
  },
  button: {
    width: SCREEN_WIDTH / 2,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.brown,
    borderRadius: 28,
    marginTop: 28,
  },
  btnText: {
    fontSize: 20,
    color: colors.white,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  forgotText: {
    fontSize: 14,
    color: colors.brown,
  },
  dontHave: {
    marginTop: 20,
    fontSize: 16,
    color: colors.white,
    letterSpacing: 0.9,
  },
  goSignUp: {
    fontSize: 16,
    color: colors.brown,
    fontWeight: 'bold',
    letterSpacing: 0.6,
  },
});

export default styles;
