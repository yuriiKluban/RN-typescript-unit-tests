import 'react-native';
import React from 'react';

import SignInScreen from '../src/screens/signIn/SignInScreen';
import MockedNavigator from '../src/components/mockedComponent/MockedNavigator';
import {cleanup, render, act, fireEvent} from '@testing-library/react-native';
import {validate} from '../src/utils/constans';

afterEach(cleanup);

test('renders correctly', async () => {
  const promise = Promise.resolve();
  render(<MockedNavigator component={SignInScreen} />);
  await act(() => promise);
});

test('validation check with invalid input fields', async () => {
  const promise = Promise.resolve();
  const fn = jest.fn();
  fn.mockReturnValue(false);

  render(<MockedNavigator component={SignInScreen} />);

  const isValidEmail = validate('email', 'test.com');
  const resultEmail = fn(isValidEmail);
  expect(resultEmail).toBe(false);
  expect(fn).toHaveBeenCalled();

  const isValidPassword = validate('password', 'password');
  const resultPassword = fn(isValidPassword);
  expect(resultPassword).toBe(false);
  expect(fn).toHaveBeenCalled();

  await act(() => promise);
});

test('validation check with valid input fields', async () => {
  const promise = Promise.resolve();
  const fn = jest.fn();
  fn.mockReturnValue(true);

  render(<MockedNavigator component={SignInScreen} />);

  const isValidEmail = validate('email', 'test@gmail.com');
  const resultEmail = fn(isValidEmail);
  expect(resultEmail).toBe(true);
  expect(fn).toHaveBeenCalled();

  const isValidPassword = validate('password', 'Qwerty!1234');
  const resultPassword = fn(isValidPassword);
  expect(resultPassword).toBe(true);
  expect(fn).toHaveBeenCalled();

  await act(() => promise);
});

test('validation check with valid email and invalid password fields', async () => {
  const promise = Promise.resolve();
  const fn = jest.fn();

  render(<MockedNavigator component={SignInScreen} />);

  fn.mockReturnValueOnce(true);
  const isValidEmail = validate('email', 'test@gmail.com');
  const resultEmail = fn(isValidEmail);
  expect(resultEmail).toBe(true);
  expect(fn).toHaveBeenCalled();

  fn.mockReturnValueOnce(false);
  const isValidPassword = validate('password', 'invalid');
  const resultPassword = fn(isValidPassword);
  expect(resultPassword).toBe(false);
  expect(fn).toHaveBeenCalled();

  await act(() => promise);
});

test('try to change inputs value', async () => {
  const promise = Promise.resolve();

  const {getByPlaceholderText} = render(
    <MockedNavigator component={SignInScreen} />,
  );

  const emailInput = getByPlaceholderText('email');
  const passwordInput = getByPlaceholderText('password');

  fireEvent.changeText(emailInput, 'email');
  fireEvent.changeText(passwordInput, 'password');

  const emailInputValue = emailInput.props.value;
  const passwordInputValue = passwordInput.props.value;

  expect(emailInputValue).toBe('email');
  expect(passwordInputValue).toBe('password');

  await act(() => promise);
});

test('try to navigate to Sign Up', async () => {
  const promise = Promise.resolve();

  const {getByTestId, findByTestId} = render(
    <MockedNavigator component={SignInScreen} />,
  );

  const goToSignUp = getByTestId('GO_TO_SIGN_UP');

  fireEvent.press(goToSignUp);
  await expect(findByTestId('GO_TO_SIGN_UP')).toBeTruthy();

  await act(() => promise);
});
