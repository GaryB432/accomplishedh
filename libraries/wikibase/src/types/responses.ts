import type { Entities } from "../types.js";

type Binding = {
  type: string;
  value: string;
};

type BasicResponse = {
  warnings?: Record<string, ResponseWarnings>;
};

export type SuccessResponse = BasicResponse & {
  entities?: Entities;
  search?: SearchResult[];
  success: 1;
};

export type ResponseWarnings = Record<"*", string>;

export type ErrorResponse = BasicResponse & {
  error?: { info: string };
  success: 0;
};

export type QueryBindingsResponse = {
  head: { vars: string[] };
  results: {
    bindings: Array<{ item: Binding }>;
  };
};

export type SearchResult = {
  concepturi?: string;
  description?: string;
  display?: {
    description?: {
      language: string;
      value: string;
    };
    label: {
      language: string;
      value: string;
    };
  };
  id: string;
  label: string;
  match?: {
    language?: string;
    text?: string;
    type?: string;
  };
  pageid?: number;
  repository?: string;
  title?: string;
  url?: string;
};

export type WikibaseResponse = SuccessResponse | ErrorResponse;
