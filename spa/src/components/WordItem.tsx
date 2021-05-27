import React from "react";
import { Link } from "react-router-dom";
import type { Word } from "../models/word.interface";
import type { Indexable } from "../utils/types";

type Props = Indexable<Omit<Word, "date">>;

export const WordItem: React.FunctionComponent<Props> = ({ en, fr, index }) => {
  return (
    <li>
      <Link to={`/words/${index}`}>
        <p>{en}</p>
        <p>{fr}</p>
      </Link>
    </li>
  );
};
