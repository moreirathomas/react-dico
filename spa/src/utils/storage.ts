import wordsJSON from "../data/translations.json";
import { v4 as uuid } from "uuid";
import type { Word } from "../models/word";

const STORAGE_KEY = "local_words";

const deserializeStorage = (rawJSON: string): Word[] => JSON.parse(rawJSON);

const defaultWords = (): Word[] =>
  wordsJSON.map((word) => Object.assign(word, { id: uuid() }));

export function setWordsInStorage(words: Word[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
}

export function initFromStorage(): Word[] {
  const storage = localStorage.getItem(STORAGE_KEY);

  const deserializedWords = storage ? deserializeStorage(storage) : defaultWords();

  if (!storage) {
    setWordsInStorage(deserializedWords);
  }

  return deserializedWords;
}
