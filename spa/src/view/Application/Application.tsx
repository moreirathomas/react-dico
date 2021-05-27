import React from "react";
import data from "../../data/translations.json";
import WordPreview from "../WordPreview";

export interface Props {}

export const Application: React.FunctionComponent<Props> = () => {
  return (
    <ul>
      {data.slice(0, 9).map((word, index) => (
        <WordPreview key={index} en={word.en} fr={word.fr} index={index} />
      ))}
    </ul>
  );
};
