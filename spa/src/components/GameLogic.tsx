import React, { useContext } from "react";
import { GameContext } from "../GameContext";
import { Button, GameItemHiddeable } from ".";
import { emojiFromLang } from "../models/lang";

export const GameLogic: React.FunctionComponent = () => {
  const { state: game, mutation } = useContext(GameContext);

  const handleSuccess = () => mutation({ status: "success" });
  const handleFailure = () => mutation({ status: "failure" });

  return (
    <div>
      <p>
        {emojiFromLang(game.lang.shown)} {game.word[game.lang.shown]}
      </p>
      <GameItemHiddeable
        emoji={emojiFromLang(game.lang.hidden)}
        text={game.word[game.lang.hidden]}
        // Forcefully reset isHidden state on word change
        key={game.word.id}
      />

      <Button action={handleSuccess}>Correct</Button>
      <Button action={handleFailure}>Incorrect</Button>

      <br />
      <code>score: {game.score}</code>
    </div>
  );
};
