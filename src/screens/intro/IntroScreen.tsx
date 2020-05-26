import React, {ReactElement, useState} from 'react';
import IntroSwiper from '../../components/introSwiper/IntroSwiper';
import SwiperController from '../../components/swiperController/SwiperController';
import imgs from '../../assets/imgs/imgs';
import {NativeScrollEvent, NativeSyntheticEvent, View} from 'react-native';
import {SCREEN_WIDTH} from '../../appConstans';

interface Props {}
const defaultProps: Props = {};

const images: number[] = [imgs.cityA, imgs.cityB, imgs.cityC, imgs.cityD];

const IntroScreen = ({}: Props): ReactElement => {
  const [index, setActiveIndex] = useState<number>(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {x} = event.nativeEvent.contentOffset;
    const {width} = event.nativeEvent.contentSize;
    if (x > 0 && x < width) {
      const newIndex = Math.round(x / SCREEN_WIDTH);
      setActiveIndex(newIndex);
    }
  };

  return (
    <>
      <IntroSwiper images={images} onScroll={onScroll} activeIndex={index} />
    </>
  );
};

IntroScreen.defaultProps = defaultProps;

export default IntroScreen;
