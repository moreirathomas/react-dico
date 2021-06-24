import React, { useContext } from "react";
import { WordsContext } from "../contexts/WordsContext";
import { GameProvider } from "../contexts/GameContext";
import { GameLogic, Header, TimeframeRenderer } from "../components";

export const Game: React.FunctionComponent = () => {
  const { state } = useContext(WordsContext);

  return (
    <div>
      <Header>Challenge</Header>
      <TimeframeRenderer words={state}>
        {(words) => (
          <GameProvider words={words}>
            <GameLogic />
          </GameProvider>
        )}
      </TimeframeRenderer>
    </div>
  );
};
