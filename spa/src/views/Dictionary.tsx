import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WordsContext } from "../contexts/WordsContext";
import { Header, TimeframeRenderer, WordList } from "../components";

export const Dictionary: React.FunctionComponent = () => {
  const { state } = useContext(WordsContext);

  return (
    <div>
      <Header>Mon dictionnaire</Header>
      <Link to={"/new"}>Add a new word</Link>
      <TimeframeRenderer words={state}>
        {(words) => <WordList words={words} />}
      </TimeframeRenderer>
    </div>
  );
};
