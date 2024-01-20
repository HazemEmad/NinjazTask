import React from 'react';
import renderer from 'react-test-renderer';
import Tab2 from '../src/screens/Tab2';

test('renders correctly', () => {
  const tree = renderer.create(<Tab2 />).toJSON();
  expect(tree).toMatchSnapshot();
});
