import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IframeParent } from "./components/IframeParent";
import { IframeChild } from "./components/IframeChild";

export const App = () => {
  return (
    <div style={{ margin: "0px 20px" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/iframe/" component={IframeParent} />
          <Route exact path="/iframe-child/" component={IframeChild} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
