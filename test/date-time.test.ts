import { expect, it, describe } from "vitest";

import { dateTime, locale } from "../src";

import { log } from "./helper";

describe("date time calendar", () => {
  it("unix time", () => {
    const d = new Date();
    expect(dateTime.dateToUnixTime(d)).toBeTruthy();
    expect(dateTime.unixTimeToDate(dateTime.dateToUnixTime(d))).toBeTruthy();
  });

  it("mongodb", () => {
    const d = new Date();
    expect(dateTime.dateToMongoDBObjectID(d)).toBeTruthy();
    expect(dateTime.dateToMongoDBObjectID(d, "0")).toBeTruthy();
    expect(dateTime.dateToMongoDBObjectID(d, "f")).toBeTruthy();
    expect(
      dateTime.dateToMongoDBObjectID(new Date("1900-01-01T00:00:00.000Z"), "f")
    ).toBeTruthy();
    expect(
      dateTime.dateToMongoDBObjectID(new Date("2020-01-01T00:00:00.000Z"), "f")
    ).toBeTruthy();
    expect(
      dateTime.mongoDBObjectIDToDate(
        dateTime.dateToMongoDBObjectID(
          new Date("2500-01-01T00:00:00.000Z"),
          "f"
        )
      )
    ).toBeTruthy();

    expect(() => dateTime.mongoDBObjectIDToDate("Sample")).toThrowError();
  });

  it("dateSetTime", () => {
    const d = new Date();
    expect(dateTime.dateSetTime(d)).toBeTruthy();
    expect(dateTime.dateSetTime(d, "start", true)).toBeTruthy();
    expect(dateTime.dateSetTime(d, "middle", true)).toBeTruthy();
    expect(dateTime.dateSetTime(d, "end", true)).toBeTruthy();
    expect(dateTime.dateSetTime(d, "start", false)).toBeTruthy();
    expect(dateTime.dateSetTime(d, "middle", false)).toBeTruthy();
    expect(dateTime.dateSetTime(d, "end", false)).toBeTruthy();
  });

  it("DateTimeCalendar", () => {
    const dt = new dateTime.DateTimeCalendar(new locale.Locale("fa"));

    expect(dt.setDate(new Date())).toBeTruthy();
    expect(dt.toString()).toBeTruthy();
    expect(dt.toLocaleDateString()).toBeTruthy();
    expect(dt.toLocaleTimeString()).toBeTruthy();
    expect(dt.toLocaleString()).toBeTruthy();
    expect(dt.getDate()).toBeTruthy();
    expect(dt.dateSetTime()).toBeTruthy();
    expect(dt.dateSetTime("middle")).toBeTruthy();

    expect(dt.dateGetMongoDBObjectId("f")).toBeTruthy();
    expect(dt.format("yyyy MM")).toBeTruthy();
    expect(dt.tokenize(["yyyy"])).toBeTruthy();
    expect(dt.tokenize([])).toBeTruthy();
    expect(dt.yearList()).toBeTruthy();
    expect(dt.yearList(-5, 0)).toBeTruthy();
    expect(() => dt.yearList(0, 0)).toThrowError();
    expect(() => dt.yearList(-5000, 1000)).toThrowError();
    expect(() => dt.yearList(5, 1)).toThrowError();
    expect(dt.setDate(new Date())).toBeTruthy();

    const i = dt
      .yearList(-10, 3)
      .find((i) => i.selected) as dateTime.YearOption;

    dt.yearList(-10, 3);
    dt.yearSet(i.number + 3);
    dt.yearSet(i.number - 3);
    dt.yearSet(i.number);
    dt.yearSet(i.number);
    dt.yearSet(dateTime.MAX_SUPPORTED_YEAR_LIST + 1);
    dt.yearShift(true);
    dt.yearShift(false);
    dt.yearSet(i.number);
    dt.monthList();
    dt.monthShift(true);
    dt.monthShift(false);
    dt.dayShift(true);
    dt.dayShift(false);
    dt.daysOfMonthList();
    dt.daysOfMonthWeekList();
    log(dt.getAlternateCalendars());
  });
});
