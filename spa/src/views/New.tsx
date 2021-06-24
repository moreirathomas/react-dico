import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { WordsContext } from "../contexts/WordsContext";
import { Header, WordAddition } from "../components";
import type { Word } from "../models/word";

/**
 * @returns A word given two translations. At most one translation can equal empty string `""`.
 */
function newWord(fr: string, en: string): Word {
  return { fr, en, date: Date.now(), id: uuid() };
}

export const New: React.FunctionComponent = () => {
  const { mutation } = useContext(WordsContext);
  const history = useHistory();

  const addWord = (fr: string, en: string) => {
    mutation({ type: "add", word: newWord(fr, en) });
    history.push("/");
  };

  return (
    <div>
      <Header>Ajout</Header>
      <WordAddition action={addWord} />
    </div>
  );
};
