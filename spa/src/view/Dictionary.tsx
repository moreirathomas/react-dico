import React, { useContext, useEffect, useState } from "react";
import { WordsContext } from "../Context";
import { Button, TimeframeSelect, WordList } from "../components";
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

export const Dictionary: React.FunctionComponent<Props> = () => {
  const { state, update } = useContext(WordsContext);

  const [activeFilter, setActiveFilter] = useState(0);
  const [filteredWords, setFilteredWords] = useState<Word[]>([]);

  useEffect(() => {
    setFilteredWords(filterMoreRecentThan(activeFilter, state));
  }, [state, activeFilter]);

  const addWord = () => {
    update({ type: "add", word: MOCK_UP_WORD() });
  };

  return (
    <div>
      <TimeframeSelect setter={setActiveFilter} />
      <Button action={addWord} text={"Add a word"}></Button>
      <WordList words={filteredWords} />
    </div>
  );
};
