import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../appConstans';
import {colors} from '../../assets/colors';

export interface Style {
  container: ViewStyle;
  buttonColor: TextStyle;
  dotsWrapper: ViewStyle;
  dot: ViewStyle;
  button: ViewStyle;
  travelBtn: ViewStyle;
  travelBtnText: TextStyle;
}

const getSheet = (isActive: boolean = true): Style =>
  StyleSheet.create<Style>({
    container: {
      position: 'absolute',
      bottom: 60,
      left: 0,
      width: SCREEN_WIDTH,
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonColor: {
      fontSize: 44,
      fontWeight: 'bold',
      color: colors.white,
      marginTop: -4,
    },
    dotsWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dot: {
      width: SCREEN_HEIGHT * 0.021,
      height: SCREEN_HEIGHT * 0.021,
      margin: 6,
      borderRadius: 50,
      borderWidth: isActive ? 0 : 1,
      borderColor: colors.white,
      backgroundColor: isActive ? colors.brown : 'transparent',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      width: 70,
      height: 50,
      paddingHorizontal: 6,
    },
    travelBtn: {
      width: 44,
      height: 44,
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    travelBtnText: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.4,
    },
  });

export default getSheet;
