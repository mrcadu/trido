import React from 'react'
import Calendar from "../components/calendar";
import Enzyme,{mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

test('testDaysInMonth',() => {
    const days = Calendar.daysInMonth(11,1998);
    expect(days.length).toBe(30)
});

test('testDaysInMonthSelectingDay',() => {
    const days = Calendar.daysInMonth(11,1998,15);
    expect(days[14].active).toBe(true)
});

test('testPrevMonth',() =>{
    const calendar = mount(<Calendar/>);
    const prevButton = calendar.find('.prev');
    const prevState = calendar.state('currentDate').getMonth();
    prevButton.simulate('click');
    const currentState = calendar.state('currentDate').getMonth();
    expect(prevState).toBe(currentState + 1);
});

test('testNextMonth',() =>{
    const calendar = mount(<Calendar/>);
    const prevButton = calendar.find('.next');
    const prevState = calendar.state('currentDate').getMonth();
    prevButton.simulate('click');
    const currentState = calendar.state('currentDate').getMonth();
    expect(prevState).toBe(currentState - 1);
});
test('activatingDayInCalendar',() =>{
    const calendar = mount(<Calendar/>);
    const day1 = calendar.findWhere(node => node.key() === 'day1');
    day1.simulate('click');
    expect(calendar.state().monthDays[0].active).toBe(true);
});