import { DateTime } from "luxon";

import { Locale } from "./locale";
import * as calendar from "./data/calendar";
import { groupBy } from "./helpers";

export const MAX_SUPPORTED_YEAR_LIST = 500;
export const MAX_DAYS_IN_YEAR = 500;
export const MAX_DAYS_IN_MONTH = 40;
Object.freeze(MAX_SUPPORTED_YEAR_LIST);
Object.freeze(MAX_DAYS_IN_YEAR);
Object.freeze(MAX_DAYS_IN_MONTH);

export const MONGODB_OBJECT_ID_FILL_TYPE = ["0", "f"] as const;
type MongoDBObjectIdFillType = (typeof MONGODB_OBJECT_ID_FILL_TYPE)[number];
Object.freeze(MONGODB_OBJECT_ID_FILL_TYPE);

export const MIN_MONGODB_OBJECT_ID_DATE = new Date(0);
export const MAX_MONGODB_OBJECT_ID_DATE = new Date(
  Number.parseInt("ffffffff", 16) * 1000
);
Object.freeze(MIN_MONGODB_OBJECT_ID_DATE);
Object.freeze(MAX_MONGODB_OBJECT_ID_DATE);

export const DATE_TIME_SET_MODE = ["start", "middle", "end"] as const;
type DateTimeSetMode = (typeof DATE_TIME_SET_MODE)[number];
Object.freeze(DATE_TIME_SET_MODE);

export const NUMERIC_TOKENIZE = ["yyyy", "M", "d"] as const;
export type NumericTokenize = (typeof NUMERIC_TOKENIZE)[number];
Object.freeze(NUMERIC_TOKENIZE);

export interface YearOption {
  number: number;
  selected: boolean;
  name: string;
}

export interface MonthOption {
  date: Date;
  selected: boolean;
  name: string;
  nameNumber: string;
  number: number;
}

export interface DayOption {
  date: Date;
  utcDate: Date;
  selected: boolean;
  name: string;
  number: number;
  weekDay: number;
  weekEnd: boolean;
}

export interface DayWeekOption extends DayOption {
  weekNumber: number;
}

export interface WeekHeader {
  short: string;
  long: string;
  narrow: string;
  weekEnd: boolean;
}

export interface DayAlternateCalendar {
  calendar: calendar.Calendar;
  calendarName: string;
  preferred: boolean;
  year: string;
  month: string;
  monthName: string;
  day: string;
  dateString: string;
}

export interface DaysOnMonthPerWeek {
  header: WeekHeader[];
  weeks: any[];
}

/**
 * Date range supported is between 0 until 4294967295 in Unix epoch
 *
 *  Lower date will consider as "1970-01-01T00:00:00.000Z"
 *  Greater date will consider as   "2106-02-07T06:28:15.000Z"
 *
 * @param date {Date}
 * @param mode {'0'|'f'} Fill rest of object id for condition in mongodb
 * @returns {String}
 */
export function dateToMongoDBObjectID(
  date: Date,
  mode: MongoDBObjectIdFillType = "0"
): string {
  if (date < MIN_MONGODB_OBJECT_ID_DATE) {
    return Math.ceil(MIN_MONGODB_OBJECT_ID_DATE.getTime() / 1000)
      .toString(16)
      .padEnd(24, mode);
  } else if (date > MAX_MONGODB_OBJECT_ID_DATE) {
    return Math.floor(MAX_MONGODB_OBJECT_ID_DATE.getTime() / 1000)
      .toString(16)
      .padEnd(24, mode);
  }

  if (mode === "0") {
    return Math.floor(date.getTime() / 1000)
      .toString(16)
      .padEnd(24, mode);
  }

  return Math.ceil(date.getTime() / 1000)
    .toString(16)
    .padEnd(24, mode);
}

export function mongoDBObjectIDToDate(objectId: string): Date {
  if (/^[\da-f]{24}$/i.test(objectId)) {
    return new Date(
      Number.parseInt(objectId.toLowerCase().slice(0, 8), 16) * 1000
    );
  }
  throw new Error("invalid object id");
}

