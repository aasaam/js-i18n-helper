declare namespace Intl {
  type supportedValuesOfTypes =
    | "calendar"
    | "collation"
    | "currency"
    | "numberingSystem"
    | "timeZone"
    | "unit";

  function supportedValuesOf(input: supportedValuesOfTypes): string[];

  function getCanonicalLocales(locales: string | string[]): string[];
}
