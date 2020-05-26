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

const SignInScreen = ({}: Props): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isShowPassword, setShowPassword] = useState<boolean>(false);
  const navigation = useNavigation();

  const onChangeEmail = (text: string): void => setEmail(text);
  const onChangePassword = (text: string): void => setPassword(text);
  const togglePassword = (): void => setShowPassword(!isShowPassword);
  const singIn = (): void => Alert.alert('SignIn');

  const goToSignUp = (): void => navigation.navigate('SignUpScreen');

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      style={baseStyles.container}
      contentContainerStyle={baseStyles.container}>
      <BackgroundImage img={imgs.signIn}>
        <LinearGradient style={styles.container} colors={colors.authGradient}>
          <Text style={styles.title}>Sign In</Text>
          <Input
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
            placeholderTextColor={colors.inputPlaceholder}
            accessibilityLabel="input"
          />
          <Input
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry={!isIos || !isShowPassword}
            togglePassword={togglePassword}
            placeholder={'password'}
            isPasswordInput
            keyboardType={
              !isIos && isShowPassword ? 'visible-password' : 'default'
            }
            placeholderTextColor={colors.inputPlaceholder}
            accessibilityLabel="input"
          />
          <Button
            text={'Forgot password?'}
            buttonStyle={styles.forgotBtn}
            textStyle={styles.forgotText}
          />
          <Button
            testID={'SIGN_IN_BUTTON'}
            text={'Sign In'}
            buttonStyle={styles.button}
            textStyle={styles.btnText}
            toUpperCase
            onClick={singIn}
          />
          <Social />
          <Text style={styles.dontHave}>
            Don't have account?
            <Text
              testID={'GO_TO_SIGN_UP'}
              onPress={goToSignUp}
              style={styles.goSignUp}>
              {`  Sign Up here`}
            </Text>
          </Text>
        </LinearGradient>
      </BackgroundImage>
    </KeyboardAwareScrollView>
  );
};
SignInScreen.defaultProps = defaultProps;

export default SignInScreen;
