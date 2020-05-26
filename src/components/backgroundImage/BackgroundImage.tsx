import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import getSheet from './styles';

interface Props {
  children?: ReactElement;
  img: Source | number;
}
const defaultProps: Props = {
  img: {uri: ''},
};

const BackgroundImage = ({children, img}: Props): ReactElement => {
  const styles = getSheet();
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={img}
        resizeMode={FastImage.resizeMode.stretch}
      />
      {children}
    </View>
  );
};
BackgroundImage.defaultProps = defaultProps;

export default memo(BackgroundImage);
