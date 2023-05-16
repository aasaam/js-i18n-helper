/**
 * List of valid CLDR/Unicode calendars supported by modern browser like Chromium or Firefox
 */
declare const LIST$2: readonly ["buddhist", "ethioaa", "ethiopic", "gregory", "hebrew", "indian", "islamic", "islamic-civil", "islamic-rgsa", "islamic-tbla", "islamic-umalqura", "persian", "roc"];
type Calendar = (typeof LIST$2)[number];
type JavaScriptWeekNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type Week = [
    JavaScriptWeekNumber,
    JavaScriptWeekNumber,
    JavaScriptWeekNumber,
    JavaScriptWeekNumber,
    JavaScriptWeekNumber,
    JavaScriptWeekNumber,
    JavaScriptWeekNumber
];
declare function getCalendarName(c: Calendar, locale: Intl.Locale): string;

type calendar_Calendar = Calendar;
type calendar_JavaScriptWeekNumber = JavaScriptWeekNumber;
type calendar_Week = Week;
declare const calendar_getCalendarName: typeof getCalendarName;
declare namespace calendar {
  export {
    calendar_Calendar as Calendar,
    calendar_JavaScriptWeekNumber as JavaScriptWeekNumber,
    LIST$2 as LIST,
    calendar_Week as Week,
    calendar_getCalendarName as getCalendarName,
  };
}

/**
 * Text direction
 */
declare const TEXT_DIRECTIONS: readonly ["rtl", "ltr"];
type TextDirections = (typeof TEXT_DIRECTIONS)[number];
/**
 * Default for fallback
 */
declare const DEFAULT_TEXT_DIRECTION: TextDirections;
declare const DEFAULT_LANGUAGE: "en";
/**
 * List of language ISO code that support in JavaScript ecosystem
 */
declare const LIST$1: string[];
/**
 * List of popular languages ISO code
 * Must supported with full information in browsers
 */
declare const LIST_POPULAR: string[];
/**
 * List of right to left languages ISO code
 */
declare const LIST_RTL: string[];

declare const language_DEFAULT_LANGUAGE: typeof DEFAULT_LANGUAGE;
declare const language_DEFAULT_TEXT_DIRECTION: typeof DEFAULT_TEXT_DIRECTION;
declare const language_LIST_POPULAR: typeof LIST_POPULAR;
declare const language_LIST_RTL: typeof LIST_RTL;
declare const language_TEXT_DIRECTIONS: typeof TEXT_DIRECTIONS;
type language_TextDirections = TextDirections;
declare namespace language {
  export {
    language_DEFAULT_LANGUAGE as DEFAULT_LANGUAGE,
    language_DEFAULT_TEXT_DIRECTION as DEFAULT_TEXT_DIRECTION,
    LIST$1 as LIST,
    language_LIST_POPULAR as LIST_POPULAR,
    language_LIST_RTL as LIST_RTL,
    language_TEXT_DIRECTIONS as TEXT_DIRECTIONS,
    language_TextDirections as TextDirections,
  };
}

interface Properties {
    /**
     * ISO 3166 country code
     *
     * @link https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
     */
    i: string;
    /**
     * Emoji flag
     */
    f: string;
    /**
     * Currencies
     */
    u: string[];
    /**
     * Telephone prefix numbers
     */
    p: string[];
    /**
     * Supported calendars
     *
     * @default ["gregory"]
     */
    c?: Calendar[];
    /**
     * JavaScriptDate week days
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay#return_value
     * @default [1, 2, 3, 4, 5, 6, 0]
     */
    d?: Week;
    /**
     * JavaScriptDate week ends
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay#return_value
     * @default [6, 0]
     */
    e?: JavaScriptWeekNumber[];
}
type Countries = {
    [key: string]: Properties;
};
declare const LIST: Countries;
declare const DEFAULT_PROPS: Properties;
declare function getProperties(countryCode: string): Properties | undefined;

