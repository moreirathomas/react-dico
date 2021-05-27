import React from "react";

interface Props {
  action: () => void;
  text: string;
}

export const Button: React.FunctionComponent<Props> = ({ action, text }) => {
  return <button onClick={action}>{text}</button>;
};
