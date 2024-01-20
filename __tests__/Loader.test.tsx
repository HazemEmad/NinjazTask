import React from 'react';
import Loader from '../src/components/common/Loader';
import renderer from 'react-test-renderer';

describe('Loader component', () => {
  it('renders message when loading false', () => {
    const tree = renderer.create(<Loader loading={false} />).toJSON();
    expect(tree).toBeNull();
  });
  it('renders nothing when loading true', () => {
    const tree = renderer.create(<Loader loading={true} />).toJSON();
    expect(tree).toBeDefined();
  });
});
