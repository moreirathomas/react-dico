import React, { useReducer, createContext } from "react";
import { remove, prepend, update } from "ramda";
import wordsJSON from "./data/translations.json";
import type { Word } from "./models/word";
import { v4 as uuid } from 'uuid';

const initialState: Word[] = wordsJSON.map((word, index) =>
  Object.assign(word, { id: uuid() })
);

// Default values of the context.
export const WordsContext = createContext({
  state: initialState,
  update: (() => {}) as React.Dispatch<WordAction>,
});

type WordAction =
  | { type: "add"; word: Word }
  | { type: "delete"; id: string }
  | { type: "update"; id: string; word: Word };

function reducer(state: Word[], action: WordAction): Word[] {
  const getWordIndex = (id: string): number => state.findIndex((word) => word.id === id);

  // Using Ramda functional lib for funzies.
  switch (action.type) {
    case "add":
      return prepend(action.word, state);
    case "delete":
      return remove(getWordIndex(action.id), 1, state);
    case "update":
      return update(getWordIndex(action.id), action.word, state);
    default:
      return state;
  }
}

export const WordsProvider: React.FunctionComponent = (props) => {
  const [state, update] = useReducer(reducer, initialState);

  return (
    <WordsContext.Provider value={{ state, update }}>
      {props.children}
    </WordsContext.Provider>
  );
};
