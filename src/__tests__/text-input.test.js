import React from 'react'
import Enzyme,{mount,shallow} from 'enzyme';
import TextInput from "../components/text-input";
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

test('testApareceNomeDoTextInput',() => {
    const name = 'example';
    let textInput = shallow(<TextInput name = {name}/>);
    const description = textInput.find('p').text();
    expect(description).toBe(name)
});
test('testAtualizarValueAoDigitar',()=>{
    const value = "value";
    let component = mount(<TextInput/>);
    let input = component.find('input');
    const event = {
        target: {
            value
        }
    };
    input.simulate('change', event);
    expect(input.prop('value')).toBe(value)
});

