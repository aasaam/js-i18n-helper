import { expect, it, describe } from "vitest";

import { formatter } from "../src";

describe("formatter", () => {
  it("formatter", () => {
    const f = new formatter.Formatter(new Intl.Locale("fa").maximize());
    const num = 999;
    for (const u of formatter.UNIT_LIST) {
      expect(f.unitFormat(num, u)).toBeTruthy();
      for (const p of formatter.UNIT_LIST) {
        expect(f.unitFormat(num, u, p)).toBeTruthy();
      }
    }
  });

  it("percent", () => {
    const f = new formatter.Formatter(new Intl.Locale("fa").maximize());
    expect(f.percentHumanReadable(-999)).toBeTruthy();
    expect(f.percentHumanReadable(999)).toBeTruthy();
    expect(f.percentHumanReadable(0.5)).toBeTruthy();
  });

  it("relativeTimeFormatter", () => {
    const f = new formatter.Formatter(new Intl.Locale("en").maximize());
    expect(
      f.approximateRelativeTimeFormatter(new Date(), new Date())
    ).toBeTruthy();
    expect(
      f.approximateRelativeTimeFormatter(
        new Date("1900-01-01"),
        new Date("2900-01-01")
      )
    ).toBeTruthy();
    expect(
      f.approximateRelativeTimeFormatter(
        new Date("2900-01-01"),
        new Date("1900-01-01")
      )
    ).toBeTruthy();

    for (const u of Object.keys(formatter.RELATIVE_TIMES_REFERENCE)) {
      const unit = u as Intl.RelativeTimeFormatUnit;
      expect(
        typeof f.relativeTimeFormatterByUnit(new Date(), unit, new Date()) ===
          "string"
      ).toBe(true);
      expect(
        typeof f.relativeTimeFormatterByUnit(
          new Date("2022-01-01"),
          unit,
          new Date("2023-01-01")
        ) === "string"
      ).toBe(true);
      expect(
        typeof f.relativeTimeFormatterByUnit(
          new Date("2900-01-01"),
          unit,
          new Date("1900-01-01")
        ) === "string"
      ).toBe(true);
    }

    for (const b of [0, -1024, 1024 * 1024 + 1024]) {
      expect(f.fileSizeHumanReadable(b)).toBeTruthy();
    }
  });

  it("durationDates", () => {
    const f = new formatter.Formatter(new Intl.Locale("en").maximize());
    const d = new Date("2020-01-01");
    console.log(f.durationDates(d, new Date()));
    expect(f.durationDates(d, new Date())).toBeTruthy();
  });
});
