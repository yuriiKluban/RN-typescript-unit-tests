import 'react-native';
import React from 'react';
import App from '../App';

import {cleanup, render, act} from 'react-native-testing-library';

afterEach(cleanup);

test('renders correctly', async () => {
  const promise = Promise.resolve();
  render(<App />);
  await act(() => promise);
});