type country_Countries = Countries;
declare const country_DEFAULT_PROPS: typeof DEFAULT_PROPS;
declare const country_LIST: typeof LIST;
type country_Properties = Properties;
declare const country_getProperties: typeof getProperties;
declare namespace country {
  export {
    country_Countries as Countries,
    country_DEFAULT_PROPS as DEFAULT_PROPS,
    country_LIST as LIST,
    country_Properties as Properties,
    country_getProperties as getProperties,
  };
}

declare const UNIT_LIST: readonly ["acre", "bit", "byte", "celsius", "centimeter", "day", "degree", "fahrenheit", "fluid-ounce", "foot", "gallon", "gigabit", "gigabyte", "gram", "hectare", "hour", "inch", "kilobit", "kilobyte", "kilogram", "kilometer", "liter", "megabit", "megabyte", "meter", "mile", "mile-scandinavian", "milliliter", "millimeter", "millisecond", "minute", "month", "ounce", "percent", "petabyte", "pound", "second", "stone", "terabit", "terabyte", "week", "yard", "year"];
type Unit = (typeof UNIT_LIST)[number];
declare const UNIT_DISPLAY_TYPES: readonly ["narrow", "short", "long"];
type UnitDisplayTypes = (typeof UNIT_DISPLAY_TYPES)[number];
declare const FILE_SIZE_UNITS: {
    terabyte: number;
    gigabyte: number;
    megabyte: number;
    kilobyte: number;
};
declare const RELATIVE_TIME_DIVISION: {
    amount: number;
    unit: Intl.RelativeTimeFormatUnit;
}[];
type RelativeTimesTypeReference = {
    [key in Intl.RelativeTimeFormatUnit]?: number;
};
declare const RELATIVE_TIMES_REFERENCE: RelativeTimesTypeReference;
declare class Formatter {
    private locale;
    constructor(locale: Intl.Locale);
    getNumberFormat(options?: Intl.NumberFormatOptions): Intl.NumberFormat;
    getPluralRules(options?: Intl.PluralRulesOptions): Intl.PluralRules;
    unitFormat(number: number, unit: Unit, per?: Unit, unitDisplay?: UnitDisplayTypes): string;
    /**
     * @param percent float number between 0 until 1
     * @param unitDisplay
     * @returns {String}
     */
    percentHumanReadable(percent: number, unitDisplay?: UnitDisplayTypes): string;
    /**
     * @param bytes none zero byte size
     * @param unitDisplay
     * @returns {String}
     */
    fileSizeHumanReadable(bytes: number, unitDisplay?: UnitDisplayTypes): string;
    durationDates(date1: Date, date2: Date, unitDisplay?: UnitDisplayTypes): string;
    /**
     * @param compareDate
     * @param unit {Intl.RelativeTimeFormatUnit} unit name
     * @param referenceDate Reference Date default is now
     * @param style
     * @param numeric
     * @returns
     */
    relativeTimeFormatterByUnit(compareDate: Date, unit: Intl.RelativeTimeFormatUnit, referenceDate?: Date, style?: Intl.RelativeTimeFormatStyle, numeric?: Intl.RelativeTimeFormatNumeric): string;
    /**
     * @param compareDate
     * @param referenceDate Reference Date default is now
     * @param style
     * @param numeric
     * @returns
     */
    approximateRelativeTimeFormatter(compareDate: Date, referenceDate?: Date, style?: Intl.RelativeTimeFormatStyle, numeric?: Intl.RelativeTimeFormatNumeric): string;
}

