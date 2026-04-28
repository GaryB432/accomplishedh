import type { Entities } from "../types.js";

export type ErrorResponse = BasicResponse & {
  error?: { info: string };
  success: 0;
};

type BindingUri = {
  type: "uri";
  value: string;
};

type BindingLiteral = {
  "xml:lang"?: string | undefined;
  type: "literal";
  value: string;
};

export type Binding = BindingLiteral | BindingUri;

export type QueryBindingsResponse = {
  head: { vars: string[] };
  results: {
    bindings: Record<string, Binding>[];
  };
};

export type ResponseWarnings = Record<"*", string>;

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

export type SuccessResponse = BasicResponse & {
  entities?: Entities;
  search?: SearchResult[];
  success: 1;
};

export type WikibaseResponse = ErrorResponse | SuccessResponse;

type BasicResponse = {
  warnings?: Record<string, ResponseWarnings>;
};
