import React, { Component } from 'react';
import '../App.css';
import AddTarefa from "./add-tarefa";

class App extends Component {
  render() {
      const onSubmit = values => alert(JSON.stringify(values));
      return (
          <AddTarefa onSubmit={onSubmit}/>
    );
  }
}

export default App;
