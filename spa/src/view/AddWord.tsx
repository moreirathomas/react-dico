import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { WordsContext } from "../Context";
import { Button, Header } from "../components";
import type { Word } from "../models/word";

/**
 * @returns A word given two translations. At most one translation can equal empty string `""`.
 */
function newWord(fr: string, en: string): Word {
  return { fr, en, date: Date.now(), id: uuid() };
}

export const AddWord: React.FunctionComponent = () => {
  const { mutation } = useContext(WordsContext);
  const history = useHistory();

  const [fr, setFr] = useState("");
  const [en, setEn] = useState("");

  const addWord = () => {
    // Do not add a word if neither inputs have value.
    if (en === "" && fr === "") return;
    mutation({ type: "add", word: newWord(fr, en) });
    history.push("/");
  };

  return (
    <div>
      <Header>Ajout</Header>
      <label htmlFor="en">Anglais</label>
      <input name="en" onChange={(event) => setEn(event.target.value)} type="text" />
      <label htmlFor="fr">Francais</label>
      <input name="fr" onChange={(event) => setFr(event.target.value)} type="text" />
      <Button action={addWord}>Add word</Button>
    </div>
  );
};
