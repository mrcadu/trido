import React, {Component} from 'react';
import PropTypes from 'proptypes'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.selectDay = this.selectDay.bind(this);
        Calendar.daysInMonth = Calendar.daysInMonth.bind(this);


        const currentDate = new Date();
        this.state = {
            currentDate: new Date(),
            monthDays: Calendar.daysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear()),
        };
    }

    static daysInMonth(month, year, currentDay) {
        const dias = new Date(year, month, 0).getDate();
        let dias_array = [];
        for (let i = 1; i <= dias; i++) {
            if (i === currentDay) {
                dias_array.push({
                    dia: i,
                    active: true
                });
            }
            else {
                dias_array.push({
                    dia: i,
                    active: false
                });
            }
        }
        return dias_array;
    }

    selectDay(day) {
        this.setState(prevState => ({
            monthDays: Calendar.daysInMonth(prevState.currentDate.getMonth(), prevState.currentDate.getFullYear(), day.dia)
        }));

    }

    prevMonth() {
        this.setState(prevState => ({
            currentDate: new Date(prevState.currentDate.getFullYear(), prevState.currentDate.getMonth() - 1, prevState.currentDate.getDate()),
            monthDays: Calendar.daysInMonth(prevState.currentDate.getMonth(), prevState.currentDate.getFullYear())
        }));
    }

    nextMonth() {
        this.setState(prevState => ({
            currentDate: new Date(prevState.currentDate.getFullYear(), prevState.currentDate.getMonth() + 1, prevState.currentDate.getDate()),
            monthDays: Calendar.daysInMonth(prevState.currentDate.getMonth(), prevState.currentDate.getFullYear())
        }));
    }

    render() {
        const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

        function getCurrentMonth() {
            const currentMonth = this.state.currentDate.toLocaleString("pt-br", {month: "long"});
            return currentMonth.charAt(0).toUpperCase().concat(currentMonth.slice(1));
        }

        return (
            <div className={this.props.className} style={this.props.style}>
                <div className="month">
                    <ul className="ul">
                        <li className="prev" onClick={this.prevMonth}>&#10094;</li>
                        <li className="next" onClick={this.nextMonth}>&#10095;</li>
                        <li style={{fontSize: "30px"}}>{getCurrentMonth.call(this)}<br/><span
                            style={{fontSize: "18px"}}>{this.state.currentDate.getFullYear()}</span></li>
                    </ul>
                </div>
                <ul className="weekdays">
                    {days.map((day) => {
                        return <li key={"weekdays".concat(day)}>
                            {day}
                        </li>;
                    })}
                </ul>
                <ul className="days">
                    {
                        this.state.monthDays.map((day) => {
                            if (day.active === false) {
                                return (<li onClick={() => this.selectDay(day)}
                                            className="days"
                                            key={"day".concat(day.dia)}>{day.dia}</li>);
                            }
                            else {
                                return (<li onClick={() => this.selectDay(day)}
                                            className="active"
                                            key={"day".concat(day.dia)}><span className="active">{day.dia}</span></li>);
                            }
                        })
                    }
                </ul>
            </div>);
    }
}
Calendar.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
};
export default Calendar;