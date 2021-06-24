import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { WordsProvider } from "./contexts/WordsContext";
import { Error404, Dictionary, New, Detail, Game } from "./views";

const Application: React.FunctionComponent = () => {
  return (
    <Router>
      <WordsProvider>
        <Switch>
          <Route exact path="/" component={Dictionary} />
          <Route exact path="/new" component={New} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/game" component={Game} />
          <Route component={Error404} />
        </Switch>
      </WordsProvider>
    </Router>
  );
};

export default Application;
