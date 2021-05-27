import React, { useContext } from "react";
import { WordItem } from "../components/WordItem";
import { WordsContext } from "../context/WordsContext";

interface Props {}

export const Dictionary: React.FunctionComponent<Props> = () => {
  const { state, update } = useContext(WordsContext);

  const addWord = () => {
    const word = { en: "e,oa", fr: "azhizaen", date: Date.now() };
    update({ type: "add", word });
  };

  return (
    <div>
      <button onClick={addWord}>ADDDDDD</button>
      <ul>
        {state.map((word, index) => (
          <WordItem key={index} index={index} en={word.en} fr={word.fr} id={word.id} />
        ))}
      </ul>
    </div>
  );
};
