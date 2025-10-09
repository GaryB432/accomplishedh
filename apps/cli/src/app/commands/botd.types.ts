import { type SharedOptions } from "../shared.js";
interface Options extends SharedOptions {
  listOnly: boolean;
}
export type CommandArgs = {
  opts: Options;
  today: string;
};
