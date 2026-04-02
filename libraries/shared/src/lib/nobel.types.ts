export interface Affiliation {
  city: string;
  country: string;
  name: string;
}

export interface Laureate {
  born: string;
  bornCity?: string;
  bornCountry: string;
  bornCountryCode: string;
  died: string;
  diedCity?: string;
  diedCountry?: string;
  diedCountryCode?: string;
  firstname: string;
  gender: "female" | "male" | "org";
  id: string;
  prizes: Prize[];
  surname: string;
}

export interface Prize {
  affiliations: Affiliation[];
  category: string;
  motivation: string;
  portrait: "tbd";
  share: string;
  url?: string;
  year: string;
}
