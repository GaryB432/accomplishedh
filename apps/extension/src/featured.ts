import type { EuroHuman } from "@accomplishedh/shared";
import { environment } from "@environments/environment";

export async function getFeatureds(): Promise<EuroHuman[]> {
  const delay = 0;
  // const delay = 5000;

  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(`${environment.haUrl}/api/featured/today`);
        resolve(response.json());
      } catch (e) {
        reject(e);
      }
    }, delay);
  });
}
