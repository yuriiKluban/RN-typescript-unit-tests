import 'react-native';
import React from 'react';

import MockedNavigator from '../src/components/mockedComponent/MockedNavigator';
import {cleanup, render, act, fireEvent} from '@testing-library/react-native';
import {validate} from '../src/utils/constans';
import SignUpScreen from '../src/screens/signUp/SignUpScreen';

afterEach(cleanup);

test('renders correctly', async () => {
  const promise = Promise.resolve();
  render(<MockedNavigator component={SignUpScreen} />);
  await act(() => promise);
});

test('validation check with invalid input fields', async () => {
  const promise = Promise.resolve();
  const fn = jest.fn();
  fn.mockReturnValue(false);

  render(<MockedNavigator component={SignUpScreen} />);

  const isValidEmail = validate('email', 'invalidEmail');
  const resultEmail = fn(isValidEmail);
  expect(resultEmail).toBe(false);
  expect(fn).toHaveBeenCalled();

  const isValidPassword = validate('password', 'password');
  const resultPassword = fn(isValidPassword);
  expect(resultPassword).toBe(false);
  expect(fn).toHaveBeenCalled();

  const isValidPasswordAgain = validate('password again', 'password again');
  const resultPasswordAgain = fn(isValidPasswordAgain);
  expect(resultPasswordAgain).toBe(false);
  expect(fn).toHaveBeenCalled();

  await act(() => promise);
});

test('validation check with valid input fields', async () => {
  const promise = Promise.resolve();
  const fn = jest.fn();
  fn.mockReturnValue(true);

  const {getByPlaceholderText} = render(
    <MockedNavigator component={SignUpScreen} />,
  );

  const passwordInput = getByPlaceholderText('password');
  const passwordAgainInput = getByPlaceholderText('password again');

  const isValidEmail = validate('email', 'test@gmail.com');
  const resultEmail = fn(isValidEmail);
  expect(resultEmail).toBe(true);
  expect(fn).toHaveBeenCalled();

  const isValidPassword = validate('password', 'Qwerty!1234');
  const resultPassword = fn(isValidPassword);
  expect(resultPassword).toBe(true);
  expect(fn).toHaveBeenCalled();

  const isValidPasswordAgain = validate('password', 'Qwerty!1234');
  const resultPasswordAgain = fn(isValidPasswordAgain);
  expect(resultPasswordAgain).toBe(true);
  expect(fn).toHaveBeenCalled();

  fireEvent.changeText(passwordInput, 'Qwerty!1234');
  fireEvent.changeText(passwordAgainInput, 'Qwerty!1234');

  const isSamePasswords =
    passwordInput.props.value === passwordAgainInput.props.value;

  expect(isSamePasswords).toBe(true);

  await act(() => promise);
});

test('validation check with valid email and invalid password fields', async () => {
  const promise = Promise.resolve();
  const fn = jest.fn();

  render(<MockedNavigator component={SignUpScreen} />);

  fn.mockReturnValueOnce(true);
  const isValidEmail = validate('email', 'username@gmail.com');
  const resultEmail = fn(isValidEmail);
  expect(resultEmail).toBe(true);
  expect(fn).toHaveBeenCalled();

  fn.mockReturnValueOnce(false);
  const isValidPassword = validate('password', 'invalid');
  const resultPassword = fn(isValidPassword);
  expect(resultPassword).toBe(false);
  expect(fn).toHaveBeenCalled();

  fn.mockReturnValueOnce(false);
  const isValidPasswordAgain = validate('password', 'invalid again');
  const resultPasswordAgain = fn(isValidPasswordAgain);
  expect(resultPasswordAgain).toBe(false);
  expect(fn).toHaveBeenCalled();

  await act(() => promise);
});

test('try to change inputs value', async () => {
  const promise = Promise.resolve();

  const {getByPlaceholderText} = render(
    <MockedNavigator component={SignUpScreen} />,
  );

  const emailInput = getByPlaceholderText('email');
  const passwordInput = getByPlaceholderText('password');
  const passwordAgainInput = getByPlaceholderText('password again');

  fireEvent.changeText(emailInput, 'email');
  fireEvent.changeText(passwordInput, 'password');
  fireEvent.changeText(passwordAgainInput, 'password again');

  const emailInputValue = emailInput.props.value;
  const passwordInputValue = passwordInput.props.value;
  const passwordAgainInputValue = passwordAgainInput.props.value;

  expect(emailInputValue).toBe('email');
  expect(passwordInputValue).toBe('password');
  expect(passwordAgainInputValue).toBe('password again');

  await act(() => promise);
});

test('try to navigate to Sign In', async () => {
  const promise = Promise.resolve();

  const {getByTestId, findByTestId} = render(
    <MockedNavigator component={SignUpScreen} />,
  );

  const goToSignIn = getByTestId('GO_TO_SIGN_IN');

  fireEvent.press(goToSignIn);
  await expect(findByTestId('GO_TO_SIGN_IN')).toBeTruthy();

  await act(() => promise);
});
