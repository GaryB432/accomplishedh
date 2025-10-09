export interface Affiliation {
  city: string;
  country: string;
  name: string;
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

export interface Laureate {
  born: string;
  bornCountry: string;
  bornCountryCode: string;
  died: string;
  firstname: string;
  gender: "male" | "female" | "org";
  id: string;
  prizes: Prize[];
  surname: string;
}
