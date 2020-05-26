import React, {memo, ReactElement, useRef} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';
import baseStyles from '../baseStyles';
import BackgroundImage from '../backgroundImage/BackgroundImage';
import {SCREEN_WIDTH} from '../../appConstans';
import getSheet from './styles';
import SwiperController from '../swiperController/SwiperController';
import IntroInfo from '../introInfo/IntroInfo';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../assets/colors';

interface Props {
  images: number[];
  activeIndex: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}
const defaultProps: Props = {
  images: [],
  activeIndex: 0,
  onScroll: () => {},
};

const IntroSwiper = ({images, activeIndex, onScroll}: Props): ReactElement => {
  const navigation = useNavigation();
  const scrollRef = useRef<ScrollView>(null);

  const styles = getSheet(images.length);
  const renderImages = (): ReactElement[] =>
    images.map((el, index) => <BackgroundImage key={index} img={el} />);

  const handleNext = (): void => {
    scrollRef.current &&
      scrollRef.current.scrollTo({
        y: 0,
        x: SCREEN_WIDTH * (activeIndex + 1),
        animated: true,
      });
  };

  const handleBack = (): void => {
    scrollRef.current &&
      scrollRef.current.scrollTo({
        y: 0,
        x: SCREEN_WIDTH * (activeIndex - 1),
        animated: true,
      });
  };

  const handleGo = (): void => navigation.navigate('SignInScreen');

  return (
    <View style={baseStyles.container}>
      <ScrollView
        ref={scrollRef}
        style={baseStyles.container}
        contentContainerStyle={styles.container}
        snapToInterval={SCREEN_WIDTH}
        decelerationRate={'fast'}
        scrollEventThrottle={1}
        onScroll={onScroll}
        horizontal>
        {renderImages()}
      </ScrollView>
      <LinearGradient
        colors={colors.introGradient}
        style={styles.linearGradient}>
        <IntroInfo index={activeIndex} />
        <SwiperController
          length={images.length}
          activeIndex={activeIndex}
          next={handleNext}
          back={handleBack}
          go={handleGo}
        />
      </LinearGradient>
    </View>
  );
};
IntroSwiper.defaultProps = defaultProps;

export default memo(IntroSwiper);
