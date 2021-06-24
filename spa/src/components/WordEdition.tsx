import React, { useState } from "react";
import { Button, TextInput } from ".";
import type { Word } from "../models/word";

interface Props {
  word: Word;
  action: (word: Word) => void;
  toggle: () => void;
}

export const WordEdition: React.FunctionComponent<Props> = ({ word, action, toggle }) => {
  const [fr, setFr] = useState(word.fr);
  const [en, setEn] = useState(word.en);

  const handleEdit = () => {
    action({ ...word, en, fr });
    toggle();
  };

  return (
    <div>
      <TextInput value={en} setter={setEn} label={"🇺🇸"} />
      <TextInput value={fr} setter={setFr} label={"🇫🇷"} />
      <Button action={handleEdit}>Save</Button>
    </div>
  );
};
