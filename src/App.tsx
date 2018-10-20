import * as React from 'react';
import './App.css';


// Importing desktop containers
import Homepage from "src/routes/homepage";

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}
