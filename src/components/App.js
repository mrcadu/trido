import React, { Component } from 'react';
import '../App.css';
import AddTarefa from "./add-tarefa";

class App extends Component {
  render() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
          <AddTarefa options = {options}/>
    );
  }
}

export default App;
