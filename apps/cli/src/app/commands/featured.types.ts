import { type SharedOptions } from "../shared.js";
export type CommandArgs = {
  opts: Options;
  start: string;
};
interface Options extends SharedOptions {
  days: number;
  perday: number;
}
