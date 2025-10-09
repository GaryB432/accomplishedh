type ISODate = string;

const scratchD = new Date();

export function addDays(from: ISODate, days: number): ISODate | undefined {
  const dps = from.split("-");
  if (dps.length === 3 && dps[2]) {
    dps[2] = dps[2].slice(0, 2);
    const dfrom = Date.UTC(Number(dps[0]), Number(dps[1]) - 1, Number(dps[2]));
    scratchD.setTime(dfrom + 24 * days * 60 * 60 * 1000);
    return scratchD.toISOString();
  }
  throw new Error("wtf unexpected date");
}

export function nextDate(mmdd: string, now: ISODate): ISODate {
  const nowy = now.slice(0, 4);
  const check = mmdd.slice(5, 10);
  const nexty = (parseInt(nowy) + 1).toString();
  const passed = check.localeCompare(now.slice(5, 10));
  const sendmd = `${passed < 0 ? nexty : nowy}-${check}`;
  return `${sendmd}T00:00:00.000Z`;
}

export function monthCheck(a: ISODate, bmd: string): boolean {
  const md = (s: string): string => s.slice(5, 7);
  if (a === void 0) {
    throw new Error("cannot filter that");
  }
  const amd = md(a);
  return amd.localeCompare(bmd) === 0;
}

export function dayCompare(
  a: ISODate | undefined,
  b: ISODate | undefined,
): number {
  const md = (s: string): string => s.slice(5, 10).concat(s.slice(0, 4));
  if (a === void 0 || b === void 0) {
    throw new Error("cannot sort that");
  }
  const amd = md(a);
  const bmd = md(b);
  return amd.localeCompare(bmd);
}

export function daysFromNow(subject: ISODate, now: Date): number {
  return Math.ceil(
    (Date.parse(subject.slice(0, 10)) - now.valueOf()) / (1000 * 60 * 60 * 24),
  );
}

export function isValidISO8601(s: string): boolean {
  return s.length === 10 && /\d{4}-[01]\d-[0-3]\d$/.test(s);
}

export function midday(subject: ISODate): ISODate {
  return subject.slice(0, 10).concat("T12:00:00.000Z");
}
