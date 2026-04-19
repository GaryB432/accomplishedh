export type AccomplishedHuman = {
  images: { caption: string; size: number; src: string }[];
  name: string;
  notes?: string[];
  serial: string | undefined;
  wb: { id: string };
};
