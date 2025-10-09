import { describe, expect, test } from "vitest";
import { lifeDateClaims, schoolClaims } from "../mocks/claims";
import { entityDateOfBirthIso, fromDictionary } from "./translators";

type LanguageDictionary = Record<string, { value: string }>;

const dict: LanguageDictionary = {
  en: { value: "correct" },
  es: { value: "bueno" },
  fr: { value: "vraiment" },
};

describe("Translators", () => {
  test("fromDictionary", () => {
    expect(fromDictionary(dict, "cn")).toEqual("dunno af");
    expect(fromDictionary(dict, "fr")).toEqual("vraiment");
    expect(fromDictionary(dict)).toEqual("correct");
  });

  test("entityDateOfBirthIso no dob", () => {
    expect(
      entityDateOfBirthIso({ claims: { ...schoolClaims } }),
    ).toBeUndefined();
  });

  test("entityDateOfBirthIso", () => {
    expect(entityDateOfBirthIso({ claims: { ...lifeDateClaims } })).toEqual(
      "1879-03-14T00:00:00Z",
    );
  });

  test("entityDateOfBirthIso no claims", () => {
    expect(entityDateOfBirthIso({})).toBeUndefined();
  });
});
