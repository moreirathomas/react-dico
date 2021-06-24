import React, { Dispatch, SetStateAction } from "react";

interface Props {
  value: string;
  label: string;
  setter: Dispatch<SetStateAction<string>>;
}

export const TextInput: React.FunctionComponent<Props> = ({ value, label, setter }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        value={value}
        onChange={(event) => setter(event.target.value)}
        type="text"
      />
    </div>
  );
};
