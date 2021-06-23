import React from "react";
import { WordItem } from "./WordItem";
import type { Word } from "../models/word";

interface Props {
  words: Word[];
}

export const WordList: React.FunctionComponent<Props> = ({ words }) => {
  return (
    <ul data-e2e="dict">
      {words.map((word, index) => (
        <WordItem key={index} en={word.en} fr={word.fr} id={word.id} />
      ))}
    </ul>
  );
};
