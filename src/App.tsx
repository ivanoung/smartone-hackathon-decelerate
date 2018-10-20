import * as React from "react";
// Importing desktop containers
import Homepage from "./routes/homepage";

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}
