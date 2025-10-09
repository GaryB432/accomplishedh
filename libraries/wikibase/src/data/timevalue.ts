export function isoFrom(datavalue: {
  type: "time";
  value: { time: string };
}): string {
  const { time } = datavalue.value;

  if (!time.match(/^[+-]\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/)) {
    throw new Error(`cannot make "${time}" into an ISO date`, {
      cause:
        "value does not match the format of Time_datatype ref: https://www.wikidata.org/wiki/Help:Dates#Time_datatype",
    });
  }

  return time.slice(1);
}
