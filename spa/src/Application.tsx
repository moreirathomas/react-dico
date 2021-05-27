import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { WordsProvider } from "./Context";
import { Dictionary, Error404, Detail } from "./view";

const Application: React.FunctionComponent = () => {
  return (
    <Router>
      <WordsProvider>
        <Switch>
          <Route exact path="/" component={Dictionary} />
          <Route exact path="/words/:id" component={Detail} />
          <Route component={Error404} />
        </Switch>
      </WordsProvider>
    </Router>
  );
};

export default Application;
