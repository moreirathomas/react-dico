import { t } from "testcafe"
import { e2eSelector } from "../util/selector"
import { MonthValue } from "../util/month"
import { DICTIONARY, TIMEFRAME } from "./selectors"

export class Dictionary {
  public async filterByMonths(value: MonthValue): Promise<number> {
    // Filter by month buttons are ordered. Index 0 is always a title.
    const indexFromMonthValue = (value: MonthValue) => value + 1

    await t.click(e2eSelector(TIMEFRAME).child(indexFromMonthValue(value)))
    return e2eSelector(DICTIONARY).childElementCount
  }

  public async expectMoreWordInLargerFilter(greaterVal: number, lowerVal: number): Promise<void> {
    await t.expect(greaterVal).gte(lowerVal)
  }
}
