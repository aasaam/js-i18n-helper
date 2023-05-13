import * as i18n from "../dist/index.mjs";

const units = (locale, number) => {
  const result = [];
  for (const i of i18n.formatter.UNIT_LIST) {
    for (const j of i18n.formatter.UNIT_DISPLAY_TYPES) {
      result.push({
        unit: i,
        mode: j,
        value: locale.getFormatter().unitFormat(number, i, undefined, j),
      });
    }
  }
  return result;
};

new Vue({
  el: "#app",
  data() {
    const l = new i18n.locale.Locale("en");
    const dt = new i18n.dateTime.DateTimeCalendar(l);

    return {
      tab: 0,
      date: new Date(),
      dateTimeCalendar: dt,
      i18n,
      locale: l,
      calendar: l.getDefaultCalendar().id,
      lang: l.getLanguage().id,
      country: l.getCountry().i,
      languageList: l.getLanguageList(),
      countryList: l.getCountryList(),
      calendarList: l.getCalendars(),
      unitNumber: 100,
      units: units(l, 100),
      year: dt.yearList().find((i) => i.selected).number,
      month: dt.monthList().find((i) => i.selected).date,
      day: dt.daysOfMonthList().find((i) => i.selected).date,
      weeks: dt.daysOfMonthWeekList(),
    };
  },
  methods: {
    updateCalendar({ date, year } = { date: undefined, year: undefined }) {
      if (date) {
        this.date = date;
      }

      this.dateTimeCalendar = new i18n.dateTime.DateTimeCalendar(
        this.locale,
        this.date
      );

      if (year) {
        this.dateTimeCalendar.yearSet(year);
        this.date = this.dateTimeCalendar.getDate();
      }

      this.year = this.dateTimeCalendar
        .yearList()
        .find((i) => i.selected).number;

      this.month = this.dateTimeCalendar
        .monthList()
        .find((i) => i.selected).date;

      this.day = this.dateTimeCalendar
        .daysOfMonthList()
        .find((i) => i.selected).date;

      this.weeks = this.dateTimeCalendar.daysOfMonthWeekList();
    },
    updateLocale(
      { lang, country, calendar } = { lang: "", country: "", calendar: "" }
    ) {
      if (lang) {
        this.locale = new i18n.locale.Locale(lang);
      }
      if (country) {
        this.locale.setCountry(country);
      }
      if (calendar) {
        this.locale.setCalendar(calendar);
      }

      this.lang = this.locale.getLanguage().id;
      this.country = this.locale.getCountry().i;
      this.calendar = this.locale.getDefaultCalendar().id;
      this.calendarList = this.locale.getCalendars();
      this.languageList = this.locale.getLanguageList();
      this.countryList = this.locale.getCountryList();
      this.units = units(this.locale, this.unitNumber);

      this.updateCalendar();
    },
    updateUnits() {
      this.units = units(this.locale, this.unitNumber);
    },
  },
});
