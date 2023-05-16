import { readFileSync } from "node:fs";

import { expect, it, describe } from "vitest";

import { country } from "../src";

import { isCountrySupported } from "./helper";

const data = JSON.parse(
  readFileSync("data/countries.json", { encoding: "utf8" })
);

describe("country", () => {
  for (const c of Object.values(country.LIST)) {
    it(`test ${c.i}`, () => {
      expect(isCountrySupported(c.i)).toBe(true);
    });
  }
  it("data", () => {
    expect(data).toMatchObject(Object.keys(country.LIST));
  });
  it("get props", () => {
    expect(country.getProperties("DE")?.i).toBe("DE");
    expect(country.getProperties("NOT")).toBe(undefined);
  });
});
