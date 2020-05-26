import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SCREEN_WIDTH} from '../../appConstans';
import {colors} from '../../assets/colors';

export interface Style {
  container: ViewStyle;
  separateLine: ViewStyle;
  separateText: TextStyle;
  socialWrapper: ViewStyle;
  socialBtn: ViewStyle;
  socialImg: ImageStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: 38,
    alignItems: 'center',
  },
  separateLine: {
    position: 'relative',
    width: SCREEN_WIDTH / 2,
    height: 2,
    backgroundColor: 'rgba(139,139,139,0.8)',
    marginBottom: 30,
  },
  separateText: {
    color: colors.white,
    fontSize: 20,
    position: 'absolute',
    top: -14,
    left: '47%',
    paddingHorizontal: 4,
  },
  socialWrapper: {
    flexDirection: 'row',
  },
  socialBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.brown,
  },
  socialImg: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
