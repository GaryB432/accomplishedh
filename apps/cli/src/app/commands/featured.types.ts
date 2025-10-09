import { type SharedOptions } from "../shared.js";
interface Options extends SharedOptions {
  days: number;
  perday: number;
}
export type CommandArgs = {
  opts: Options;
  start: string;
};
