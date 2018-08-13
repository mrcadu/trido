import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Calendar extends Component {
    static daysInMonth(month, year, currentDay) {
        let dias = new Date(year, month + 1 , 0).getDate();
        const weekDay = new Date(year, month, 1).getDay();
        let dias_array = [];
        for (let i = 1-weekDay ; i <= dias; i++) {
            if (i === currentDay) {
                dias_array.push({
                    dia: i,
                    active: true
                });
            }
            else if(i<=0) {
                dias_array.push({
                    dia: "",
                    active: false
                });
            }
            else if(i>0){
                dias_array.push({
                    dia:i,
                    active: false
                });
            }
        }
        return dias_array;
    }

    constructor(props) {
        super(props);
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        Calendar.daysInMonth = Calendar.daysInMonth.bind(this);
    }

    prevMonth() {
        this.props.handleChange(new Date(new Date(this.props.value.getFullYear(), this.props.value.getMonth() - 1, this.props.value.getDate())));
    }

    nextMonth() {
        this.props.handleChange(new Date(new Date(this.props.value.getFullYear(), this.props.value.getMonth() + 1, this.props.value.getDate())));
    }

    render() {
        const days = ["Dom","Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

        function getCurrentMonth() {
            const currentMonth = this.props.value.toLocaleString("pt-br", {month: "long"});
            return currentMonth.charAt(0).toUpperCase().concat(currentMonth.slice(1));
        }

        return (
            <div className={this.props.className} style={this.props.style}>
                <div className="month">
                    <ul className="ul">
                        <li className="prev" onClick={this.prevMonth}>&#10094;</li>
                        <li className="next" onClick={this.nextMonth}>&#10095;</li>
                        <li style={{fontSize: "30px"}}>{getCurrentMonth.call(this)}<br/><span
                            style={{fontSize: "18px"}}>{this.props.value.getFullYear()}</span></li>
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
                        Calendar.daysInMonth(this.props.value.getMonth(),this.props.value.getFullYear(),this.props.value.getDate()).map((day) => {
                            if(day.dia === ""){
                                return <li key={"empty-day".concat(Math.random() * 255)}/>;
                            }
                            else if(day.active ===true) {
                                return (<li onClick={() => this.props.handleChange(new Date(this.props.value.getFullYear(),this.props.value.getMonth(),day.dia))}
                                            key={"day-active".concat(day.dia)}><span className="active">{day.dia}</span></li>);
                            }
                            else if (day.active === false) {
                                return (<li onClick={() => this.props.handleChange(new Date(this.props.value.getFullYear(),this.props.value.getMonth(),day.dia))}
                                            className="days"
                                            key={"day".concat(day.dia)}>{day.dia}</li>);
                            }
                            return null;
                        })
                    }
                </ul>
            </div>);
    }
}

Calendar.propTypes = {
    value: PropTypes.instanceOf(Date),
    handleChange: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string
};
Calendar.defaultProps = {
    value: new Date(),
};

export default Calendar;