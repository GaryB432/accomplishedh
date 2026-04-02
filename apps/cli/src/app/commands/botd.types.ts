import { type SharedOptions } from "../shared.js";
export type CommandArgs = {
  opts: Options;
  today: string;
};
interface Options extends SharedOptions {
  listOnly: boolean;
}
