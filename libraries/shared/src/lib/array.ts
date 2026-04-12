export function split<T>(b: T[], max: number): T[][] {
  if (!Number.isInteger(max) || max <= 0) {
    throw new Error("max must be a positive integer");
  }

  const res: T[][] = [];

  for (let start = 0; start < b.length; start += max) {
    res.push(b.slice(start, start + max));
  }

  return res;
}
