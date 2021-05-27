import React, { useReducer, createContext } from "react";
import { remove, prepend, update } from "ramda";
import wordsJSON from "./data/translations.json";
import type { Word } from "./models/word";

const initialState: Word[] = wordsJSON.map((translation, index) =>
  Object.assign(translation, { id: index })
);

// Default values of the context.
export const WordsContext = createContext({
  state: initialState,
  update: (() => {}) as React.Dispatch<WordAction>,
});

type WordAction =
  | { type: "add"; word: Word }
  | { type: "delete"; id: number }
  | { type: "update"; id: number; word: Word };

function reducer(state: Word[], action: WordAction): Word[] {
  const getWordIndex = (id: number): number => state.findIndex((word) => word.id === id);

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
