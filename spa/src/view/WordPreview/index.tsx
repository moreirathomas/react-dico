import React from "react";
import { FC } from "react";
import { Word } from "../../models/word.interface";
import style from "./word-preview.module.scss";
import { Link } from "react-router-dom";
import { Indexable } from "../../utils/types";

export type WordPreviewProps = Indexable<Omit<Word, "date">>;

const WordPreview: FC<WordPreviewProps> = ({ en, fr, index }) => {
  return (
    <li className={style.wordPreview}>
      <Link to={`/word/${index}`}>
        <p>{en}</p>
        <p>{fr}</p>
      </Link>
    </li>
  );
};

export default WordPreview;
