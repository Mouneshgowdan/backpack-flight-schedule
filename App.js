import React, { Component } from 'react';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from 'bpk-component-calendar';
import BpkButton from 'bpk-component-button';
import format from 'date-fns/format';
import './App.scss';

const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');

const daysOfWeek = [
  { name: 'Sunday',    nameAbbr: 'Sun', index: 0, isWeekend: true  },
  { name: 'Monday',    nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday',   nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday',  nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday',    nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday',  nameAbbr: 'Sat', index: 6, isWeekend: true  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: date,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">Flight Schedule</h1>
        </header>

        <main className="App__main">
          <BpkCalendar
            id="calendar"
            onDateSelect={this.handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={this.state.selectionConfiguration}
          />

          <div className="App__button-container">
            <BpkButton onClick={() => {}}>Continue</BpkButton>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
