import * as language from "./data/language";
import * as country from "./data/country";
import * as calendar from "./data/calendar";

import { Formatter } from "./formatter";

export interface CalendarItem {
  id: calendar.Calendar;
  name: string;
  selected: boolean;
  preferred: boolean;
}

export interface LanguageItem {
  id: string;
  name: string;
  nativeName: string;
  rtl: boolean;
  direction: language.TextDirections;
}

export interface CountryItem extends country.Properties {
  name: string;
  nameEnglish: string;
}

export const LANGUAGE_LIST_FILTER = ["popular", "all"] as const;
export type LanguageListFilter = (typeof LANGUAGE_LIST_FILTER)[number];
Object.freeze(LANGUAGE_LIST_FILTER);

export const LANGUAGE_LIST_ORDER = [
  "iso", // default
  "native",
] as const;
export type LanguageListOrder = (typeof LANGUAGE_LIST_ORDER)[number];
Object.freeze(LANGUAGE_LIST_ORDER);

export const COUNTRY_LIST_ORDER = [
  "iso", // default
  "native",
] as const;
export type CountryListOrder = (typeof COUNTRY_LIST_ORDER)[number];
Object.freeze(COUNTRY_LIST_ORDER);

export class Locale {
  private locale: Intl.Locale;

  private language: string = language.DEFAULT_LANGUAGE;

  private isRTL = false;

  private country: country.Properties = country.DEFAULT_PROPS;

  private calendars: CalendarItem[] = [];

  private formatter: Formatter = new Formatter(
    new Intl.Locale(language.DEFAULT_LANGUAGE).maximize()
  );

  constructor(localeString: string) {
    // fallback for compatibility
    this.locale = new Intl.Locale(
      new Intl.Locale(
        `${language.DEFAULT_LANGUAGE}-${country.DEFAULT_PROPS.i}`
      ).maximize()
    );

    try {
      // try to maximize
      this.locale = new Intl.Locale(new Intl.Locale(localeString).maximize());
    } catch {}

    this.setup();
  }

  public isRTLLanguage(): boolean {
    return this.isRTL;
  }

  public getTextDirection(): language.TextDirections {
    return this.isRTL ? "rtl" : "ltr";
  }

  public setCountry(countryCode: string): Locale {
    let locale = new Intl.Locale(
      new Intl.Locale(`${this.language}-${country.DEFAULT_PROPS.i}`).maximize()
    );

    try {
      // try to maximize
      locale = new Intl.Locale(
        new Intl.Locale(`${this.language}-${countryCode}`).maximize()
      );
    } catch {}

    this.locale = locale;

    this.setup();
    return this;
  }

  public getLocale(): Intl.Locale {
    return this.locale;
  }

  public toString(): string {
    return this.locale.baseName;
  }

  public getLanguageList(
    filter: LanguageListFilter | string[] = "popular",
    order: LanguageListOrder = "iso"
  ): LanguageItem[] {
    let languageArray: string[] = [];

    if (typeof filter === "string") {
      if (filter === "all") {
        languageArray = language.LIST;
      } else if (filter === "popular") {
        languageArray = language.LIST_POPULAR;
      }
    } else if (Array.isArray(filter)) {
      languageArray = filter;
    }

    let result: LanguageItem[] = [];

    for (const languageCode of languageArray) {
      if (!language.LIST.includes(languageCode)) {
        continue;
      }

      const name =
        new Intl.DisplayNames(this.locale, {
          type: "language",
        }).of(languageCode) || languageCode;

      const nativeName =
        new Intl.DisplayNames(languageCode, {
          type: "language",
        }).of(languageCode) || languageCode;

      const item: LanguageItem = {
        id: languageCode,
        name,
        nativeName,
        rtl: language.LIST_RTL.includes(languageCode),
        direction: language.LIST_RTL.includes(languageCode) ? "rtl" : "ltr",
      };

      result.push(item);
    }

    if (order === "native") {
      const collector = new Intl.Collator(this.language);
      result = result.sort((x, y) => {
        return collector.compare(x.nativeName, y.nativeName);
      });
    }

    return result;
  }

  public getCountryList(order: CountryListOrder = "iso"): CountryItem[] {
    let result: CountryItem[] = [];

    for (const [countryCode, props] of Object.entries(country.LIST)) {
      const item: CountryItem = Object.assign(props, {
        name:
          new Intl.DisplayNames(this.locale, {
            type: "region",
          }).of(countryCode) || countryCode,
        nameEnglish:
          new Intl.DisplayNames("en", {
            type: "region",
          }).of(countryCode) || countryCode,
      });

      result.push(item);
    }

    switch (order) {
      case "native": {
        const collector = new Intl.Collator(this.language);
        result = result.sort((x, y) => {
          return collector.compare(x.name, y.name);
        });

        break;
      }
      // No default
    }

    return result;
  }

  public setCalendar(c: calendar.Calendar): Locale {
    if (calendar.LIST.includes(c)) {
      this.calendars = this.calendars.map((i) => {
        i.selected = i.id === c;
        return i;
      });
    }
    return this;
  }

  public getDefaultCalendar(): CalendarItem {
    let calendar: CalendarItem = this.calendars[0];
    const selected = this.calendars.find((i) => i.selected);
    if (selected) {
      calendar = selected;
    }
    return calendar;
  }

  public getCalendars(): CalendarItem[] {
    return this.calendars;
  }

  public getLanguage(): LanguageItem {
    const name =
      new Intl.DisplayNames(this.locale, {
        type: "language",
      }).of(this.language) || this.language;

    const nativeName =
      new Intl.DisplayNames(this.language, {
        type: "language",
      }).of(this.language) || this.language;

    const item: LanguageItem = {
      id: this.language,
      direction: this.isRTL ? "rtl" : "ltr",
      rtl: this.isRTL,
      name,
      nativeName,
    };

    return item;
  }

  public getCountry(): country.Properties {
    return this.country;
  }

  public getFormatter(): Formatter {
    return this.formatter;
  }

  private setup(): void {
    this.language =
      this.locale.language && language.LIST.includes(this.locale.language)
        ? this.locale.language
        : language.DEFAULT_LANGUAGE;

    if (language.LIST_RTL.includes(this.language)) {
      this.isRTL = true;
    }

    const countryCode =
      this.locale.region && country.LIST[this.locale.region]
        ? this.locale.region
        : country.DEFAULT_PROPS.i;

    this.formatter = new Formatter(this.locale);

    this.country = Object.assign(
      {},
      country.DEFAULT_PROPS,
      country.LIST[countryCode]
    ) as country.Properties;

    const preferredCalendarList = this.country.c as calendar.Calendar[];

    const used: { [key: string]: boolean } = {};

    this.calendars = [];

    let i = 0;

    for (const c of preferredCalendarList) {
      const cal: CalendarItem = {
        id: c,
        preferred: true,
        selected: i === 0,
        name:
          new Intl.DisplayNames(this.locale, {
            type: "calendar",
          }).of(c) || c,
      };
      this.calendars.push(cal);
      used[c] = true;
      i += 1;
    }

    for (const c of calendar.LIST) {
      if (used[c]) {
        continue;
      }

      const cal: CalendarItem = {
        id: c,
        preferred: false,
        selected: false,
        name:
          new Intl.DisplayNames(this.locale, {
            type: "calendar",
          }).of(c) || c,
      };
      this.calendars.push(cal);
    }
  }
}
