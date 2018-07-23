import React from 'react'
import Button from "../components/button";
import Enzyme,{shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

test('testNomeAparecendo',()=>{
    let text = 'salvar';
    const button = shallow(<Button name={text}/>);
    expect(button.type()).toBe('button');
    expect(button.props().children).toBe(text);
});
test('testChamaMetodoOnClick',()=>{
    const onClick = jest.fn();
    let tree = mount((<Button onClick={onClick}/>));
    tree.find('button').simulate('click');
    expect(onClick).toBeCalled()
});