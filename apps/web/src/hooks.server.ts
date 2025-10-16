import { dev } from "$app/environment";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
  if (
    dev &&
    event.url.pathname === "/.well-known/appspecific/com.chrome.devtools.json"
  ) {
    return new Response(undefined, { status: 404 });
  }

  let theme: string | null = null;

  const newTheme = event.url.searchParams.get("theme");
  const cookieTheme = event.cookies.get("colortheme");

  event.locals.todayISO = new Date().toISOString();
  let userid = event.cookies.get("userid");

  const oneYearSeconds = 60 * 60 * 24 * 365;

  if (newTheme) {
    theme = newTheme;
  } else if (cookieTheme) {
    theme = cookieTheme;
  }

  if (!userid) {
    userid = crypto.randomUUID();
    event.cookies.set("userid", userid, {
      httpOnly: false,
      maxAge: oneYearSeconds,
      path: "/",
      sameSite: "strict",
      secure: !dev,
    });
  }

  event.locals.userid = userid;

  if (theme) {
    return await resolve(event, {
      transformPageChunk: ({ html }) =>
        html.replace('data-theme=""', `data-theme="${theme}"`),
    });
  }

  return await resolve(event);
}) satisfies Handle;
