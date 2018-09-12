import React from 'react';
import Link from '../Link';
import renderer from 'react-test-renderer';

//snapshot test
it('renders correctly', () => {
  const testFunction = () => true;
  const tree = renderer
    .create(<Link active={true} onClick={testFunction}>Active</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});