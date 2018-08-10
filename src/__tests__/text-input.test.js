import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import TextInput from "../components/text-input";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('testAparecePlaceHolder',() => {
    const placeholder = 'example';
    let component = shallow(<TextInput placeholder={placeholder}/>);
    let textInput = component.find('input');
    const description = textInput.props().placeholder;
    expect(description).toBe(placeholder);
});
test('testNameProperty',()=>{
    const name = "name";
    let component = shallow(<TextInput name={name}/>);
    let textInput = component.find('input');
    expect(textInput.prop('name')).toBe(name);
});
test('testTextType',()=>{
    let component = shallow(<TextInput/>);
    let textInput = component.find('input');
    expect(textInput.prop('type')).toBe("text");
});
test('testValue',()=>{
    const text = "text";
    let component = shallow(<TextInput value={text}/>);
    let textInput = component.find('input');
    expect(textInput.prop('value')).toBe(text);
});
test('testOnChangeBeingCalled',()=>{
    const exampleFunction = jest.fn();
    let component = shallow(<TextInput handleChange={exampleFunction}/>);
    let textInput = component.find('input');
    textInput.simulate('change');
    expect(exampleFunction).toBeCalled();
});
test('testOnBlurBeingCalled',()=>{
    const exampleFunction = jest.fn();
    let component = shallow(<TextInput onBlur={exampleFunction}/>);
    let textInput = component.find('input');
    textInput.simulate('blur');
    expect(exampleFunction).toBeCalled();
});
test('testOnKeyDownBeingCalled',()=>{
    const exampleFunction = jest.fn();
    let component = shallow(<TextInput onKeyDown={exampleFunction}/>);
    let textInput = component.find('input');
    textInput.simulate('keyDown');
    expect(exampleFunction).toBeCalled();
});