export function dateToUnixTime(date: Date): number {
  return Math.round(date.getTime() / 1000);
}

export function unixTimeToDate(unixTime: number): Date {
  return new Date(unixTime * 1000);
}

export function dateSetTime(
  date: Date,
  mode: DateTimeSetMode = "start",
  utc = false
): Date {
  let times: [number, number, number, number] = [0, 0, 0, 0];
  switch (mode.trim().toLowerCase()) {
    case "middle": {
      times = [12, 0, 0, 0];
      break;
    }
    case "end": {
      times = [23, 59, 59, 999];
      break;
    }
    default: // start
      times = [0, 0, 0, 0];
      break;
  }
  const setTimeFn = utc ? "setUTCHours" : "setHours";
  const d = new Date(date);
  d[setTimeFn](times[0], times[1], times[2], times[3]);
  return d;
}

export class DateTimeCalendar {
  private locale: Locale;
  private date: Date;

  constructor(locale: Locale, date: Date = new Date()) {
    this.locale = locale;
    this.date = date;
  }

  public getDate(): Date {
    return this.date;
  }

  public toString(): string {
    return this.date.toISOString();
  }

  public setDate(date: Date): DateTimeCalendar {
    this.date = date;
    return this;
  }

  public toLocaleDateString(
    options: Intl.DateTimeFormatOptions = {
      dateStyle: "long",
    }
  ): string {
    return this.date.toLocaleDateString(
      this.locale.getLocale().baseName,
      options
    );
  }

  public toLocaleTimeString(
    options: Intl.DateTimeFormatOptions = {
      timeStyle: "long",
    }
  ): string {
    return this.date.toLocaleTimeString(
      this.locale.getLocale().baseName,
      options
    );
  }

  public toLocaleString(
    options: Intl.DateTimeFormatOptions = {
      dateStyle: "long",
      timeStyle: "long",
    }
  ): string {
    return this.date.toLocaleString(this.locale.getLocale().baseName, options);
  }

  public getAlternateCalendars(
    options: Intl.DateTimeFormatOptions = {
      dateStyle: "long",
    }
  ): DayAlternateCalendar[] {
    const result: DayAlternateCalendar[] = [];

    for (const c of this.locale.getCalendars()) {
      if (c.selected) {
        continue;
      }
      const [year, month, monthName, day] = this.format(
        "yyyy | M | MMMM | d",
        this.date,
        c.id
      )
        .split("|")
        .map((i) => i.trim());

      const opt: Intl.DateTimeFormatOptions = Object.assign({}, options, {
        calendar: c.id,
      });

      const dac: DayAlternateCalendar = {
        calendar: c.id,
        calendarName: c.name,
        preferred: c.preferred,
        month,
        monthName,
        year,
        day,
        dateString: this.date.toLocaleDateString(
          this.locale.getLocale().baseName,
          opt
        ),
      };
      result.push(dac);
    }
    return result;
  }

  public format(
    format: string,
    date = this.date,
    outputCalendar: calendar.Calendar = this.locale.getDefaultCalendar().id
  ): string {
    return DateTime.fromJSDate(date)
      .reconfigure({
        locale: this.locale.getLocale().baseName,
        outputCalendar,
      })
      .toFormat(format);
  }

  public tokenize(token: NumericTokenize[], date: Date = this.date): number[] {
    const parts = token
      .filter((i) => NUMERIC_TOKENIZE.includes(i))
      .join(" ")
      .trim();

    if (parts.length > 0) {
      return DateTime.fromJSDate(date)
        .reconfigure({
          outputCalendar: this.locale.getDefaultCalendar().id,
          locale: "en-US",
          numberingSystem: "latn",
        })
        .toFormat(parts)
        .split(" ")
        .map((p) => Number.parseInt(p, 10));
    }

    return [];
  }

  public dateSetTime(
    mode: DateTimeSetMode = "start",
    utc = false
  ): DateTimeCalendar {
    this.date = dateSetTime(this.date, mode, utc);
    return this;
  }

