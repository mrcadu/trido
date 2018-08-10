import React from 'react'
import Calendar from "../components/calendar";
import Enzyme,{mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

test('testDaysInMonth',() => {
    const mes = 11;
    const ano = 1998;
    const days = Calendar.daysInMonth(mes,ano);
    const dias = new Date(ano, mes + 1 , 0).getDate();
    const weekDay = new Date(ano, mes, 1).getDay();
    expect(days.length).toBe(dias + weekDay)
});

test('testDaysInMonthSelectingDay',() => {
    const mes = 11;
    const ano = 1998;
    const dia = 15;
    const days = Calendar.daysInMonth(mes,ano,dia);
    expect(days[dia + ( new Date(ano, mes, 1).getDay() - 1)].active).toBe(true)
});

test('testPrevMonth',() =>{
    const handleChange = jest.fn();
    const calendar = mount(<Calendar handleChange={handleChange}/>);
    const prevButton = calendar.find('.prev');
    prevButton.simulate('click');
    expect(handleChange).toBeCalled();
});

test('testNextMonth',() =>{
    const handleChange = jest.fn();
    const calendar = mount(<Calendar handleChange={handleChange}/>);
    const prevButton = calendar.find('.next');
    prevButton.simulate('click');
    expect(handleChange).toBeCalled();
});

test('activatingDayInCalendar',() =>{
    const calendar = mount(<Calendar value={new Date(2018,7,9)}/>);
    const day9 = calendar.findWhere(node => node.key() === 'day-active9');
    expect(day9.children().prop('className')).toBe("active");
});
test('testClickingDayOnChangeBeingCalled',() =>{
    const handleChange = jest.fn();
    const calendar = mount(<Calendar value={new Date(2018,7,11)} handleChange={handleChange}/>);
    const day9 = calendar.findWhere(node => node.key() === 'day9');
    day9.simulate('click');
    expect(handleChange).toBeCalled();
});
