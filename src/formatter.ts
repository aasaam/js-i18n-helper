import { minMaxNumber } from "./helpers";

export const UNIT_LIST = [
  "acre",
  "bit",
  "byte",
  "celsius",
  "centimeter",
  "day",
  "degree",
  "fahrenheit",
  "fluid-ounce",
  "foot",
  "gallon",
  "gigabit",
  "gigabyte",
  "gram",
  "hectare",
  "hour",
  "inch",
  "kilobit",
  "kilobyte",
  "kilogram",
  "kilometer",
  "liter",
  "megabit",
  "megabyte",
  "meter",
  "mile",
  "mile-scandinavian",
  "milliliter",
  "millimeter",
  "millisecond",
  "minute",
  "month",
  "ounce",
  "percent",
  "petabyte",
  "pound",
  "second",
  "stone",
  "terabit",
  "terabyte",
  "week",
  "yard",
  "year",
] as const;
export type Unit = (typeof UNIT_LIST)[number];
Object.freeze(UNIT_LIST);

export const UNIT_DISPLAY_TYPES = ["narrow", "short", "long"] as const;
export type UnitDisplayTypes = (typeof UNIT_DISPLAY_TYPES)[number];
Object.freeze(UNIT_DISPLAY_TYPES);

export const FILE_SIZE_UNITS = {
  terabyte: 1_099_511_627_776, // 1024 × 1024 × 1024 x 1024
  gigabyte: 1_073_741_824, // 1024 × 1024 × 1024
  megabyte: 1_048_576, // 1024 × 1024
  kilobyte: 1024, // 1024 × 1024
};
Object.freeze(FILE_SIZE_UNITS);

export const RELATIVE_TIME_DIVISION: {
  amount: number;
  unit: Intl.RelativeTimeFormatUnit;
}[] = [
  { amount: 60, unit: "seconds" },
  { amount: 60, unit: "minutes" },
  { amount: 24, unit: "hours" },
  { amount: 7, unit: "days" },
  { amount: 4.34524, unit: "weeks" },
  { amount: 12, unit: "months" },
  { amount: Number.POSITIVE_INFINITY, unit: "years" },
];
Object.freeze(RELATIVE_TIME_DIVISION);

export type RelativeTimesTypeReference = {
  [key in Intl.RelativeTimeFormatUnit]?: number;
};

export const RELATIVE_TIMES_REFERENCE: RelativeTimesTypeReference = {
  year: 31536000,
  quarter: 7776000,
  month: 2592000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
} as const;
Object.freeze(RELATIVE_TIMES_REFERENCE);

export class Formatter {
  private locale: Intl.Locale;

  constructor(locale: Intl.Locale) {
    this.locale = locale;
  }

  public getNumberFormat(
    options?: Intl.NumberFormatOptions
  ): Intl.NumberFormat {
    return new Intl.NumberFormat(this.locale.baseName, options);
  }

  public getPluralRules(options?: Intl.PluralRulesOptions): Intl.PluralRules {
    return new Intl.PluralRules(this.locale.baseName, options);
  }

  public unitFormat(
    number: number,
    unit: Unit,
    per?: Unit,
    unitDisplay: UnitDisplayTypes = "long"
  ): string {
    let u = unit;
    if (per) {
      u = `${unit}-per-${per}` as Unit;
    }
    return this.getNumberFormat({
      style: "unit",
      unit: u,
      unitDisplay,
    }).format(number);
  }

  /**
   * @param percent float number between 0 until 1
   * @param unitDisplay
   * @returns {String}
   */
  public percentHumanReadable(
    percent: number,
    unitDisplay: UnitDisplayTypes = "short"
  ): string {
    const p = Number.parseFloat((percent * 100).toFixed(2));
    return new Intl.NumberFormat(this.locale.baseName, {
      style: "unit",
      unit: "percent",
      unitDisplay,
    }).format(minMaxNumber(p, 0, 100));
  }

  /**
   * @param bytes none zero byte size
   * @param unitDisplay
   * @returns {String}
   */
  public fileSizeHumanReadable(
    bytes: number,
    unitDisplay: UnitDisplayTypes = "short"
  ): string {
    const n = Math.abs(Math.round(bytes));

    let byteX = n.toString();
    let unit = "byte";

    for (const [unitName, unitNumber] of Object.entries(FILE_SIZE_UNITS)) {
      if (bytes >= unitNumber) {
        unit = unitName;
        byteX = (bytes / unitNumber).toFixed(1);
        break;
      }
    }

    return new Intl.NumberFormat(this.locale.baseName, {
      style: "unit",
      unit,
      unitDisplay,
    }).format(Number.parseFloat(byteX));
  }

  public durationDates(
    date1: Date,
    date2: Date,
    unitDisplay: UnitDisplayTypes = "long"
  ): string {
    const diffSeconds = Math.abs(
      Math.round(date1.getTime() - date2.getTime()) / 1000
    );

    for (const [u, value] of Object.entries(RELATIVE_TIMES_REFERENCE)) {
      if (diffSeconds >= value) {
        const number = Math.round(diffSeconds / value);
        return new Intl.NumberFormat(this.locale.baseName, {
          style: "unit",
          unit: u,
          unitDisplay,
        }).format(number);
      }
    }

    return new Intl.NumberFormat(this.locale.baseName, {
      style: "unit",
      unit: "second",
      unitDisplay,
    }).format(diffSeconds);
  }

  /**
   * @param compareDate
   * @param unit {Intl.RelativeTimeFormatUnit} unit name
   * @param referenceDate Reference Date default is now
   * @param style
   * @param numeric
   * @returns
   */
  public relativeTimeFormatterByUnit(
    compareDate: Date,
    unit: Intl.RelativeTimeFormatUnit,
    referenceDate: Date = new Date(),
    style: Intl.RelativeTimeFormatStyle = "long",
    numeric: Intl.RelativeTimeFormatNumeric = "auto"
  ): string {
    const formatter = new Intl.RelativeTimeFormat(this.locale.baseName, {
      style,
      numeric,
    });

    let validUnit: Intl.RelativeTimeFormatUnit = "years";

    if (RELATIVE_TIMES_REFERENCE[unit]) {
      validUnit = unit;
    }

    const pDurationSeconds =
      (compareDate.getTime() - referenceDate.getTime()) / 1000;

    const value = (RELATIVE_TIMES_REFERENCE[validUnit] ?? 1) / pDurationSeconds;

    if (Number.isFinite(value)) {
      return formatter.format(value, validUnit);
    }

    return "";
  }

  /**
   * @param compareDate
   * @param referenceDate Reference Date default is now
   * @param style
   * @param numeric
   * @returns
   */
  public approximateRelativeTimeFormatter(
    compareDate: Date,
    referenceDate: Date = new Date(),
    style: Intl.RelativeTimeFormatStyle = "long",
    numeric: Intl.RelativeTimeFormatNumeric = "auto"
  ): string {
    const formatter = new Intl.RelativeTimeFormat(this.locale.baseName, {
      style,
      numeric,
    });

    let duration = (compareDate.getTime() - referenceDate.getTime()) / 1000;

    for (let i = 0; i < RELATIVE_TIME_DIVISION.length; i++) {
      const division = RELATIVE_TIME_DIVISION[i];
      if (Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.unit);
      }
      duration /= division.amount;
    }

    return "";
  }
}
