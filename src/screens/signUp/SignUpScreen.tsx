import React, {ReactElement, useState} from 'react';
import styles from './styles';
import {Alert, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage';
import imgs from '../../assets/imgs/imgs';
import baseStyles from '../../components/baseStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Social from '../../components/social/Social';
import {useNavigation} from '@react-navigation/native';
import {isIos} from '../../appConstans';
import {colors} from '../../assets/colors';

interface Props {}
const defaultProps: Props = {};

const SignUpScreen = ({}: Props): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [isShowPassword, setShowPassword] = useState<boolean>(false);
  const [isShowPasswordAgain, setShowPasswordAgain] = useState<boolean>(false);
  const navigation = useNavigation();

  const onChangeEmail = (text: string): void => setEmail(text);
  const onChangePassword = (text: string): void => setPassword(text);
  const onChangePasswordAgain = (text: string): void => setPasswordAgain(text);
  const togglePassword = (): void => setShowPassword(!isShowPassword);
  const togglePasswordAgain = (): void =>
    setShowPasswordAgain(!isShowPasswordAgain);

  const singUp = (): void => Alert.alert('SignUp');

  const goToSignIn = (): void => navigation.navigate('SignInScreen');

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      style={baseStyles.container}
      contentContainerStyle={baseStyles.container}>
      <BackgroundImage img={imgs.signUp}>
        <LinearGradient style={styles.container} colors={colors.authGradient}>
          <Text style={styles.title}>Sign Up</Text>
          <Input
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
            accessibilityLabel="input"
            placeholderTextColor={colors.inputPlaceholder}
          />
          <Input
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry={!isIos || !isShowPassword}
            placeholder={'password'}
            togglePassword={togglePassword}
            isPasswordInput
            keyboardType={'default'}
            accessibilityLabel="input"
            placeholderTextColor={colors.inputPlaceholder}
          />
          <Input
            value={passwordAgain}
            onChangeText={onChangePasswordAgain}
            secureTextEntry={!isIos || !isShowPasswordAgain}
            placeholder={'password again'}
            isPasswordInput
            togglePassword={togglePasswordAgain}
            keyboardType={
              !isIos && isShowPassword ? 'visible-password' : 'default'
            }
            placeholderTextColor={colors.inputPlaceholder}
            accessibilityLabel="input"
          />
          <Button
            testID={'SIGN_UP_BUTTON'}
            text={'Sign Up'}
            buttonStyle={styles.button}
            textStyle={styles.btnText}
            toUpperCase
            onClick={singUp}
          />
          <Social />
          <Text style={styles.dontHave}>
            Already have account?
            <Text
              testID={'GO_TO_SIGN_IN'}
              onPress={goToSignIn}
              style={styles.goSignUp}>
              {`  Sign In!`}
            </Text>
          </Text>
        </LinearGradient>
      </BackgroundImage>
    </KeyboardAwareScrollView>
  );
};
SignUpScreen.defaultProps = defaultProps;

export default SignUpScreen;
