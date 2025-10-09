/* eslint @typescript-eslint/no-explicit-any: "off" */
/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */

import "./styles.scss";

export default {
  action: {
    async setBadgeText(details: {
      tabId?: number | undefined;
      text: string;
    }): Promise<void> {
      console.log(details);
    },
  },
  tabs: {
    create(a: { url: string }): null {
      alert(a.url);
      return null;
    },
  },
  runtime: {
    onMessage: {
      addListener(
        a: (msg?: any, sender?: { tab?: chrome.tabs.Tab }) => void,
      ): void {
        if (typeof a !== "function") {
          throw new Error("s/b a function");
        }
      },
    },
    sendMessage(msg: any, cb: (r: any) => void): void {
      console.log(msg);
      cb(void 0);
    },
  },
};
