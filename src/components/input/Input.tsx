import React, {memo, ReactElement} from 'react';
import {
  KeyboardTypeOptions,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  autoCorrect?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoFocus?: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  togglePassword?: () => void;
  isShowPassword?: boolean;
  isPasswordInput?: boolean;
  accessibilityLabel: string;
}
const defaultProps: Props = {
  autoCorrect: false,
  autoCapitalize: 'none',
  autoFocus: false,
  keyboardType: 'default',
  onChangeText: (_text: string) => {},
  value: '',
  secureTextEntry: false,
  accessibilityLabel: '',
};

const Input = ({
  placeholder,
  autoCapitalize,
  autoFocus,
  keyboardType,
  onChangeText,
  placeholderTextColor,
  value,
  autoCorrect,
  secureTextEntry,
  togglePassword,
  isPasswordInput,
  accessibilityLabel,
}: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <TextInput
        accessibilityLabel={accessibilityLabel}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        style={styles.input}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        onChangeText={(text) => onChangeText(text)}
        placeholderTextColor={placeholderTextColor}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {isPasswordInput ? (
        <TouchableOpacity onPress={togglePassword} style={styles.eyeBtn}>
          <Text style={styles.eye}>&#x1f441;</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
Input.defaultProps = defaultProps;

export default memo(Input);
