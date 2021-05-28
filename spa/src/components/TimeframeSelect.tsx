import React, { Dispatch, SetStateAction } from "react";

interface Props {
  setter: Dispatch<SetStateAction<number>>;
}

const ONE_MONTH_UNIX = 1000 * 60 * 60 * 24 * 30;

export const TimeframeSelect: React.FunctionComponent<Props> = ({ setter }) => {
  const getPreviousMonthTimestamp = (months: number) =>
    // Normalize the timestamp by removing the milliseconds after computation.
    (Date.now() - ONE_MONTH_UNIX * months) / 1000;

  return (
    <div>
      <p>Filter</p>
      <button onClick={() => setter(getPreviousMonthTimestamp(1))}>One month</button>
      <button onClick={() => setter(getPreviousMonthTimestamp(6))}>Six months</button>
      <button onClick={() => setter(getPreviousMonthTimestamp(24))}>One year</button>
    </div>
  );
};
