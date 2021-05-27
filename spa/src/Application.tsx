import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { WordsProvider } from "./context/WordsContext";
import { Dictionary, Error404, Word } from "./view";

const Application: React.FunctionComponent = () => {
  return (
    <Router>
      <WordsProvider>
        <Switch>
          <Route exact path="/" component={Dictionary} />
          <Route exact path="/words/:id" component={Word} />
          <Route component={Error404} />
        </Switch>
      </WordsProvider>
    </Router>
  );
};

export default Application;
