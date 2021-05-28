import React, { useReducer, createContext } from "react";
import { remove, prepend, update } from "ramda";
import type { Word } from "./models/word";
import { initFromStorage, setWordsInStorage } from "./utils/storage";

const initialState = initFromStorage();

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
      state = prepend(action.word, state);
      break;
    case "delete":
      state = remove(getWordIndex(action.id), 1, state);
      break;
    case "update":
      state = update(getWordIndex(action.id), action.word, state);
      break;
    default:
      break;
  }
  setWordsInStorage(state);
  return state;
}

export const WordsProvider: React.FunctionComponent = (props) => {
  const [state, update] = useReducer(reducer, initialState);

  return (
    <WordsContext.Provider value={{ state, update }}>
      {props.children}
    </WordsContext.Provider>
  );
};
