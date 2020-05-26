import React, {memo, ReactElement} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface Props {
  index: number;
}
const defaultProps: Props = {
  index: 0,
};

interface Info {
  title: string;
  text: string;
}

const info: Info[] = [
  {
    title: 'Target your destination',
    text:
      'Pick destination and proceed for appointments to discuss the details for your trip',
  },
  {
    title: 'Confirm your package',
    text: 'Select and manage your expense packages throughout your journey',
  },
  {
    title: 'Live the moment',
    text:
      'Enjoy the breathtaking view of the nature. Relax and cherish your Dreams to the fullest',
  },
  {
    title: 'Care to share ',
    text:
      'Split your trip experience with everyone and connect with the people who love travelling',
  },
];

const IntroInfo = ({index}: Props): ReactElement => {
  const information = info[index];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{information.title}</Text>
      <Text style={styles.text}>{information.text}</Text>
    </View>
  );
};
IntroInfo.defaultProps = defaultProps;

export default memo(IntroInfo);
