import React from 'react';
import Enzyme,{mount,shallow} from 'enzyme';
import TextInput from "../components/text-input";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('testAparecePlaceHolder',() => {
    const placeholder = 'example';
    let textInput = shallow(<TextInput placeholder={placeholder}/>);
    const description = textInput.props().placeholder;
    expect(description).toBe(placeholder);
});
test('testAtualizarValueAoDigitar',()=>{
    const value = "value";
    let component = mount(<TextInput/>);
    const event = {
        target: {
            value: value
        }
    };
    component.simulate('change', event);
    expect(component.children().prop('value')).toBe(value);
});

