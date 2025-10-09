export function match(param: string): boolean {
  const feeds = ["atom", "rss"];
  return feeds.includes(param);
}
