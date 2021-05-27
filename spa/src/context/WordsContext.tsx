import React, { useReducer, createContext } from "react";
import translationData from "../data/translations.json";
import type { Word } from "../models/word.interface";

const initialState = translationData.map((translation, index) =>
  Object.assign(translation, { id: index })
);

// Default values of the context.
export const WordsContext = createContext({
  state: initialState,
  update: (() => {}) as (...args: any) => any, // @TODO eh
});

enum ActionType {
  Add = "add",
  Update = "update",
  Delete = "delete",
}

// @TODO refactor this
type WordAction =
  | { type: ActionType.Add; word: Word }
  | { type: ActionType.Delete; index: number }
  | { type: ActionType.Update; index: number; word: Word };

// Each case could be defined in the related component.
// However this allows for a single type declaration.
function reducer(state: Word[], action: WordAction): Word[] {
  switch (action.type) {
    case ActionType.Add:
      return [action.word, ...state];
    case ActionType.Delete:
      return state.splice(action.index, 1);
    case ActionType.Update:
      return state.splice(action.index, 1, action.word);
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
