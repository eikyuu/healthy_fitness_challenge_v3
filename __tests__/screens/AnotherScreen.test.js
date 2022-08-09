import React from 'react';
import renderer from 'react-test-renderer';
import AnotherScreen from '../../screens/AnotherScreen';

describe('<AnotherScreen />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<AnotherScreen/>).toJSON();
    expect(tree.children.length).toBe(1);
  });


  it('renders correctly', () => {
    const tree = renderer.create(<AnotherScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});