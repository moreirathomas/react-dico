import React from "react";
import { Link } from "react-router-dom";
import type { Word } from "../models/word";

type Props = Omit<Word, "date">;

export const WordItem: React.FunctionComponent<Props> = ({ en, fr, id }) => {
  return (
    <li>
      <Link to={`/words/${id}`}>
        <p>{en}</p>
        <p>{fr}</p>
      </Link>
    </li>
  );
};
