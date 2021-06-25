import { t } from "testcafe"
import { e2eSelector } from "../util/selector"
import { REVEAL, REVEALED_WORD, ANSWER, SCORE_VALUE } from "./selectors"

const answer = {
  correct: e2eSelector(ANSWER).child(0),
  incorrect: e2eSelector(ANSWER).child(1),
}

export class Game {
  public async clickReveal(): Promise<void> {
    await t.click(e2eSelector(REVEAL).child(0))
  }

  public async clickCorrect(): Promise<void> {
    await t.click(answer.correct)
  }

  public async clickIncorrect(): Promise<void> {
    await t.click(answer.incorrect)
  }

  public async expectWordToBeHidden(): Promise<void> {
    await t.expect(e2eSelector(REVEALED_WORD).exists).eql(false)
  }

  public async expectWordToBeRevealed(): Promise<void> {
    await t.expect(e2eSelector(REVEALED_WORD).exists).eql(true)
  }

  public async wordText(): Promise<string> {
    return e2eSelector(REVEAL).child(0).innerText
  }

  public async expecWordToHaveChanged(text: string): Promise<void> {
    await t.expect(e2eSelector(REVEAL).child(0).innerText).notEql(text)
  }

  public async expectScoreToEqual(value: number): Promise<void> {
    const scoreText = (value: number) => `score: ${value.toString()}`
    await t.expect(e2eSelector(SCORE_VALUE).innerText).eql(scoreText(value))
  }
}
