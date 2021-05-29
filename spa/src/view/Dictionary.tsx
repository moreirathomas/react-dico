import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WordsContext } from "../Context";
import { TimeframeSelect, WordList } from "../components";
import type { Word } from "../models/word";

interface Props {}

/**
 * @returns Array of elements whose `date` prop is more recent than `since`.
 */
function filterMoreRecentThan<T extends { date: number }>(since: number, elements: T[]) {
  return elements.filter((el) => el.date > since);
}

export const Dictionary: React.FunctionComponent<Props> = () => {
  const { state } = useContext(WordsContext);

  const [activeFilter, setActiveFilter] = useState(0);
  const [filteredWords, setFilteredWords] = useState<Word[]>([]);

  useEffect(() => {
    setFilteredWords(filterMoreRecentThan(activeFilter, state));
  }, [state, activeFilter]);

  return (
    <div>
      <TimeframeSelect setter={setActiveFilter} />
      <Link to={"/new"}>Add a new word</Link>
      <WordList words={filteredWords} />
    </div>
  );
};
