import React, {memo, ReactElement} from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactElement;
  toUpperCase?: boolean;
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  disabledButtonStyle?: ViewStyle;
  disabledTextStyle?: TextStyle;
  testID?: string;
}

const defaultProps: Props = {
  text: '',
  toUpperCase: false,
  buttonStyle: {},
  textStyle: {},
};

const Button = ({
  buttonStyle,
  textStyle,
  text,
  onClick,
  disabled,
  children,
  toUpperCase,
  disabledButtonStyle,
  disabledTextStyle,
  testID,
}: Props): ReactElement => {
  const handleUppercase = (): string =>
    toUpperCase && text ? text.toUpperCase() : (text as string);

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onClick}
      style={
        disabled && disabledButtonStyle ? disabledButtonStyle : buttonStyle
      }
      disabled={disabled}>
      {text ? (
        <Text
          style={disabled && disabledTextStyle ? disabledTextStyle : textStyle}
          numberOfLines={1}>
          {handleUppercase()}
        </Text>
      ) : null}
      {children}
    </TouchableOpacity>
  );
};
Button.defaultProps = defaultProps;

export default memo(Button);
