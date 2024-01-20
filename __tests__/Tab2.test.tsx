import React from 'react';
import {render} from '@testing-library/react-native';
import Tab2 from '../src/screens/Tab2';

describe('Tab2 component', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Tab2 />);
    const textElement = getByText('Coming soon');
    expect(textElement).toBeDefined();
  });
});
