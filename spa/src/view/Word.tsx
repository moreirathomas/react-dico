import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { WordsContext } from "../context/WordsContext";

export const Word: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();

  const { state } = useContext(WordsContext);
  return (
    <div>
      <h1>Page index {id}</h1>

      <pre>
        {state[parseInt(id)].date + "\n"}
        {state[parseInt(id)].en + "\n"}
        {state[parseInt(id)].fr}
      </pre>
    </div>
  );
};