declare const formatter_FILE_SIZE_UNITS: typeof FILE_SIZE_UNITS;
type formatter_Formatter = Formatter;
declare const formatter_Formatter: typeof Formatter;
declare const formatter_RELATIVE_TIMES_REFERENCE: typeof RELATIVE_TIMES_REFERENCE;
declare const formatter_RELATIVE_TIME_DIVISION: typeof RELATIVE_TIME_DIVISION;
type formatter_RelativeTimesTypeReference = RelativeTimesTypeReference;
declare const formatter_UNIT_DISPLAY_TYPES: typeof UNIT_DISPLAY_TYPES;
declare const formatter_UNIT_LIST: typeof UNIT_LIST;
type formatter_Unit = Unit;
type formatter_UnitDisplayTypes = UnitDisplayTypes;
declare namespace formatter {
  export {
    formatter_FILE_SIZE_UNITS as FILE_SIZE_UNITS,
    formatter_Formatter as Formatter,
    formatter_RELATIVE_TIMES_REFERENCE as RELATIVE_TIMES_REFERENCE,
    formatter_RELATIVE_TIME_DIVISION as RELATIVE_TIME_DIVISION,
    formatter_RelativeTimesTypeReference as RelativeTimesTypeReference,
    formatter_UNIT_DISPLAY_TYPES as UNIT_DISPLAY_TYPES,
    formatter_UNIT_LIST as UNIT_LIST,
    formatter_Unit as Unit,
    formatter_UnitDisplayTypes as UnitDisplayTypes,
  };
}

interface CalendarItem {
    id: Calendar;
    name: string;
    selected: boolean;
    preferred: boolean;
}
interface LanguageItem {
    id: string;
    name: string;
    nativeName: string;
    rtl: boolean;
    direction: TextDirections;
}
interface CountryItem extends Properties {
    name: string;
    nameEnglish: string;
}
declare const LANGUAGE_LIST_FILTER: readonly ["popular", "all"];
type LanguageListFilter = (typeof LANGUAGE_LIST_FILTER)[number];
declare const LANGUAGE_LIST_ORDER: readonly ["iso", "native"];
type LanguageListOrder = (typeof LANGUAGE_LIST_ORDER)[number];
declare const COUNTRY_LIST_ORDER: readonly ["iso", "native"];
type CountryListOrder = (typeof COUNTRY_LIST_ORDER)[number];
declare class Locale {
    private locale;
    private language;
    private isRTL;
    private country;
    private calendars;
    private formatter;
    constructor(localeString: string);
    isRTLLanguage(): boolean;
    getTextDirection(): TextDirections;
    setCountry(countryCode: string): Locale;
    getLocale(): Intl.Locale;
    toString(): string;
    getLanguageList(filter?: LanguageListFilter | string[], order?: LanguageListOrder): LanguageItem[];
    getCountryList(order?: CountryListOrder): CountryItem[];
    setCalendar(c: Calendar): Locale;
    getDefaultCalendar(): CalendarItem;
    getCalendars(): CalendarItem[];
    getLanguage(): LanguageItem;
    getCountry(): Properties;
    getFormatter(): Formatter;
    private setup;
}

declare const locale_COUNTRY_LIST_ORDER: typeof COUNTRY_LIST_ORDER;
type locale_CalendarItem = CalendarItem;
type locale_CountryItem = CountryItem;
type locale_CountryListOrder = CountryListOrder;
declare const locale_LANGUAGE_LIST_FILTER: typeof LANGUAGE_LIST_FILTER;
declare const locale_LANGUAGE_LIST_ORDER: typeof LANGUAGE_LIST_ORDER;
type locale_LanguageItem = LanguageItem;
type locale_LanguageListFilter = LanguageListFilter;
type locale_LanguageListOrder = LanguageListOrder;
type locale_Locale = Locale;
declare const locale_Locale: typeof Locale;
declare namespace locale {
  export {
    locale_COUNTRY_LIST_ORDER as COUNTRY_LIST_ORDER,
    locale_CalendarItem as CalendarItem,
    locale_CountryItem as CountryItem,
    locale_CountryListOrder as CountryListOrder,
    locale_LANGUAGE_LIST_FILTER as LANGUAGE_LIST_FILTER,
    locale_LANGUAGE_LIST_ORDER as LANGUAGE_LIST_ORDER,
    locale_LanguageItem as LanguageItem,
    locale_LanguageListFilter as LanguageListFilter,
    locale_LanguageListOrder as LanguageListOrder,
    locale_Locale as Locale,
  };
}

