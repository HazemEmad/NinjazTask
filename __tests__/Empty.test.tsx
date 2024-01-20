import React from 'react';
import {render} from '@testing-library/react-native';
import Empty from '../src/components/common/Empty';

describe('Empty component', () => {
  it('renders message when loading false', () => {
    const {queryByText} = render(<Empty loading={false} />);
    const textElement = queryByText("You Don't have any Posts");
    expect(textElement).toBeDefined();
  });
  it('renders nothing when loading true', () => {
    const {queryByText} = render(<Empty loading={true} />);
    const textElement = queryByText("You Don't have any Posts");
    expect(textElement).toBeNull();
  });
});
