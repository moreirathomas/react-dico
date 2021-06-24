import React, { useState } from "react";
import { TimeframeSelect } from ".";
import { Word } from "../models/word";

interface Props {
  words: Word[];
  children: (words: Word[]) => React.ReactElement;
}

/**
 * @returns Array of elements whose `date` prop is more recent than `since`.
 */
function filterMoreRecentThan<T extends { date: number }>(since: number, elements: T[]) {
  return elements.filter((el) => el.date > since);
}

export const TimeframeRenderer: React.FunctionComponent<Props> = ({
  words,
  children,
}) => {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div data-e2e="timeframe">
      <TimeframeSelect setter={setActiveFilter} />
      {children(filterMoreRecentThan(activeFilter, words))}
    </div>
  );
};
