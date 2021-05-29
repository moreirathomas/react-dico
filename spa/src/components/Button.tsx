import React from "react";

interface Props {
  action: () => void;
}

export const Button: React.FunctionComponent<Props> = ({ action, children }) => {
  return <button onClick={action}>{children}</button>;
};
