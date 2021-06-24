import React, { useState } from "react";
import { Button } from ".";

interface Props {
  emoji: string;
  text: string;
}

export const GameItemHiddeable: React.FunctionComponent<Props> = ({ emoji, text }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      {isHidden ? (
        <Button action={() => setIsHidden(false)}>Reveal</Button>
      ) : (
        <p>
          {emoji} {text}
        </p>
      )}
    </div>
  );
};
