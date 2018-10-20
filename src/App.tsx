import * as React from "react";
// Importing desktop containers
import Map from "./Page/Dashboard/Map";
import MobileRoutes from "./routes/homepage";

export default class App extends React.Component {
  public render() {
    return <Map />;
  }
}
