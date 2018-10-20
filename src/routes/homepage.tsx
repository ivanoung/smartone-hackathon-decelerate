import * as React from "react";
import { Route, Switch } from "react-router-dom";

// import Login from "src/Page/CustomerLogin/CustomerLogin";
import Dashboard from "src/Page/Dashboard/dashboard"


export default class MobileRoutes extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact={true} component={Dashboard} />
        </Switch>

      </div>
    );
  }
}
