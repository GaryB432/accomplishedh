import { hash } from "node:crypto";

export async function delay<T>(cb: () => Promise<T>, seconds = 1): Promise<T> {
  return new Promise((success) => {
    setTimeout(() => {
      success(cb());
    }, seconds * 1000);
  });
}

export function isGary(locals: App.Locals): boolean {
  return hash("md5", locals.userid) === "03b083fd0aadc8883198881ba88111ab";
}
