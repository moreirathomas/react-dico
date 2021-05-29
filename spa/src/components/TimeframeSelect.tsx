import React, { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";

interface Props {
  setter: Dispatch<SetStateAction<number>>;
}

const ONE_MONTH_UNIX = 1000 * 60 * 60 * 24 * 30;

/**
 * @returns Unix timestamp with seconds precision for a given bumber of month in the past.
 */
function getOlderMonthTimestamp(months: number): number {
  // Normalize the timestamp by removing the milliseconds after computation.
  return (Date.now() - ONE_MONTH_UNIX * months) / 1000;
}

export const TimeframeSelect: React.FunctionComponent<Props> = ({ setter }) => {
  const setFilterByMonth = (nb: number) => () => setter(getOlderMonthTimestamp(nb));

  return (
    <div>
      <p>Filter</p>
      <Button action={setFilterByMonth(1)}>One month</Button>
      <Button action={setFilterByMonth(6)}>Six month</Button>
      <Button action={setFilterByMonth(12)}>One year</Button>
    </div>
  );
};
