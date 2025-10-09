import crypto from "crypto-js";

export function isGary(locals: App.Locals): boolean {
  return (
    crypto.MD5(locals.userid).toString(crypto.enc.Hex) ===
    "03b083fd0aadc8883198881ba88111ab"
  );
}

export async function delay<T>(cb: () => Promise<T>, seconds = 1): Promise<T> {
  return new Promise((success) => {
    setTimeout(() => {
      success(cb());
    }, seconds * 1000);
  });
}
