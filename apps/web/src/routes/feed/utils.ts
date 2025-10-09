export function homeOf(href: string): string {
  const { origin, host, hostname, pathname } = URL.parse(href)!;
  if (
    hostname === "localhost" ||
    hostname.endsWith("humanaccomplishment.com") ||
    hostname.endsWith(".app")
  ) {
    return origin;
  }

  throw new Error(
    `${JSON.stringify({ origin, host, hostname, pathname })} Unrecognized above`,
  );
}
