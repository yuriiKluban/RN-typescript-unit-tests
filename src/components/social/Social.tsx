import React, {memo, ReactElement} from 'react';
import styles from './styles';
import {Text, View} from 'react-native';
import imgs from '../../assets/imgs/imgs';
import FastImage from 'react-native-fast-image';
import Button from '../button/Button';

interface Props {}
const defaultProps: Props = {};

const socials: number[] = [imgs.fb, imgs.instagram, imgs.linkedIn, imgs.google];

const Social = ({}: Props): ReactElement => {
  const renderSocial = (): ReactElement => (
    <View style={styles.socialWrapper}>
      {socials.map((el, index) => (
        <Button key={index} buttonStyle={styles.socialBtn}>
          <FastImage source={el} style={styles.socialImg} />
        </Button>
      ))}
    </View>
  );
  return <View style={styles.container}>{renderSocial()}</View>;
};
Social.defaultProps = defaultProps;

export default memo(Social);
