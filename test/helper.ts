export function table(rows: any[]) {
  if (process.env.DEBUG) {
    console.table(rows, Object.keys(rows[0]));
  }
}
export function log(d: any) {
  if (process.env.DEBUG_JSON) {
    console.log(JSON.stringify(d));
  } else if (process.env.DEBUG) {
    console.log(d);
  }
}

export function isLanguageFullySupported(langString: string): boolean {
  const locale = new Intl.Locale(new Intl.Locale(langString).maximize());

  const displayNameNative = new Intl.DisplayNames(langString, {
    type: "language",
  });

  const displayNameEnglish = new Intl.DisplayNames("en", {
    type: "language",
  });

  const number = 100_000;
  const numberFormat = new Intl.NumberFormat(langString, {
    useGrouping: true,
  }).format(number);

  const name = displayNameNative.of(langString) || langString;
  const nameEnglish = displayNameEnglish.of(langString) || langString;

  return (
    number.toString() !== numberFormat &&
    langString !== name &&
    langString !== nameEnglish &&
    !/^[a-z]+$/.test(nameEnglish) &&
    locale.region !== ""
  );
}

export function isCalendarSupported(calendar: string): boolean {
  const locale = new Intl.Locale(
    new Intl.Locale(`en-US`, { calendar }).maximize()
  );

  return new Intl.DateTimeFormat(locale.baseName).format(new Date()) !== "";
}

export function isCountrySupported(countryCode: string): boolean {
  const displayNameNative = new Intl.DisplayNames("en", {
    type: "region",
  });

  const name = displayNameNative.of(countryCode) || countryCode;

  return countryCode !== name;
}
