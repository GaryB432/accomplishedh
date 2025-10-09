import { type WikibaseConfig } from "./types.js";

export const WIKIDATA_PERSON_PROPERTIES = {
  INSTANCE_OF: "P31", // Instance of (should be human Q5 for people)
  GIVEN_NAME: "P735", // Given name
  FAMILY_NAME: "P734", // Family name
  DATE_OF_BIRTH: "P569", // Date of birth
  DATE_OF_DEATH: "P570", // Date of death
  PLACE_OF_BIRTH: "P19", // Place of birth
  PLACE_OF_DEATH: "P20", // Place of death
  GENDER: "P21", // Sex or gender
  OCCUPATION: "P106", // Occupation
  EDUCATED_AT: "P69", // Educated at
  EMPLOYER: "P108", // Employer
  COUNTRY_OF_CITIZENSHIP: "P27", // Country of citizenship
  AWARD_RECEIVED: "P166", // Award received
  FIELD_OF_WORK: "P101", // Field of work
  NOTABLE_WORK: "P800", // Notable work
  IMAGE: "P18", // Image
  OFFICIAL_WEBSITE: "P856", // Official website
  ORCID_ID: "P496", // ORCID ID (for academics)
  TWITTER_USERNAME: "P2002", // Twitter username
  FACEBOOK_ID: "P2013", // Facebook ID
  LINKEDIN_ID: "P6634", // LinkedIn ID
  GITHUB_USERNAME: "P2037", // GitHub username
  NATIVE_LANGUAGE: "P103", // Native language
  LANGUAGE_SPOKEN: "P1412", // Languages spoken, written or signed
  RELIGION: "P140", // Religion
  POSITION_HELD: "P39", // Position held
  DOCTORAL_ADVISOR: "P184", // Doctoral advisor
  DOCTORAL_STUDENT: "P185", // Doctoral student
  CHILD: "P40", // Child
  FATHER: "P22", // Father
  MOTHER: "P25", // Mother
  SPOUSE: "P26", // Spouse
  CAUSE_OF_DEATH: "P509", // Cause of death
  RESIDENCE: "P551", // Residence
  BIBLIOGRAPHY: "P1343", // Bibliography
  POLITICAL_PARTY: "P102", // Political party
  HEIGHT: "P2048", // Height
  MEMBER_OF: "P463", // Member of
  EMAIL_ADDRESS: "P968", // Email address
  MANNER_OF_DEATH: "P1196", // Manner of death
};
