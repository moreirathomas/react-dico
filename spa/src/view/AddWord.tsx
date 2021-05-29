import React, { useContext, useState } from "react";
import { v4 as uuid } from 'uuid';
import { WordsContext } from "../Context";
import type { Word } from "../models/word";
import { Button } from "../components";

export const AddWord: React.FunctionComponent = () => {
  const { mutation } = useContext(WordsContext);

  const addWord = () => {
    if (en === '') return;
    mutation({ type: "add", word: generateWord(fr, en) });
  };

  let [fr, setFr] = useState('');
  let [en, setEn] = useState('');

  const generateWord = (fr: string, en: string) => {
    const newWord: Word = {
      fr: fr,
      en: en,
      date: Date.now(),
      id: uuid()
    };
   return newWord;
  };

  return (
    <div>
      <label htmlFor="en">Anglais</label>
      <input name="en" onChange={(event)=>setEn(event.target.value)} type="text"/>
      <label htmlFor="fr">Francais</label>
      <input name="fr" onChange={(event)=>setFr(event.target.value)} type="text"/>
      <Button action={addWord} text={"Add word"}></Button>
    </div>
  );
};