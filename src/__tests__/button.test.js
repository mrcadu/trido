import React from 'react';
import Button from "../components/button";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('testNomeAparecendo', () => {
    let text = 'salvar';
    const button = shallow(<Button label={text}/>);
    expect(button.type()).toBe('button');
    expect(button.props().children).toBe(text);
});
test('testChamaMetodoOnClick', () => {
    const onClick = jest.fn();
    let button = shallow((<Button onClick={onClick}/>));
    button.find('button').simulate('click');
    expect(onClick).toBeCalled();
});
test('styleWasApplied', () => {
    const exampleStyle = {
        margin:'10px'
    };
    let button = shallow((<Button style={exampleStyle}/>));
    expect(button.find('button').prop('style')).toBe(exampleStyle);
});
test('classNameWasApplied', () => {
    let button = shallow((<Button className="exampleStyle"/>));
    expect(button.find('button').prop('className')).toBe("exampleStyle");
});