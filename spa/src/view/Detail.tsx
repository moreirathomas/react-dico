import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { WordsContext } from "../Context";
import { Button } from "../components";
import type { Word } from "../models/word";

/**
 * @returns The correct word in a words array given its id.
 */
function getWordById(id: string, words: Word[]): Word {
  const word = words.find((word) => word.id === id);
  // @TODO return undefined and create a middleware to route toward 404 page on such errors.
  if (!word) {
    throw new Error(`word not found (id: ${id})`);
  }
  return word;
}

export const Detail: React.FunctionComponent = () => {
  const { state, mutation } = useContext(WordsContext);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const word = getWordById(id, state);

  const deleteWord = () => {
    mutation({ type: "delete", id: word.id });
    history.push("/");
  };

  return (
    <div>
      <h2>{word.fr}</h2>
      <h2>{word.en}</h2>
      <p>Ajouté le {word.date}</p>
      <Button action={deleteWord}>Supprimer</Button>
      <pre>id: {id}</pre>
    </div>
  );
};
