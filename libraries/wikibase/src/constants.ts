import { type WikibaseConfig } from "./types";

export const WIKIDATA_PERSON_PROPERTIES = {
  AWARD_RECEIVED: "P166", // Award received
  BIBLIOGRAPHY: "P1343", // Bibliography
  CAUSE_OF_DEATH: "P509", // Cause of death
  CHILD: "P40", // Child
  COUNTRY_OF_CITIZENSHIP: "P27", // Country of citizenship
  DATE_OF_BIRTH: "P569", // Date of birth
  DATE_OF_DEATH: "P570", // Date of death
  DOCTORAL_ADVISOR: "P184", // Doctoral advisor
  DOCTORAL_STUDENT: "P185", // Doctoral student
  EDUCATED_AT: "P69", // Educated at
  EMAIL_ADDRESS: "P968", // Email address
  EMPLOYER: "P108", // Employer
  FACEBOOK_ID: "P2013", // Facebook ID
  FAMILY_NAME: "P734", // Family name
  FATHER: "P22", // Father
  FIELD_OF_WORK: "P101", // Field of work
  GENDER: "P21", // Sex or gender
  GITHUB_USERNAME: "P2037", // GitHub username
  GIVEN_NAME: "P735", // Given name
  HEIGHT: "P2048", // Height
  IMAGE: "P18", // Image
  INSTANCE_OF: "P31", // Instance of (should be human Q5 for people)
  LANGUAGE_SPOKEN: "P1412", // Languages spoken, written or signed
  LINKEDIN_ID: "P6634", // LinkedIn ID
  MANNER_OF_DEATH: "P1196", // Manner of death
  MEMBER_OF: "P463", // Member of
  MOTHER: "P25", // Mother
  NATIVE_LANGUAGE: "P103", // Native language
  NOTABLE_WORK: "P800", // Notable work
  OCCUPATION: "P106", // Occupation
  OFFICIAL_WEBSITE: "P856", // Official website
  ORCID_ID: "P496", // ORCID ID (for academics)
  PLACE_OF_BIRTH: "P19", // Place of birth
  PLACE_OF_DEATH: "P20", // Place of death
  POLITICAL_PARTY: "P102", // Political party
  POSITION_HELD: "P39", // Position held
  RELIGION: "P140", // Religion
  RESIDENCE: "P551", // Residence
  SPOUSE: "P26", // Spouse
  TWITTER_USERNAME: "P2002", // Twitter username
};

export const ROOTS = {
  Art: "Q36649",
  Lit: "Q8242",
  Music: "Q9730",
  Science: "Q336",
};

export const USER_AGENT =
  "AccomplishedHBot/1.0 (editor@humanaccomplishment.com)";
