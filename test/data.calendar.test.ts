import { readFileSync } from "node:fs";

import { expect, it, describe } from "vitest";

import { calendar } from "../src";

import { isCalendarSupported } from "./helper";

const data = JSON.parse(
  readFileSync("data/calendars.json", { encoding: "utf8" })
);

describe("calendar", () => {
  it("data check", () => {
    expect(data).toMatchObject(calendar.LIST);
  });

  it("getCalendarName", () => {
    expect(
      calendar.getCalendarName("persian", new Intl.Locale("en").maximize())
    ).toBeTruthy();
  });

  for (const c of calendar.LIST) {
    it(`test ${c}`, () => {
      expect(isCalendarSupported(c)).toBe(true);
    });
  }
});