declare const MAX_SUPPORTED_YEAR_LIST = 500;
declare const MAX_DAYS_IN_YEAR = 500;
declare const MAX_DAYS_IN_MONTH = 40;
declare const MONGODB_OBJECT_ID_FILL_TYPE: readonly ["0", "f"];
type MongoDBObjectIdFillType = (typeof MONGODB_OBJECT_ID_FILL_TYPE)[number];
declare const MIN_MONGODB_OBJECT_ID_DATE: Date;
declare const MAX_MONGODB_OBJECT_ID_DATE: Date;
declare const DATE_TIME_SET_MODE: readonly ["start", "middle", "end"];
type DateTimeSetMode = (typeof DATE_TIME_SET_MODE)[number];
declare const NUMERIC_TOKENIZE: readonly ["yyyy", "M", "d"];
type NumericTokenize = (typeof NUMERIC_TOKENIZE)[number];
interface YearOption {
    number: number;
    selected: boolean;
    name: string;
}
interface MonthOption {
    date: Date;
    selected: boolean;
    name: string;
    nameNumber: string;
    number: number;
}
interface DayOption {
    date: Date;
    utcDate: Date;
    selected: boolean;
    name: string;
    number: number;
    weekDay: number;
    weekEnd: boolean;
}
interface DayWeekOption extends DayOption {
    weekNumber: number;
}
interface WeekHeader {
    short: string;
    long: string;
    narrow: string;
    weekEnd: boolean;
}
interface DayAlternateCalendar {
    calendar: Calendar;
    calendarName: string;
    preferred: boolean;
    year: string;
    month: string;
    monthName: string;
    day: string;
    dateString: string;
}
interface DaysOnMonthPerWeek {
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
declare function dateToMongoDBObjectID(date: Date, mode?: MongoDBObjectIdFillType): string;
declare function mongoDBObjectIDToDate(objectId: string): Date;
declare function dateToUnixTime(date: Date): number;
declare function unixTimeToDate(unixTime: number): Date;
declare function dateSetTime(date: Date, mode?: DateTimeSetMode, utc?: boolean): Date;
declare class DateTimeCalendar {
    private locale;
    private date;
    constructor(locale: Locale, date?: Date);
    getDate(): Date;
    toString(): string;
    setDate(date: Date): DateTimeCalendar;
    toLocaleDateString(options?: Intl.DateTimeFormatOptions): string;
    toLocaleTimeString(options?: Intl.DateTimeFormatOptions): string;
    toLocaleString(options?: Intl.DateTimeFormatOptions): string;
    getAlternateCalendars(options?: Intl.DateTimeFormatOptions): DayAlternateCalendar[];
    format(format: string, date?: Date, outputCalendar?: Calendar): string;
    tokenize(token: NumericTokenize[], date?: Date): number[];
    dateSetTime(mode?: DateTimeSetMode, utc?: boolean): DateTimeCalendar;
    dateGetMongoDBObjectId(mode?: MongoDBObjectIdFillType): string;
    yearList(before?: number, after?: number): YearOption[];
    yearSet(wantedYear: number): DateTimeCalendar;
    yearShift(next: boolean): DateTimeCalendar;
    monthList(): MonthOption[];
    monthShift(next: boolean): DateTimeCalendar;
    dayShift(next?: boolean): DateTimeCalendar;
    /**
     * @param alternateCalendars array of calendars name or number of addition calendars based on locale
     */
    daysOfMonthList(): DayOption[];
    /**
     * @param alternateCalendars array of calendars name or number of addition calendars based on locale
     */
    daysOfMonthWeekList(): DaysOnMonthPerWeek;
}

declare const dateTime_DATE_TIME_SET_MODE: typeof DATE_TIME_SET_MODE;
type dateTime_DateTimeCalendar = DateTimeCalendar;
declare const dateTime_DateTimeCalendar: typeof DateTimeCalendar;
type dateTime_DayAlternateCalendar = DayAlternateCalendar;
type dateTime_DayOption = DayOption;
type dateTime_DayWeekOption = DayWeekOption;
type dateTime_DaysOnMonthPerWeek = DaysOnMonthPerWeek;
declare const dateTime_MAX_DAYS_IN_MONTH: typeof MAX_DAYS_IN_MONTH;
declare const dateTime_MAX_DAYS_IN_YEAR: typeof MAX_DAYS_IN_YEAR;
declare const dateTime_MAX_MONGODB_OBJECT_ID_DATE: typeof MAX_MONGODB_OBJECT_ID_DATE;
declare const dateTime_MAX_SUPPORTED_YEAR_LIST: typeof MAX_SUPPORTED_YEAR_LIST;
declare const dateTime_MIN_MONGODB_OBJECT_ID_DATE: typeof MIN_MONGODB_OBJECT_ID_DATE;
declare const dateTime_MONGODB_OBJECT_ID_FILL_TYPE: typeof MONGODB_OBJECT_ID_FILL_TYPE;
type dateTime_MonthOption = MonthOption;
declare const dateTime_NUMERIC_TOKENIZE: typeof NUMERIC_TOKENIZE;
type dateTime_NumericTokenize = NumericTokenize;
type dateTime_WeekHeader = WeekHeader;
type dateTime_YearOption = YearOption;
declare const dateTime_dateSetTime: typeof dateSetTime;
declare const dateTime_dateToMongoDBObjectID: typeof dateToMongoDBObjectID;
declare const dateTime_dateToUnixTime: typeof dateToUnixTime;
declare const dateTime_mongoDBObjectIDToDate: typeof mongoDBObjectIDToDate;
declare const dateTime_unixTimeToDate: typeof unixTimeToDate;
declare namespace dateTime {
  export {
    dateTime_DATE_TIME_SET_MODE as DATE_TIME_SET_MODE,
    dateTime_DateTimeCalendar as DateTimeCalendar,
    dateTime_DayAlternateCalendar as DayAlternateCalendar,
    dateTime_DayOption as DayOption,
    dateTime_DayWeekOption as DayWeekOption,
    dateTime_DaysOnMonthPerWeek as DaysOnMonthPerWeek,
    dateTime_MAX_DAYS_IN_MONTH as MAX_DAYS_IN_MONTH,
    dateTime_MAX_DAYS_IN_YEAR as MAX_DAYS_IN_YEAR,
    dateTime_MAX_MONGODB_OBJECT_ID_DATE as MAX_MONGODB_OBJECT_ID_DATE,
    dateTime_MAX_SUPPORTED_YEAR_LIST as MAX_SUPPORTED_YEAR_LIST,
    dateTime_MIN_MONGODB_OBJECT_ID_DATE as MIN_MONGODB_OBJECT_ID_DATE,
    dateTime_MONGODB_OBJECT_ID_FILL_TYPE as MONGODB_OBJECT_ID_FILL_TYPE,
    dateTime_MonthOption as MonthOption,
    dateTime_NUMERIC_TOKENIZE as NUMERIC_TOKENIZE,
    dateTime_NumericTokenize as NumericTokenize,
    dateTime_WeekHeader as WeekHeader,
    dateTime_YearOption as YearOption,
    dateTime_dateSetTime as dateSetTime,
    dateTime_dateToMongoDBObjectID as dateToMongoDBObjectID,
    dateTime_dateToUnixTime as dateToUnixTime,
    dateTime_mongoDBObjectIDToDate as mongoDBObjectIDToDate,
    dateTime_unixTimeToDate as unixTimeToDate,
  };
}

declare function getIdentifier(): string;

declare const timezone_getIdentifier: typeof getIdentifier;
declare namespace timezone {
  export {
    timezone_getIdentifier as getIdentifier,
  };
}

/**
 * Check browser/environment for supporting require functionalities
 *
 * @returns {boolean}
 */
declare function isSupported(): boolean;

export { calendar, country, dateTime, formatter, isSupported, language, locale, timezone };
