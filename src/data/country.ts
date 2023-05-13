import type { Calendar, JavaScriptWeekNumber, Week } from "./calendar";

export interface Properties {
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

export type Countries = { [key: string]: Properties };

// total numbers: 251
export const LIST: Countries = {
  AD: { i: "AD", f: "🇦🇩", u: ["EUR"], p: ["376"] },
  AE: {
    i: "AE",
    f: "🇦🇪",
    u: ["AED"],
    p: ["971"],
    d: [6, 0, 1, 2, 3, 4, 5],
    c: [
      "gregory",
      "islamic-umalqura",
      "islamic",
      "islamic-civil",
      "islamic-tbla",
    ],
  },
  AF: {
    i: "AF",
    f: "🇦🇫",
    u: ["AFN"],
    p: ["93"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [4, 5],
    c: ["persian", "gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  AG: { i: "AG", f: "🇦🇬", u: ["XCD"], p: ["1268"], d: [0, 1, 2, 3, 4, 5, 6] },
  AI: { i: "AI", f: "🇦🇮", u: ["XCD"], p: ["1264"] },
  AL: {
    i: "AL",
    f: "🇦🇱",
    u: ["ALL"],
    p: ["355"],
    c: ["gregory", "islamic-civil", "islamic-tbla"],
  },
  AM: { i: "AM", f: "🇦🇲", u: ["AMD"], p: ["374"] },
  AO: { i: "AO", f: "🇦🇴", u: ["AOA"], p: ["244"] },
  AQ: { i: "AQ", f: "🇦🇶", u: [], p: ["672"] },
  AR: { i: "AR", f: "🇦🇷", u: ["ARS"], p: ["54"] },
  AS: { i: "AS", f: "🇦🇸", u: ["USD"], p: ["1684"], d: [0, 1, 2, 3, 4, 5, 6] },
  AT: { i: "AT", f: "🇦🇹", u: ["EUR"], p: ["43"] },
  AU: { i: "AU", f: "🇦🇺", u: ["AUD"], p: ["61"] },
  AW: { i: "AW", f: "🇦🇼", u: ["AWG"], p: ["297"] },
  AX: { i: "AX", f: "🇦🇽", u: ["EUR"], p: ["358"] },
  AZ: {
    i: "AZ",
    f: "🇦🇿",
    u: ["AZN"],
    p: ["994"],
    c: ["gregory", "islamic-civil", "islamic-tbla"],
  },
  BA: { i: "BA", f: "🇧🇦", u: ["BAM"], p: ["387"] },
  BB: { i: "BB", f: "🇧🇧", u: ["BBD"], p: ["1246"] },
  BD: {
    i: "BD",
    f: "🇧🇩",
    u: ["BDT"],
    p: ["880"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  BE: { i: "BE", f: "🇧🇪", u: ["EUR"], p: ["32"] },
  BF: { i: "BF", f: "🇧🇫", u: ["XOF"], p: ["226"] },
  BG: { i: "BG", f: "🇧🇬", u: ["BGN"], p: ["359"] },
  BH: {
    i: "BH",
    f: "🇧🇭",
    u: ["BHD"],
    p: ["973"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: [
      "gregory",
      "islamic-umalqura",
      "islamic",
      "islamic-civil",
      "islamic-tbla",
    ],
  },
  BI: { i: "BI", f: "🇧🇮", u: ["BIF"], p: ["257"] },
  BJ: { i: "BJ", f: "🇧🇯", u: ["XOF"], p: ["229"] },
  BL: { i: "BL", f: "🇧🇱", u: ["EUR"], p: ["590"] },
  BM: { i: "BM", f: "🇧🇲", u: ["BMD"], p: ["1441"] },
  BN: { i: "BN", f: "🇧🇳", u: ["BND"], p: ["673"] },
  BO: { i: "BO", f: "🇧🇴", u: ["BOB", "BOV"], p: ["591"] },
  BQ: { i: "BQ", f: "🇧🇶", u: ["USD"], p: ["5997"] },
  BR: { i: "BR", f: "🇧🇷", u: ["BRL"], p: ["55"], d: [0, 1, 2, 3, 4, 5, 6] },
  BS: { i: "BS", f: "🇧🇸", u: ["BSD"], p: ["1242"], d: [0, 1, 2, 3, 4, 5, 6] },
  BT: {
    i: "BT",
    f: "🇧🇹",
    u: ["BTN", "INR"],
    p: ["975"],
    d: [0, 1, 2, 3, 4, 5, 6],
  },
  BV: { i: "BV", f: "🇧🇻", u: ["NOK"], p: ["47"] },
  BW: { i: "BW", f: "🇧🇼", u: ["BWP"], p: ["267"], d: [0, 1, 2, 3, 4, 5, 6] },
  BY: { i: "BY", f: "🇧🇾", u: ["BYN"], p: ["375"] },
  BZ: { i: "BZ", f: "🇧🇿", u: ["BZD"], p: ["501"], d: [0, 1, 2, 3, 4, 5, 6] },
  CA: { i: "CA", f: "🇨🇦", u: ["CAD"], p: ["1"], d: [0, 1, 2, 3, 4, 5, 6] },
  CC: { i: "CC", f: "🇨🇨", u: ["AUD"], p: ["61"] },
  CD: { i: "CD", f: "🇨🇩", u: ["CDF"], p: ["243"] },
  CF: { i: "CF", f: "🇨🇫", u: ["XAF"], p: ["236"] },
  CG: { i: "CG", f: "🇨🇬", u: ["XAF"], p: ["242"] },
  CH: { i: "CH", f: "🇨🇭", u: ["CHE", "CHF", "CHW"], p: ["41"] },
  CI: { i: "CI", f: "🇨🇮", u: ["XOF"], p: ["225"] },
  CK: { i: "CK", f: "🇨🇰", u: ["NZD"], p: ["682"] },
  CL: { i: "CL", f: "🇨🇱", u: ["CLF", "CLP"], p: ["56"] },
  CM: { i: "CM", f: "🇨🇲", u: ["XAF"], p: ["237"] },
  CN: { i: "CN", f: "🇨🇳", u: ["CNY"], p: ["86"], c: ["gregory"] },
  CO: { i: "CO", f: "🇨🇴", u: ["COP"], p: ["57"], d: [0, 1, 2, 3, 4, 5, 6] },
  CR: { i: "CR", f: "🇨🇷", u: ["CRC"], p: ["506"] },
  CU: { i: "CU", f: "🇨🇺", u: ["CUC", "CUP"], p: ["53"] },
  CV: { i: "CV", f: "🇨🇻", u: ["CVE"], p: ["238"] },
  CW: { i: "CW", f: "🇨🇼", u: ["ANG"], p: ["5999"] },
  CX: { i: "CX", f: "🇨🇽", u: ["AUD"], p: ["61"], c: ["gregory"] },
  CY: { i: "CY", f: "🇨🇾", u: ["EUR"], p: ["357"] },
  CZ: { i: "CZ", f: "🇨🇿", u: ["CZK"], p: ["420"] },
  DE: { i: "DE", f: "🇩🇪", u: ["EUR"], p: ["49"] },
  DJ: {
    i: "DJ",
    f: "🇩🇯",
    u: ["DJF"],
    p: ["253"],
    d: [6, 0, 1, 2, 3, 4, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  DK: { i: "DK", f: "🇩🇰", u: ["DKK"], p: ["45"] },
  DM: { i: "DM", f: "🇩🇲", u: ["XCD"], p: ["1767"], d: [0, 1, 2, 3, 4, 5, 6] },
  DO: {
    i: "DO",
    f: "🇩🇴",
    u: ["DOP"],
    p: ["1809", "1829", "1849"],
    d: [0, 1, 2, 3, 4, 5, 6],
  },
  DZ: {
    i: "DZ",
    f: "🇩🇿",
    u: ["DZD"],
    p: ["213"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  EC: { i: "EC", f: "🇪🇨", u: ["USD"], p: ["593"] },
  EE: { i: "EE", f: "🇪🇪", u: ["EUR"], p: ["372"] },
  EG: {
    i: "EG",
    f: "🇪🇬",
    u: ["EGP"],
    p: ["20"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"],
  },
  EH: {
    i: "EH",
    f: "🇪🇭",
    u: ["MAD", "DZD", "MRU"],
    p: ["212"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  ER: {
    i: "ER",
    f: "🇪🇷",
    u: ["ERN"],
    p: ["291"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  ES: { i: "ES", f: "🇪🇸", u: ["EUR"], p: ["34"] },
  ET: {
    i: "ET",
    f: "🇪🇹",
    u: ["ETB"],
    p: ["251"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory", "ethiopic"],
  },
  FI: { i: "FI", f: "🇫🇮", u: ["EUR"], p: ["358"] },
  FJ: { i: "FJ", f: "🇫🇯", u: ["FJD"], p: ["679"] },
  FK: { i: "FK", f: "🇫🇰", u: ["FKP"], p: ["500"] },
  FM: { i: "FM", f: "🇫🇲", u: ["USD"], p: ["691"] },
  FO: { i: "FO", f: "🇫🇴", u: ["DKK"], p: ["298"] },
  FR: { i: "FR", f: "🇫🇷", u: ["EUR"], p: ["33"] },
  GA: { i: "GA", f: "🇬🇦", u: ["XAF"], p: ["241"] },
  GB: { i: "GB", f: "🇬🇧", u: ["GBP"], p: ["44"] },
  GD: { i: "GD", f: "🇬🇩", u: ["XCD"], p: ["1473"] },
  GE: { i: "GE", f: "🇬🇪", u: ["GEL"], p: ["995"] },
  GF: { i: "GF", f: "🇬🇫", u: ["EUR"], p: ["594"] },
  GG: { i: "GG", f: "🇬🇬", u: ["GBP"], p: ["44"] },
  GH: { i: "GH", f: "🇬🇭", u: ["GHS"], p: ["233"] },
  GI: { i: "GI", f: "🇬🇮", u: ["GIP"], p: ["350"] },
  GL: { i: "GL", f: "🇬🇱", u: ["DKK"], p: ["299"] },
  GM: { i: "GM", f: "🇬🇲", u: ["GMD"], p: ["220"] },
  GN: { i: "GN", f: "🇬🇳", u: ["GNF"], p: ["224"] },
  GP: { i: "GP", f: "🇬🇵", u: ["EUR"], p: ["590"] },
  GQ: { i: "GQ", f: "🇬🇶", u: ["XAF"], p: ["240"] },
  GR: { i: "GR", f: "🇬🇷", u: ["EUR"], p: ["30"] },
  GS: { i: "GS", f: "🇬🇸", u: ["GBP"], p: ["500"] },
  GT: { i: "GT", f: "🇬🇹", u: ["GTQ"], p: ["502"], d: [0, 1, 2, 3, 4, 5, 6] },
  GU: { i: "GU", f: "🇬🇺", u: ["USD"], p: ["1671"], d: [0, 1, 2, 3, 4, 5, 6] },
  GW: { i: "GW", f: "🇬🇼", u: ["XOF"], p: ["245"] },
  GY: { i: "GY", f: "🇬🇾", u: ["GYD"], p: ["592"] },
  HK: {
    i: "HK",
    f: "🇭🇰",
    u: ["HKD"],
    p: ["852"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory"],
  },
  HM: { i: "HM", f: "🇭🇲", u: ["AUD"], p: ["61"] },
  HN: { i: "HN", f: "🇭🇳", u: ["HNL"], p: ["504"], d: [0, 1, 2, 3, 4, 5, 6] },
  HR: { i: "HR", f: "🇭🇷", u: ["HRK"], p: ["385"] },
  HT: { i: "HT", f: "🇭🇹", u: ["HTG", "USD"], p: ["509"] },
  HU: { i: "HU", f: "🇭🇺", u: ["HUF"], p: ["36"] },
  IC: { i: "IC", f: "🇮🇨", u: ["EUR"], p: ["34"] },
  ID: {
    i: "ID",
    f: "🇮🇩",
    u: ["IDR"],
    p: ["62"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  IE: { i: "IE", f: "🇮🇪", u: ["EUR"], p: ["353"] },
  IL: {
    i: "IL",
    f: "🇮🇱",
    u: ["ILS"],
    p: ["972"],
    d: [0, 1, 2, 3, 4, 5, 6],
    e: [5, 6],
    c: ["gregory", "hebrew", "islamic", "islamic-civil", "islamic-tbla"],
  },
  IM: { i: "IM", f: "🇮🇲", u: ["GBP"], p: ["44"] },
  IN: {
    i: "IN",
    f: "🇮🇳",
    u: ["INR"],
    p: ["91"],
    d: [0, 1, 2, 3, 4, 5, 6],
    e: [0],
    c: ["gregory", "indian"],
  },
  IO: { i: "IO", f: "🇮🇴", u: ["USD"], p: ["246"] },
  IQ: {
    i: "IQ",
    f: "🇮🇶",
    u: ["IQD"],
    p: ["964"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  IR: {
    i: "IR",
    f: "🇮🇷",
    u: ["IRR"],
    p: ["98"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [5],
    c: ["persian", "gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  IS: { i: "IS", f: "🇮🇸", u: ["ISK"], p: ["354"] },
  IT: { i: "IT", f: "🇮🇹", u: ["EUR"], p: ["39"] },
  JE: { i: "JE", f: "🇯🇪", u: ["GBP"], p: ["44"] },
  JM: { i: "JM", f: "🇯🇲", u: ["JMD"], p: ["1876"], d: [0, 1, 2, 3, 4, 5, 6] },
  JO: {
    i: "JO",
    f: "🇯🇴",
    u: ["JOD"],
    p: ["962"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  JP: {
    i: "JP",
    f: "🇯🇵",
    u: ["JPY"],
    p: ["81"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory"],
  },
  KE: { i: "KE", f: "🇰🇪", u: ["KES"], p: ["254"], d: [0, 1, 2, 3, 4, 5, 6] },
  KG: { i: "KG", f: "🇰🇬", u: ["KGS"], p: ["996"] },
  KH: { i: "KH", f: "🇰🇭", u: ["KHR"], p: ["855"], d: [0, 1, 2, 3, 4, 5, 6] },
  KI: { i: "KI", f: "🇰🇮", u: ["AUD"], p: ["686"] },
  KM: {
    i: "KM",
    f: "🇰🇲",
    u: ["KMF"],
    p: ["269"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  KN: { i: "KN", f: "🇰🇳", u: ["XCD"], p: ["1869"] },
  KP: { i: "KP", f: "🇰🇵", u: ["KPW"], p: ["850"] },
  KR: {
    i: "KR",
    f: "🇰🇷",
    u: ["KRW"],
    p: ["82"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory"],
  },
  KW: {
    i: "KW",
    f: "🇰🇼",
    u: ["KWD"],
    p: ["965"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: [
      "gregory",
      "islamic-umalqura",
      "islamic",
      "islamic-civil",
      "islamic-tbla",
    ],
  },
  KY: { i: "KY", f: "🇰🇾", u: ["KYD"], p: ["1345"] },
  KZ: { i: "KZ", f: "🇰🇿", u: ["KZT"], p: ["76", "77"] },
  LA: { i: "LA", f: "🇱🇦", u: ["LAK"], p: ["856"], d: [0, 1, 2, 3, 4, 5, 6] },
  LB: {
    i: "LB",
    f: "🇱🇧",
    u: ["LBP"],
    p: ["961"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  LC: { i: "LC", f: "🇱🇨", u: ["XCD"], p: ["1758"] },
  LI: { i: "LI", f: "🇱🇮", u: ["CHF"], p: ["423"] },
  LK: { i: "LK", f: "🇱🇰", u: ["LKR"], p: ["94"] },
  LR: { i: "LR", f: "🇱🇷", u: ["LRD"], p: ["231"] },
  LS: { i: "LS", f: "🇱🇸", u: ["LSL", "ZAR"], p: ["266"] },
  LT: { i: "LT", f: "🇱🇹", u: ["EUR"], p: ["370"] },
  LU: { i: "LU", f: "🇱🇺", u: ["EUR"], p: ["352"] },
  LV: { i: "LV", f: "🇱🇻", u: ["EUR"], p: ["371"] },
  LY: {
    i: "LY",
    f: "🇱🇾",
    u: ["LYD"],
    p: ["218"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  MA: {
    i: "MA",
    f: "🇲🇦",
    u: ["MAD"],
    p: ["212"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  MC: { i: "MC", f: "🇲🇨", u: ["EUR"], p: ["377"] },
  MD: { i: "MD", f: "🇲🇩", u: ["MDL"], p: ["373"] },
  ME: { i: "ME", f: "🇲🇪", u: ["EUR"], p: ["382"] },
  MF: { i: "MF", f: "🇲🇫", u: ["EUR"], p: ["590"] },
  MG: { i: "MG", f: "🇲🇬", u: ["MGA"], p: ["261"] },
  MH: { i: "MH", f: "🇲🇭", u: ["USD"], p: ["692"], d: [0, 1, 2, 3, 4, 5, 6] },
  MK: { i: "MK", f: "🇲🇰", u: ["MKD"], p: ["389"] },
  ML: { i: "ML", f: "🇲🇱", u: ["XOF"], p: ["223"] },
  MM: { i: "MM", f: "🇲🇲", u: ["MMK"], p: ["95"], d: [0, 1, 2, 3, 4, 5, 6] },
  MN: { i: "MN", f: "🇲🇳", u: ["MNT"], p: ["976"] },
  MO: {
    i: "MO",
    f: "🇲🇴",
    u: ["MOP"],
    p: ["853"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory"],
  },
  MP: { i: "MP", f: "🇲🇵", u: ["USD"], p: ["1670"] },
  MQ: { i: "MQ", f: "🇲🇶", u: ["EUR"], p: ["596"] },
  MR: {
    i: "MR",
    f: "🇲🇷",
    u: ["MRU"],
    p: ["222"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  MS: { i: "MS", f: "🇲🇸", u: ["XCD"], p: ["1664"] },
  MT: { i: "MT", f: "🇲🇹", u: ["EUR"], p: ["356"], d: [0, 1, 2, 3, 4, 5, 6] },
  MU: { i: "MU", f: "🇲🇺", u: ["MUR"], p: ["230"] },
  MV: {
    i: "MV",
    f: "🇲🇻",
    u: ["MVR"],
    p: ["960"],
    d: [5, 6, 0, 1, 2, 3, 4],
    c: ["gregory", "islamic-civil", "islamic-tbla"],
  },
  MW: { i: "MW", f: "🇲🇼", u: ["MWK"], p: ["265"] },
  MX: { i: "MX", f: "🇲🇽", u: ["MXN"], p: ["52"], d: [0, 1, 2, 3, 4, 5, 6] },
  MY: {
    i: "MY",
    f: "🇲🇾",
    u: ["MYR"],
    p: ["60"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  MZ: { i: "MZ", f: "🇲🇿", u: ["MZN"], p: ["258"], d: [0, 1, 2, 3, 4, 5, 6] },
  NA: { i: "NA", f: "🇳🇦", u: ["NAD", "ZAR"], p: ["264"] },
  NC: { i: "NC", f: "🇳🇨", u: ["XPF"], p: ["687"] },
  NE: {
    i: "NE",
    f: "🇳🇪",
    u: ["XOF"],
    p: ["227"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  NF: { i: "NF", f: "🇳🇫", u: ["AUD"], p: ["672"] },
  NG: { i: "NG", f: "🇳🇬", u: ["NGN"], p: ["234"] },
  NI: { i: "NI", f: "🇳🇮", u: ["NIO"], p: ["505"], d: [0, 1, 2, 3, 4, 5, 6] },
  NL: { i: "NL", f: "🇳🇱", u: ["EUR"], p: ["31"] },
  NO: { i: "NO", f: "🇳🇴", u: ["NOK"], p: ["47"] },
  NP: { i: "NP", f: "🇳🇵", u: ["NPR"], p: ["977"], d: [0, 1, 2, 3, 4, 5, 6] },
  NR: { i: "NR", f: "🇳🇷", u: ["AUD"], p: ["674"] },
  NU: { i: "NU", f: "🇳🇺", u: ["NZD"], p: ["683"] },
  NZ: { i: "NZ", f: "🇳🇿", u: ["NZD"], p: ["64"] },
  OM: {
    i: "OM",
    f: "🇴🇲",
    u: ["OMR"],
    p: ["968"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  PA: {
    i: "PA",
    f: "🇵🇦",
    u: ["PAB", "USD"],
    p: ["507"],
    d: [0, 1, 2, 3, 4, 5, 6],
  },
  PE: { i: "PE", f: "🇵🇪", u: ["PEN"], p: ["51"], d: [0, 1, 2, 3, 4, 5, 6] },
  PF: { i: "PF", f: "🇵🇫", u: ["XPF"], p: ["689"] },
  PG: { i: "PG", f: "🇵🇬", u: ["PGK"], p: ["675"] },
  PH: { i: "PH", f: "🇵🇭", u: ["PHP"], p: ["63"], d: [0, 1, 2, 3, 4, 5, 6] },
  PK: {
    i: "PK",
    f: "🇵🇰",
    u: ["PKR"],
    p: ["92"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  PL: { i: "PL", f: "🇵🇱", u: ["PLN"], p: ["48"] },
  PM: { i: "PM", f: "🇵🇲", u: ["EUR"], p: ["508"] },
  PN: { i: "PN", f: "🇵🇳", u: ["NZD"], p: ["64"] },
  PR: {
    i: "PR",
    f: "🇵🇷",
    u: ["USD"],
    p: ["1787", "1939"],
    d: [0, 1, 2, 3, 4, 5, 6],
  },
  PS: {
    i: "PS",
    f: "🇵🇸",
    u: ["ILS"],
    p: ["970"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  PT: { i: "PT", f: "🇵🇹", u: ["EUR"], p: ["351"], d: [0, 1, 2, 3, 4, 5, 6] },
  PW: { i: "PW", f: "🇵🇼", u: ["USD"], p: ["680"] },
  PY: { i: "PY", f: "🇵🇾", u: ["PYG"], p: ["595"], d: [0, 1, 2, 3, 4, 5, 6] },
  QA: {
    i: "QA",
    f: "🇶🇦",
    u: ["QAR"],
    p: ["974"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: [
      "gregory",
      "islamic-umalqura",
      "islamic",
      "islamic-civil",
      "islamic-tbla",
    ],
  },
  RE: { i: "RE", f: "🇷🇪", u: ["EUR"], p: ["262"] },
  RO: { i: "RO", f: "🇷🇴", u: ["RON"], p: ["40"] },
  RS: { i: "RS", f: "🇷🇸", u: ["RSD"], p: ["381"] },
  RU: { i: "RU", f: "🇷🇺", u: ["RUB"], p: ["7"] },
  RW: { i: "RW", f: "🇷🇼", u: ["RWF"], p: ["250"] },
  SA: {
    i: "SA",
    f: "🇸🇦",
    u: ["SAR"],
    p: ["966"],
    d: [0, 1, 2, 3, 4, 5, 6],
    e: [5, 6],
    c: ["islamic-umalqura", "gregory", "islamic", "islamic-rgsa"],
  },
  SB: { i: "SB", f: "🇸🇧", u: ["SBD"], p: ["677"] },
  SC: { i: "SC", f: "🇸🇨", u: ["SCR"], p: ["248"] },
  SD: {
    i: "SD",
    f: "🇸🇩",
    u: ["SDG"],
    p: ["249"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  SE: { i: "SE", f: "🇸🇪", u: ["SEK"], p: ["46"] },
  SG: {
    i: "SG",
    f: "🇸🇬",
    u: ["SGD"],
    p: ["65"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory"],
  },
  SH: { i: "SH", f: "🇸🇭", u: ["SHP"], p: ["290"] },
  SI: { i: "SI", f: "🇸🇮", u: ["EUR"], p: ["386"] },
  SJ: { i: "SJ", f: "🇸🇯", u: ["NOK"], p: ["4779"] },
  SK: { i: "SK", f: "🇸🇰", u: ["EUR"], p: ["421"] },
  SL: { i: "SL", f: "🇸🇱", u: ["SLL"], p: ["232"] },
  SM: { i: "SM", f: "🇸🇲", u: ["EUR"], p: ["378"] },
  SN: { i: "SN", f: "🇸🇳", u: ["XOF"], p: ["221"] },
  SO: { i: "SO", f: "🇸🇴", u: ["SOS"], p: ["252"] },
  SR: { i: "SR", f: "🇸🇷", u: ["SRD"], p: ["597"] },
  SS: { i: "SS", f: "🇸🇸", u: ["SSP"], p: ["211"] },
  ST: { i: "ST", f: "🇸🇹", u: ["STN"], p: ["239"] },
  SV: {
    i: "SV",
    f: "🇸🇻",
    u: ["SVC", "USD"],
    p: ["503"],
    d: [0, 1, 2, 3, 4, 5, 6],
  },
  SX: { i: "SX", f: "🇸🇽", u: ["ANG"], p: ["1721"] },
  SY: {
    i: "SY",
    f: "🇸🇾",
    u: ["SYP"],
    p: ["963"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  SZ: { i: "SZ", f: "🇸🇿", u: ["SZL"], p: ["268"] },
  TC: { i: "TC", f: "🇹🇨", u: ["USD"], p: ["1649"] },
  TD: {
    i: "TD",
    f: "🇹🇩",
    u: ["XAF"],
    p: ["235"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  TF: { i: "TF", f: "🇹🇫", u: ["EUR"], p: ["262"] },
  TG: { i: "TG", f: "🇹🇬", u: ["XOF"], p: ["228"] },
  TH: {
    i: "TH",
    f: "🇹🇭",
    u: ["THB"],
    p: ["66"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["buddhist", "gregory"],
  },
  TJ: {
    i: "TJ",
    f: "🇹🇯",
    u: ["TJS"],
    p: ["992"],
    c: ["gregory", "islamic-civil", "islamic-tbla"],
  },
  TK: { i: "TK", f: "🇹🇰", u: ["NZD"], p: ["690"] },
  TL: { i: "TL", f: "🇹🇱", u: ["USD"], p: ["670"] },
  TM: {
    i: "TM",
    f: "🇹🇲",
    u: ["TMT"],
    p: ["993"],
    c: ["gregory", "islamic-civil", "islamic-tbla"],
  },
  TN: {
    i: "TN",
    f: "🇹🇳",
    u: ["TND"],
    p: ["216"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  TO: { i: "TO", f: "🇹🇴", u: ["TOP"], p: ["676"] },
  TR: {
    i: "TR",
    f: "🇹🇷",
    u: ["TRY"],
    p: ["90"],
    c: ["gregory", "islamic-civil", "islamic-tbla"],
  },
  TT: { i: "TT", f: "🇹🇹", u: ["TTD"], p: ["1868"], d: [0, 1, 2, 3, 4, 5, 6] },
  TV: { i: "TV", f: "🇹🇻", u: ["AUD"], p: ["688"] },
  TW: {
    i: "TW",
    f: "🇹🇼",
    u: ["TWD"],
    p: ["886"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory", "roc"],
  },
  TZ: { i: "TZ", f: "🇹🇿", u: ["TZS"], p: ["255"] },
  UA: { i: "UA", f: "🇺🇦", u: ["UAH"], p: ["380"] },
  UG: { i: "UG", f: "🇺🇬", u: ["UGX"], p: ["256"], e: [0] },
  UM: { i: "UM", f: "🇺🇲", u: ["USD"], p: ["1"], d: [0, 1, 2, 3, 4, 5, 6] },
  US: {
    i: "US",
    f: "🇺🇸",
    u: ["USD", "USN", "USS"],
    p: ["1"],
    d: [0, 1, 2, 3, 4, 5, 6],
  },
  UY: { i: "UY", f: "🇺🇾", u: ["UYI", "UYU"], p: ["598"] },
  UZ: {
    i: "UZ",
    f: "🇺🇿",
    u: ["UZS"],
    p: ["998"],
    c: ["gregory", "islamic-civil", "islamic-tbla"],
  },
  VA: { i: "VA", f: "🇻🇦", u: ["EUR"], p: ["379"] },
  VC: { i: "VC", f: "🇻🇨", u: ["XCD"], p: ["1784"] },
  VE: { i: "VE", f: "🇻🇪", u: ["VES"], p: ["58"], d: [0, 1, 2, 3, 4, 5, 6] },
  VG: { i: "VG", f: "🇻🇬", u: ["USD"], p: ["1284"] },
  VI: { i: "VI", f: "🇻🇮", u: ["USD"], p: ["1340"], d: [0, 1, 2, 3, 4, 5, 6] },
  VN: { i: "VN", f: "🇻🇳", u: ["VND"], p: ["84"] },
  VU: { i: "VU", f: "🇻🇺", u: ["VUV"], p: ["678"] },
  WF: { i: "WF", f: "🇼🇫", u: ["XPF"], p: ["681"] },
  WS: { i: "WS", f: "🇼🇸", u: ["WST"], p: ["685"], d: [0, 1, 2, 3, 4, 5, 6] },
  XK: {
    i: "XK",
    f: "🇽🇰",
    u: ["EUR"],
    p: ["377", "381", "383", "386"],
    c: ["gregory", "islamic-civil", "islamic-tbla"],
  },
  YE: {
    i: "YE",
    f: "🇾🇪",
    u: ["YER"],
    p: ["967"],
    d: [0, 1, 2, 3, 4, 5, 6],
    e: [5, 6],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"],
  },
  YT: { i: "YT", f: "🇾🇹", u: ["EUR"], p: ["262"] },
  ZA: { i: "ZA", f: "🇿🇦", u: ["ZAR"], p: ["27"], d: [0, 1, 2, 3, 4, 5, 6] },
  ZM: { i: "ZM", f: "🇿🇲", u: ["ZMW"], p: ["260"] },
  ZW: {
    i: "ZW",
    f: "🇿🇼",
    u: ["USD", "ZAR", "BWP", "GBP", "AUD", "CNY", "INR", "JPY"],
    p: ["263"],
    d: [0, 1, 2, 3, 4, 5, 6],
  },
};

Object.freeze(LIST);

// "en" is most popular language on internet
// "US" is most populated English language
// may not accurate but based on world default settings
// like default browser settings in `en-US` and cldr information
export const DEFAULT_PROPS: Properties = {
  i: "US",
  f: "🌎",
  u: [],
  p: [],
  c: ["gregory"],
  d: [1, 2, 3, 4, 5, 6, 0],
  e: [6, 0],
};

Object.freeze(DEFAULT_PROPS);

export function getProperties(countryCode: string): Properties | undefined {
  return LIST[countryCode];
}
