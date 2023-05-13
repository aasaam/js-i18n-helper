import { readFileSync } from "node:fs";

import { expect, it, describe } from "vitest";

import { language } from "../src";

import { isLanguageFullySupported } from "./helper";

const data = JSON.parse(
  readFileSync("data/languages.json", { encoding: "utf8" })
);

describe("language", () => {
  it("data", () => {
    expect(data.list).toMatchObject(language.LIST);
    expect(data.popular).toMatchObject(language.LIST_POPULAR);
    expect(data.rtl).toMatchObject(language.LIST_RTL);
  });

  for (const code of language.LIST) {
    it(`test ${code}`, () => {
      expect(isLanguageFullySupported(code)).toBe(true);
    });
  }
});
