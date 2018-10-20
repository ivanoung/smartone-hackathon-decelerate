// Importing modules
import * as React from "react";
import Map from "./Map";

// Importing styling and static assets
import "./dashboard.scss";

// Importing UI components

// for redir
// import * as History from "history";
// import { withRouter } from "react-router";

export default class PureCurrentOrders extends React.Component {
  public render() {
    return (
      <div className="desktop-page-container">
        <h1>Hello!!!</h1>
        <Map />
      </div>
    );
  }
}
