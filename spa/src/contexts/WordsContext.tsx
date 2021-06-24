import React, { useReducer, createContext } from "react";
import { remove, prepend, update } from "ramda";
import type { Word } from "../models/word";
import { initFromStorage, setWordsInStorage } from "../utils/storage";

const initialState = initFromStorage();

// Default values of the context.
export const WordsContext = createContext({
  state: initialState,
  mutation: (() => {}) as React.Dispatch<WordAction>,
});

type WordAction =
  | { type: "add"; word: Word }
  | { type: "delete"; id: string }
  | { type: "edit"; id: string; word: Word };

function reducer(state: Word[], action: WordAction): Word[] {
  const getWordIndex = (id: string): number => state.findIndex((word) => word.id === id);

  // Using Ramda functional lib for funzies.
  switch (action.type) {
    case "add":
      return prepend(action.word, state);
    case "delete":
      return remove(getWordIndex(action.id), 1, state);
    case "edit":
      return update(getWordIndex(action.id), action.word, state);
    default:
      return state;
  }
}

function reducerWithStorageMutation(state: Word[], action: WordAction): Word[] {
  const newState = reducer(state, action);
  setWordsInStorage(newState);
  return newState;
}

export const WordsProvider: React.FunctionComponent = (props) => {
  const [state, mutation] = useReducer(reducerWithStorageMutation, initialState);

  return (
    <WordsContext.Provider value={{ state, mutation }}>
      {props.children}
    </WordsContext.Provider>
  );
};
