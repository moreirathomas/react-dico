import { Dictionary, APPLICATION_URL } from "../model"
import { MonthValue } from "../util/month"

const dictionary = new Dictionary()

fixture("Dictionary").page(APPLICATION_URL)

test("The user should be able to filter the word dictionary correclty", async () => {
  const twelveMonthsCount = await dictionary.filterByMonths(MonthValue.Twelve)

  const sixMonthsCount = await dictionary.filterByMonths(MonthValue.Six)

  await dictionary.expectMoreWordInLargerFilter(twelveMonthsCount, sixMonthsCount)

  const oneMonthCount = await dictionary.filterByMonths(MonthValue.One)

  await dictionary.expectMoreWordInLargerFilter(sixMonthsCount, oneMonthCount)
})
