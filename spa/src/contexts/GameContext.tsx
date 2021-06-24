import React, { useReducer, createContext, useEffect } from "react";
import { move } from "ramda";
import { Game, randomizeLang } from "../models/game";
import type { Word } from "../models/word";

function initFromWordsContext(words: Word[]): Game {
  return {
    score: 0,
    wordList: words,
    word: words[0],
    lang: randomizeLang(),
  };
}

type GameAction = { status: "success" | "failure" };

type TimeframeMutation = { words: Word[] };

const isTimeFrameMutation = (
  action: GameAction | TimeframeMutation
): action is TimeframeMutation => "words" in action;

// GameContext relies on WordsContext to get its default value for state.
// Here we simply type cast. The default sate is set in GameProvider.
// The only way to mutate the context from useContext(GameContext) is
// by calling a mutation of type GameAction.
export const GameContext = createContext({
  state: {} as Game,
  mutation: (() => {}) as React.Dispatch<GameAction>,
});

// reducer is capable of handling two action type to mutates the context.
// TimeframeMutation can only be called from inside GameProvider.
function reducer(state: Game, action: GameAction | TimeframeMutation): Game {
  if (isTimeFrameMutation(action)) {
    return { ...state, wordList: action.words, word: action.words[0] };
  }

  const next = move(0, state.wordList.length - 1, state.wordList);
  return {
    score: action.status === "success" ? state.score + 1 : state.score,
    wordList: next,
    word: next[0],
    lang: randomizeLang(),
  };
}

interface Props {
  words: Word[];
}

// GameProvider sets the initial state with the prop words.
// It dynamically filters the words when the prop changes by manually
// calling a mutation of type TimeframeMutation on the state.
//
// FIXME currently TimeframeMutation induces a full and immediate
// reset of the words array.
export const GameProvider: React.FunctionComponent<Props> = ({ words, children }) => {
  const initialState = initFromWordsContext(words);

  const [game, mutation] = useReducer(reducer, initialState);

  useEffect(() => {
    mutation({ words });
  }, [words]);

  return (
    <GameContext.Provider value={{ state: game, mutation }}>
      {children}
    </GameContext.Provider>
  );
};
