export enum Lang {
  En = "en",
  Fr = "fr",
}

export const emojiFromLang = (lang: Lang): string => (lang === Lang.En ? "🇺🇸" : "🇫🇷");
