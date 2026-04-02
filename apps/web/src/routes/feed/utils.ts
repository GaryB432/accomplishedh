export function homeOf(href: string): string {
  const { host, hostname, origin, pathname } = URL.parse(href)!;
  if (
    hostname === "localhost" ||
    hostname.endsWith("humanaccomplishment.com") ||
    hostname.endsWith(".app")
  ) {
    return origin;
  }

  throw new Error(
    `${JSON.stringify({ host, hostname, origin, pathname })} Unrecognized above`,
  );
}
