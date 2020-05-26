import React, {memo, ReactElement} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import getSheet from './styles';

interface Props {
  length: number;
  activeIndex: number;
  next: () => void;
  back: () => void;
  go: () => void;
}
const defaultProps: Props = {
  length: 0,
  activeIndex: 0,
  next: () => {},
  back: () => {},
  go: () => {},
};

const SwiperController = ({
  length,
  activeIndex,
  next,
  back,
  go,
}: Props): ReactElement => {
  const dots: number[] = [...Array(length).keys()];

  const renderDots = (): ReactElement => (
    <View style={getSheet().dotsWrapper}>
      {dots.map((el, index) => (
        <View key={index} style={getSheet(index === activeIndex).dot} />
      ))}
    </View>
  );

  const showBack: boolean = activeIndex !== 0;
  const showNext: boolean = activeIndex !== length - 1;

  return (
    <View style={getSheet().container}>
      {showBack ? (
        <TouchableOpacity style={getSheet().button} onPress={back}>
          <Text style={getSheet().buttonColor}>&#x2039;</Text>
        </TouchableOpacity>
      ) : (
        <View style={getSheet().button} />
      )}
      {renderDots()}
      {showNext ? (
        <TouchableOpacity style={getSheet().button} onPress={next}>
          <Text style={getSheet().buttonColor}>&#x203A;</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={getSheet().travelBtn} onPress={go}>
          <Text style={getSheet().travelBtnText}>Go!</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
SwiperController.defaultProps = defaultProps;

export default memo(SwiperController);