  public dateGetMongoDBObjectId(mode: MongoDBObjectIdFillType = "0"): string {
    return dateToMongoDBObjectID(this.date, mode);
  }

  public yearList(before = -120, after = 20): YearOption[] {
    const start = Math.round(before);
    const end = Math.round(after);
    const diff = Math.abs(start) + Math.abs(after);

    if (diff > MAX_SUPPORTED_YEAR_LIST) {
      throw new RangeError(
        `invalid before after range, max supported range is ${MAX_SUPPORTED_YEAR_LIST}`
      );
    }

    if (start >= after) {
      throw new RangeError(
        `invalid before after range, before must be lower than after`
      );
    }

    const [currentYear] = this.tokenize(["yyyy"]);

    const result: YearOption[] = [];

    for (let i = start; i <= end; i += 1) {
      const number = currentYear + i;
      if (number >= 1) {
        result.push({
          number,
          selected: number === currentYear,
          name: this.locale
            .getFormatter()
            .getNumberFormat({
              useGrouping: false,
            })
            .format(number),
        });
      }
    }
    return result;
  }

  public yearSet(wantedYear: number): DateTimeCalendar {
    const [currentYear, currentMonth, currentDay] = this.tokenize([
      "yyyy",
      "M",
      "d",
    ]);

    wantedYear = Math.round(wantedYear);

    if (wantedYear === currentYear) {
      return this;
    }

    // zero date or to many distance from current year
    if (
      wantedYear < 0 ||
      Math.abs(wantedYear - currentYear) > MAX_SUPPORTED_YEAR_LIST
    ) {
      return this;
    }

    // forward
    let direction = 1;
    if (wantedYear < currentYear) {
      // backward
      direction = -1;
    }

    let i = 0;
    while (true) {
      const dayChange = i * direction;
      const dt = DateTime.fromJSDate(this.date).plus({ day: dayChange });
      const d = dt.toJSDate();

      const [iterateYear, iterateMonth, iterateDay] = this.tokenize(
        ["yyyy", "M", "d"],
        d
      );

      if (
        iterateYear === wantedYear &&
        iterateMonth === currentMonth &&
        iterateDay === currentDay
      ) {
        this.date = d;
        return this;
      }
      i += 1;
    }
  }

  public yearShift(next: boolean): DateTimeCalendar {
    const [currentYear] = this.tokenize(["yyyy"]);
    return this.yearSet(next ? currentYear + 1 : currentYear - 1);
  }

  public monthList(): MonthOption[] {
    const [currentYear, currentMonth, currentDay] = this.tokenize(
      ["yyyy", "M", "d"],
      this.date
    );
    const result: MonthOption[] = [];

    const used: { [key: string]: true } = {};

    for (let i = -MAX_DAYS_IN_YEAR; i <= MAX_DAYS_IN_YEAR; i += 1) {
      const dt = DateTime.fromJSDate(this.date).plus({ day: i });
      const jsDate = dt.toJSDate();

      const [iterateYear, titleInt] = this.tokenize(["yyyy", "M"], jsDate);

      const nameNumber = this.format("M", jsDate);

      if (iterateYear === currentYear && !used[nameNumber]) {
        result.push({
          date: jsDate,
          selected: titleInt === currentMonth,
          name: this.format("MMMM", jsDate),
          nameNumber,
          number: titleInt,
        });
        used[nameNumber] = true;
      }
    }

    return result;
  }

  public monthShift(next: boolean): DateTimeCalendar {
    const [currentYear, currentMonth, currentDay] = this.tokenize(
      ["yyyy", "M", "d"],
      this.date
    );

    for (let i = -MAX_DAYS_IN_MONTH; i <= MAX_DAYS_IN_MONTH; i += 1) {
      const dt = DateTime.fromJSDate(this.date).plus({ day: i });

      const jsDate = dt.toJSDate();

      const [iterateYear, iterateMonth, iterateDay] = this.tokenize(
        ["yyyy", "M", "d"],
        jsDate
      );

      if (iterateDay !== currentDay) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (
        next === true &&
        (iterateYear > currentYear || iterateMonth > currentMonth)
      ) {
        return this.setDate(jsDate);
      } else if (
        next === false &&
        (iterateYear < currentYear || iterateMonth < currentMonth)
      ) {
        return this.setDate(jsDate);
      }
    }
    return this;
  }

