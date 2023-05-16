/**
 * Check browser/environment for supporting require functionalities
 *
 * @returns {boolean}
 */
export function isSupported(): boolean {
  return (
    typeof Intl !== "undefined" &&
    typeof Intl.Collator !== "undefined" &&
    typeof Intl.DateTimeFormat !== "undefined" &&
    typeof Intl.DateTimeFormat.prototype.formatToParts !== "undefined" &&
    typeof Intl.DateTimeFormat.prototype.resolvedOptions !== "undefined" &&
    typeof Intl.NumberFormat !== "undefined" &&
    typeof Intl.PluralRules !== "undefined" &&
    typeof Intl.DisplayNames !== "undefined" &&
    typeof Intl.ListFormat !== "undefined" &&
    typeof Intl.Locale !== "undefined" &&
    typeof Intl.supportedValuesOf !== "undefined" &&
    typeof Intl.getCanonicalLocales !== "undefined" &&
    typeof Intl.RelativeTimeFormat !== "undefined" &&
    new Intl.Locale("fa").maximize().region === "IR" &&
    new Intl.DisplayNames("en-US", { type: "region" }).of("IR") === "Iran" &&
    new Intl.DisplayNames("fa-IR", { type: "calendar" }).of("persian") ===
      "تقویم هجری شمسی" &&
    new Intl.DisplayNames("de-DE", { type: "script" }).of("Arab") ===
      "Arabisch" &&
    new Intl.DisplayNames("fr-FR", { type: "language" }).of("de") ===
      "allemand" &&
    new Intl.DisplayNames("ar-UE", { type: "currency" }).of("EUR") === "يورو" &&
    Intl.getCanonicalLocales("EN-US").includes("en-US") &&
    Intl.supportedValuesOf("calendar").includes("persian")
  );
}
