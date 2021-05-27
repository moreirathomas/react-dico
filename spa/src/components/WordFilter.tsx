import React, { Dispatch, SetStateAction } from "react";

interface Props {
  setter: Dispatch<SetStateAction<number>>;
}

export const WordFilter: React.FunctionComponent<Props> = ({ setter }) => {
  return <div>Implement the filter thanks</div>;
};
