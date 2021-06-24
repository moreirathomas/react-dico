import React, { useContext } from "react";
import { WordsContext } from "../Context";
import { GameLogic, Header, TimeframeRenderer } from "../components";
import { GameProvider } from "../GameContext";

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
