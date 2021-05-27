import React, { useContext, useEffect, useState } from "react";
import { WordsContext } from "../Context";
import { Button, WordFilter, WordList } from "../components";
import type { Word } from "../models/word";

interface Props {}

/**
 * @returns Array of elements whose `date` prop is more recent than `since`.
 */
function filterMoreRecentThan<T extends { date: number }>(since: number, elements: T[]) {
  return elements.filter((el) => el.date > since);
}

const MOCK_UP_WORD = () => ({
  en: "something",
  fr: "quelque chose",
  date: Date.now(),
  id: Math.random(),
});

const MOCK_UP_FILTER_VALUE = () => Date.now();

export const Dictionary: React.FunctionComponent<Props> = () => {
  const { state, update } = useContext(WordsContext);

  const [activeFilter, setActiveFilter] = useState(MOCK_UP_FILTER_VALUE());
  const [filteredWords, setFilteredWords] = useState<Word[]>([]);

  useEffect(() => {
    setFilteredWords(filterMoreRecentThan(activeFilter, state));
  }, [state, activeFilter]);

  const addWord = () => {
    update({ type: "add", word: MOCK_UP_WORD() });
  };

  return (
    <div>
      <WordFilter setter={setActiveFilter} />
      <Button action={addWord} text={"Add a word"}></Button>
      <WordList words={filteredWords} />
    </div>
  );
};
