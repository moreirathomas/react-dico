import React from "react";
import { Link } from "react-router-dom";
import type { Word } from "../models/word";

interface Props extends Omit<Word, "date"> {}

export const WordItem: React.FunctionComponent<Props> = ({ en, fr, id }) => {
  return (
    <li style={{ margin: "1rem auto" }}>
      <Link to={`/detail/${id}`}>
        <p>πΊπΈ {en}</p>
        <p>π«π· {fr}</p>
      </Link>
    </li>
  );
};
