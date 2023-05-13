/**
 * List of valid CLDR/Unicode calendars supported by modern browser like Chromium or Firefox
 */
export const LIST = [
  "buddhist",
  "ethioaa",
  "ethiopic",
  "gregory",
  "hebrew",
  "indian",
  "islamic",
  "islamic-civil",
  "islamic-rgsa",
  "islamic-tbla",
  "islamic-umalqura",
  "persian",
  "roc",
] as const;

Object.freeze(LIST);

export type Calendar = (typeof LIST)[number];

export type JavaScriptWeekNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Week = [
  JavaScriptWeekNumber,
  JavaScriptWeekNumber,
  JavaScriptWeekNumber,
  JavaScriptWeekNumber,
  JavaScriptWeekNumber,
  JavaScriptWeekNumber,
  JavaScriptWeekNumber
];

export function getCalendarName(c: Calendar, locale: Intl.Locale): string {
  return (
    new Intl.DisplayNames(locale, {
      type: "calendar",
    }).of(c) || c
  );
}
