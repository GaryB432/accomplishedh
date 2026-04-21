export type AccomplishedHuman = {
  serial: string | undefined;
  wb: { id: string };
  name: string;
  images: { caption: string; size: number; src: string }[];
  notes?: string[];
};
