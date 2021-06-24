import { Word } from "./word";
import { Lang } from "./lang";

type LangRandomArrangement =
  | { hidden: Lang.En; shown: Lang.Fr }
  | { hidden: Lang.Fr; shown: Lang.En };

export interface Game {
  score: number;
  wordList: Word[];
  word: Word;
  lang: LangRandomArrangement;
}

export const randomizeLang = (): LangRandomArrangement => {
  return Math.random() < 0.5
    ? { hidden: Lang.En, shown: Lang.Fr }
    : { hidden: Lang.Fr, shown: Lang.En };
};