  public dayShift(next = true): DateTimeCalendar {
    return this.setDate(
      DateTime.fromJSDate(this.date)
        .plus({
          day: next ? 1 : -1,
        })
        .toJSDate()
    );
  }

  /**
   * @param alternateCalendars array of calendars name or number of addition calendars based on locale
   */
  public daysOfMonthList(): DayOption[] {
    const [currentYear, currentMonth, currentDay] = this.tokenize(
      ["yyyy", "M", "d"],
      this.date
    );
    const result: DayOption[] = [];

    const weekEnds = this.locale.getCountry().e as number[];

    for (let i = -MAX_DAYS_IN_MONTH; i <= MAX_DAYS_IN_MONTH; i += 1) {
      const dt = DateTime.fromJSDate(this.date).plus({ day: i });

      const jsDate = dt.toJSDate();

      const [iterateYear, iterateMonth] = this.tokenize(["yyyy", "M"], jsDate);

      if (iterateYear === currentYear && currentMonth === iterateMonth) {
        const [titleInt] = this.tokenize(["d"], jsDate);

        const weekDay = jsDate.getDay();

        const utcDate = new Date(jsDate.getTime());
        utcDate.setUTCHours(12, 0, 0, 0);

        result.push({
          date: jsDate,
          utcDate,
          weekDay,
          weekEnd: weekEnds.includes(weekDay),
          selected: titleInt === currentDay,
          name: this.format("d", jsDate),
          number: titleInt,
        });
      }
    }
    return result;
  }

  /**
   * @param alternateCalendars array of calendars name or number of addition calendars based on locale
   */
  public daysOfMonthWeekList() {
    const dayList = this.daysOfMonthList();

    const weekDays = this.locale.getCountry().d as number[];

    const [weekStartDay] = weekDays;

    const weekNames: { [key: number]: WeekHeader } = {};

    const days: DayWeekOption[] = [];

    let weekNumber = 0;
    for (const day of dayList) {
      if (!weekNames[day.weekDay]) {
        const weekHeader: WeekHeader = {
          short: this.format("EEE", day.date),
          long: this.format("EEEE", day.date),
          narrow: this.format("EEEEE", day.date),
          weekEnd: day.weekEnd,
        };
        weekNames[day.weekDay] = weekHeader;
      }

      if (day.weekDay === weekStartDay) {
        weekNumber += 1;
      }

      days.push({
        date: day.date,
        utcDate: day.utcDate,
        weekDay: day.weekDay,
        weekEnd: day.weekEnd,
        selected: day.selected,
        name: day.name,
        number: day.number,
        weekNumber,
      });
    }

    const result: DaysOnMonthPerWeek = {
      header: [],
      weeks: [],
    };

    for (const wDay of weekDays) {
      result.header.push(weekNames[wDay]);
    }

    for (const iterateWeekProps of Object.values(
      groupBy(days, (i) => i.weekNumber)
    )) {
      const currentWeek: DayWeekOption[] = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ] as unknown as DayWeekOption[];

      for (const processDay of iterateWeekProps) {
        const weekDayIndex = weekDays.indexOf(
          processDay.date.getDay()
        ) as number;
        const dayProps: DayWeekOption = {
          date: processDay.date,
          utcDate: processDay.utcDate,
          weekDay: processDay.weekDay,
          weekEnd: processDay.weekEnd,
          selected: processDay.selected,
          name: processDay.name,
          number: processDay.number,
          weekNumber,
        };
        currentWeek[weekDayIndex] = dayProps;
      }
      result.weeks.push(currentWeek);
    }

    return result;
  }
}
