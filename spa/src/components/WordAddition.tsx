import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextInput } from ".";

interface Props {
  action: (fr: string, en: string) => void;
}

export const WordAddition: React.FunctionComponent<Props> = ({ action }) => {
  const history = useHistory();
  const [fr, setFr] = useState("");
  const [en, setEn] = useState("");

  const handleAdd = () => {
    if (en === "" && fr === "") {
      return;
    }
    action(fr, en);
    history.push("/");
  };

  return (
    <div>
      <TextInput value={fr} setter={setFr} label={"🇫🇷"} />
      <TextInput value={en} setter={setEn} label={"🇺🇸"} />
      <Button action={handleAdd}>Add word</Button>
    </div>
  );
};
