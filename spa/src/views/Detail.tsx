import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { WordsContext } from "../contexts/WordsContext";
import { Button, Header, WordEdition } from "../components";
import type { Word } from "../models/word";

/**
 * @returns The correct word in a words array given its id.
 */
function getWordById(id: string, words: Word[]): Word {
  const word = words.find((word) => word.id === id);
  // TODO return undefined and create a middleware to route toward 404 page on such errors.
  if (!word) {
    throw new Error(`word not found (id: ${id})`);
  }
  return word;
}

export const Detail: React.FunctionComponent = () => {
  const { state, mutation } = useContext(WordsContext);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [isEdition, setIsEdition] = useState(false);

  const word = getWordById(id, state);

  const deleteWord = () => {
    mutation({ type: "delete", id: word.id });
    history.push("/");
  };

  const editWord = (word: Word) => {
    mutation({ type: "edit", id: word.id, word });
  };

  return (
    <div>
      <Header>Mot</Header>

      {isEdition ? (
        <WordEdition word={word} action={editWord} toggle={() => setIsEdition(false)} />
      ) : (
        <div>
          <p>
            <span>🇺🇸</span> {word.en}
          </p>
          <p>
            <span>🇫🇷</span> {word.fr}
          </p>
          <Button action={() => setIsEdition(true)}>Edit</Button>
        </div>
      )}

      <Button action={deleteWord}>Supprimer</Button>
      <p>Ajouté le {word.date}</p>
      <code>id: {word.id}</code>
    </div>
  );
};
