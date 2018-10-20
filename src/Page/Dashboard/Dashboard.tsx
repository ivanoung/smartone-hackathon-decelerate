// Importing modules
import * as React from "react";
import Map from "./Map";
import "./dashboard.scss";

export default class Dashboard extends React.Component {
  public render() {
    return (
      <div className="desktop-page-container">
        <Map />
      </div>
    );
  }
}
