import React, { useState } from "react";
import { Button } from ".";

interface Props {
  emoji: string;
  text: string;
}

export const GameItemHiddeable: React.FunctionComponent<Props> = ({ emoji, text }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div data-e2e="reveal">
      {isHidden ? (
        <Button action={() => setIsHidden(false)}>Reveal</Button>
      ) : (
        <p data-e2e="revealed-word">
          {emoji} {text}
        </p>
      )}
    </div>
  );
};
