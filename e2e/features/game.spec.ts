import { Game, APPLICATION_URL } from "../model"

const game = new Game()

fixture("Game").page(`${APPLICATION_URL}/game`)

// test("The user should see one visible and one hidden word", async () => {})

test("The user should be able to reveal a word", async () => {
  await game.expectWordToBeHidden()
  await game.clickReveal()
  await game.expectWordToBeRevealed()
})

test("The user should be able to anwser they were correct or incorrect", async () => {
  await game.expectScoreToEqual(0)

  await game.clickCorrect()
  await game.expectScoreToEqual(1)

  await game.clickIncorrect()
  await game.expectScoreToEqual(1)
})

test("The user should be able to play the next round", async () => {
  await game.clickReveal()
  const prev = await game.wordText()

  await game.clickCorrect()
  await game.expectWordToBeHidden()

  await game.clickReveal()
  await game.expecWordToHaveChanged(prev)
})
