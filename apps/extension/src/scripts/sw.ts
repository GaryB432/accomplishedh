import { environment } from "@environments/environment";

<<<<<<< HEAD
function diffCount(newIds: string[], savedIds: string[]): number {
  return newIds.reduce<number>((counter, id) => {
    if (!savedIds.includes(id)) {
      counter++;
    }
    return counter;
  }, 0);
}

chrome.runtime.onInstalled.addListener(
  async (): Promise<void> =>
    chrome.alarms.create({
      periodInMinutes: environment.checkFeaturedsEveryMinutes,
    }),
);

chrome.alarms.onAlarm.addListener(async () => {
=======
async function checkFeatureds(): Promise<void> {
>>>>>>> origin/master
  try {
    const fresponse = await fetch(`${environment.haUrl}/api/featured/today`);
    if (fresponse.ok) {
      const featureds = (await fresponse.json()) as Array<{ id: string }>;
      const ids = featureds.map((h) => h.id);
      console.log(new Date().toString(), JSON.stringify(ids));
      const retrievedIds = await chrome.storage.local.get("ids");
      const saved = retrievedIds as {
        ids?: string[];
      };
      if (saved.ids) {
        const diff = diffCount(ids, saved.ids);
        if (diff > 0) {
          await chrome.action.setBadgeText({ text: diff.toString() });
        }
      }
      await chrome.storage.local.set({ ids });
    }
  } catch (ev) {
    const err = ev instanceof Error ? ev : new Error(String(ev));
    console.log(new Date().toString(), err.message);
  }
}

function diffCount(newIds: string[], savedIds: string[]): number {
  return newIds.reduce<number>((counter, id) => {
    if (!savedIds.includes(id)) {
      counter++;
    }
    return counter;
  }, 0);
}

chrome.runtime.onInstalled.addListener(() => {
  void chrome.alarms.create({
    periodInMinutes: environment.checkFeaturedsEveryMinutes,
  });
});

chrome.alarms.onAlarm.addListener(() => {
  void checkFeatureds();
});
