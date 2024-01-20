import React from 'react';
import {render} from '@testing-library/react-native';
import ComingSoon from '../src/components/common/ComingSoon';

describe('ComingSoon component', () => {
  it('renders correctly', () => {
    const {getByText} = render(<ComingSoon />);
    const textElement = getByText('Coming soon');
    expect(textElement).toBeDefined();
  });
});
