import { expect, it, describe } from "vitest";

import { locale, language, country, calendar } from "../src";

describe("Locale", () => {
  it("fallback", () => {
    const l = new locale.Locale("&");
    const defaultCalendar: calendar.Calendar =
      country.DEFAULT_PROPS.c && country.DEFAULT_PROPS.c[0]
        ? country.DEFAULT_PROPS.c[0]
        : "gregory";

    expect(l.isRTLLanguage()).toBe(false);
    expect(l.toString()).toBeTruthy();
    expect(l.getTextDirection()).toBeTruthy();
    expect(l.setCountry("*")).toBeTruthy();
    expect(l.getCalendars().length).toBe(calendar.LIST.length);
    expect(l.getLanguage().id).toBe(language.DEFAULT_LANGUAGE);
    expect(l.getCountry().i).toBe(country.DEFAULT_PROPS.i);
    expect(l.getDefaultCalendar().id).toBe(defaultCalendar);
    expect(l.setCalendar(defaultCalendar)).toBeTruthy();
    expect(l.setCalendar(defaultCalendar)).toBeTruthy();
  });

  it("fa", () => {
    const l = new locale.Locale("fa");

    expect(l.isRTLLanguage()).toBe(true);
    expect(l.getTextDirection()).toBeTruthy();
    expect(l.setCountry("IR")).toBeTruthy();
    expect(l.getFormatter().getPluralRules()).toBeTruthy();
    expect(l.getLanguage().id).toBe("fa");
    expect(l.getCountry().i).toBe("IR");
    expect(l.getCountry().d).toMatchObject([6, 0, 1, 2, 3, 4, 5]);
    expect(l.getCountry().e).toMatchObject([5]);

    // list country
    expect(l.getCountryList().length).toBe(Object.values(country.LIST).length);
    expect(l.getCountryList("iso").length).toBe(
      Object.values(country.LIST).length
    );
    expect(l.getCountryList("native").length).toBe(
      Object.values(country.LIST).length
    );

    // list language
    expect(l.getLanguageList().length).toBe(language.LIST_POPULAR.length);
    expect(l.getLanguageList("popular").length).toBe(
      language.LIST_POPULAR.length
    );
    expect(l.getLanguageList("all").length).toBe(language.LIST.length);
    expect(l.getLanguageList(["en", "NotValid"]).length).toBe(1);
    expect(l.getLanguageList("popular", "iso").length).toBe(
      language.LIST_POPULAR.length
    );
    expect(l.getLanguageList("popular", "native").length).toBe(
      language.LIST_POPULAR.length
    );
  });
});
