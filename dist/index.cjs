'use strict';

const luxon = require('luxon');

const LIST$2 = [
  "buddhist",
  "ethioaa",
  "ethiopic",
  "gregory",
  "hebrew",
  "indian",
  "islamic",
  "islamic-civil",
  "islamic-rgsa",
  "islamic-tbla",
  "islamic-umalqura",
  "persian",
  "roc"
];
Object.freeze(LIST$2);
function getCalendarName(c, locale) {
  return new Intl.DisplayNames(locale, {
    type: "calendar"
  }).of(c) || c;
}

const calendar = {
  __proto__: null,
  LIST: LIST$2,
  getCalendarName: getCalendarName
};

const TEXT_DIRECTIONS = ["rtl", "ltr"];
Object.freeze(TEXT_DIRECTIONS);
const DEFAULT_TEXT_DIRECTION = "ltr";
Object.freeze(DEFAULT_TEXT_DIRECTION);
const DEFAULT_LANGUAGE = "en";
Object.freeze(DEFAULT_LANGUAGE);
const LIST$1 = [
  "aa",
  "ab",
  "ace",
  "ach",
  "ada",
  "ady",
  "ae",
  "aeb",
  "af",
  "agq",
  "ak",
  "akk",
  "aln",
  "alt",
  "am",
  "an",
  "ann",
  "ar",
  "arc",
  "arn",
  "aro",
  "arq",
  "ars",
  "ary",
  "arz",
  "as",
  "asa",
  "ase",
  "ast",
  "atj",
  "av",
  "awa",
  "ay",
  "az",
  "ba",
  "bal",
  "ban",
  "bar",
  "bas",
  "bax",
  "bbc",
  "bbj",
  "be",
  "bej",
  "bem",
  "bew",
  "bez",
  "bfd",
  "bfq",
  "bg",
  "bgc",
  "bgn",
  "bho",
  "bi",
  "bik",
  "bin",
  "bjn",
  "bkm",
  "bla",
  "blt",
  "bm",
  "bn",
  "bo",
  "bpy",
  "bqi",
  "br",
  "bra",
  "brh",
  "brx",
  "bs",
  "bss",
  "bua",
  "bug",
  "bum",
  "byn",
  "byv",
  "ca",
  "cad",
  "cch",
  "ccp",
  "ce",
  "ceb",
  "cgg",
  "ch",
  "chk",
  "chm",
  "cho",
  "chp",
  "chr",
  "cic",
  "ckb",
  "clc",
  "co",
  "cop",
  "cps",
  "cr",
  "crg",
  "crh",
  "crk",
  "crl",
  "crs",
  "cs",
  "csb",
  "csw",
  "cu",
  "cv",
  "cy",
  "da",
  "dak",
  "dar",
  "dav",
  "de",
  "den",
  "dgr",
  "dje",
  "doi",
  "dsb",
  "dtp",
  "dua",
  "dv",
  "dyo",
  "dyu",
  "dz",
  "dzg",
  "ebu",
  "efi",
  "egl",
  "egy",
  "eka",
  "el",
  "en",
  "es",
  "esu",
  "et",
  "eu",
  "ewo",
  "ext",
  "fa",
  "fan",
  "ff",
  "fi",
  "fil",
  "fit",
  "fj",
  "fo",
  "fon",
  "fr",
  "frc",
  "frp",
  "frr",
  "frs",
  "fur",
  "fy",
  "ga",
  "gaa",
  "gag",
  "gan",
  "gay",
  "gba",
  "gbz",
  "gd",
  "gez",
  "gil",
  "gl",
  "glk",
  "gn",
  "gom",
  "gon",
  "gor",
  "got",
  "grb",
  "grc",
  "gsw",
  "gu",
  "guc",
  "gur",
  "guz",
  "gv",
  "gwi",
  "ha",
  "hak",
  "haw",
  "he",
  "hi",
  "hif",
  "hil",
  "hnj",
  "ho",
  "hr",
  "hsb",
  "hsn",
  "ht",
  "hu",
  "hur",
  "hy",
  "hz",
  "iba",
  "ibb",
  "id",
  "ig",
  "ii",
  "ik",
  "ilo",
  "inh",
  "is",
  "it",
  "iu",
  "izh",
  "ja",
  "jam",
  "jgo",
  "jmc",
  "jut",
  "jv",
  "ka",
  "kaa",
  "kab",
  "kac",
  "kaj",
  "kam",
  "kaw",
  "kbd",
  "kcg",
  "kde",
  "kea",
  "ken",
  "kfo",
  "kg",
  "kgp",
  "kha",
  "khq",
  "khw",
  "ki",
  "kiu",
  "kj",
  "kk",
  "kkj",
  "kl",
  "kln",
  "km",
  "kmb",
  "kn",
  "ko",
  "koi",
  "kok",
  "kos",
  "kpe",
  "kr",
  "krc",
  "kri",
  "krj",
  "krl",
  "kru",
  "ks",
  "ksb",
  "ksf",
  "ksh",
  "ku",
  "kum",
  "kv",
  "kw",
  "kwk",
  "ky",
  "la",
  "lad",
  "lag",
  "lah",
  "lb",
  "lez",
  "lg",
  "li",
  "lij",
  "lil",
  "lkt",
  "lmo",
  "ln",
  "lo",
  "lol",
  "loz",
  "lrc",
  "lt",
  "ltg",
  "lu",
  "lua",
  "luo",
  "luy",
  "lv",
  "lzh",
  "lzz",
  "mad",
  "maf",
  "mag",
  "mai",
  "mak",
  "man",
  "mas",
  "mde",
  "mdf",
  "mdr",
  "men",
  "mer",
  "mfe",
  "mg",
  "mgh",
  "mgo",
  "mh",
  "mi",
  "mic",
  "min",
  "mk",
  "ml",
  "mn",
  "mni",
  "moe",
  "moh",
  "mos",
  "mr",
  "mrj",
  "ms",
  "mt",
  "mua",
  "mus",
  "mwr",
  "mwv",
  "my",
  "myv",
  "mzn",
  "na",
  "nan",
  "nap",
  "naq",
  "nb",
  "nd",
  "nds",
  "ne",
  "new",
  "ng",
  "niu",
  "njo",
  "nl",
  "nn",
  "nnh",
  "no",
  "non",
  "nqo",
  "nr",
  "nso",
  "nus",
  "nv",
  "ny",
  "nym",
  "nyn",
  "nzi",
  "oc",
  "oj",
  "ojs",
  "oka",
  "om",
  "or",
  "os",
  "osa",
  "ota",
  "pa",
  "pag",
  "pal",
  "pam",
  "pap",
  "pau",
  "pcd",
  "pcm",
  "pdc",
  "pdt",
  "peo",
  "pfl",
  "phn",
  "pis",
  "pl",
  "pms",
  "pnt",
  "pon",
  "pqm",
  "ps",
  "pt",
  "qu",
  "quc",
  "qug",
  "raj",
  "rgn",
  "rhg",
  "rif",
  "rm",
  "rn",
  "ro",
  "rof",
  "rtm",
  "ru",
  "rue",
  "rug",
  "rw",
  "rwk",
  "sa",
  "sah",
  "saq",
  "sas",
  "sat",
  "saz",
  "sba",
  "sbp",
  "sc",
  "scn",
  "sco",
  "sd",
  "sdc",
  "sdh",
  "se",
  "seh",
  "sei",
  "ses",
  "sg",
  "sga",
  "sgs",
  "shi",
  "shn",
  "shu",
  "si",
  "sid",
  "sk",
  "sl",
  "sli",
  "sly",
  "sm",
  "sma",
  "smj",
  "smn",
  "sms",
  "sn",
  "snk",
  "so",
  "sog",
  "sq",
  "sr",
  "srn",
  "srr",
  "ss",
  "ssy",
  "st",
  "stq",
  "su",
  "suk",
  "sus",
  "sv",
  "sw",
  "swb",
  "syr",
  "szl",
  "ta",
  "tcy",
  "te",
  "tem",
  "teo",
  "tet",
  "tg",
  "th",
  "ti",
  "tig",
  "tiv",
  "tk",
  "tkl",
  "tkr",
  "tly",
  "tmh",
  "tn",
  "to",
  "tog",
  "tpi",
  "tr",
  "tru",
  "trv",
  "trw",
  "ts",
  "tsd",
  "tt",
  "ttt",
  "tum",
  "tvl",
  "twq",
  "ty",
  "tyv",
  "tzm",
  "udm",
  "ug",
  "uga",
  "uk",
  "umb",
  "ur",
  "uz",
  "vai",
  "ve",
  "vec",
  "vep",
  "vi",
  "vls",
  "vmf",
  "vot",
  "vro",
  "vun",
  "wa",
  "wae",
  "wal",
  "war",
  "wbp",
  "wo",
  "wuu",
  "xh",
  "xmf",
  "xog",
  "yao",
  "yap",
  "yav",
  "ybb",
  "yo",
  "yrl",
  "yue",
  "za",
  "zea",
  "zgh",
  "zh",
  "zu",
  "zza"
];
Object.freeze(LIST$1);
const LIST_POPULAR = [
  "am",
  "ar",
  "bg",
  "bn",
  "ca",
  "cs",
  "cy",
  "de",
  "el",
  "en",
  "es",
  "et",
  "fa",
  "fi",
  "fr",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "jv",
  "ko",
  "lt",
  "lv",
  "mr",
  "nl",
  "no",
  "pa",
  "pl",
  "pt",
  "ro",
  "ru",
  "sk",
  "sl",
  "sq",
  "sr",
  "sv",
  "sw",
  "ta",
  "te",
  "th",
  "tr",
  "uk",
  "ur",
  "vi",
  "xh",
  "yo",
  "zh",
  "zu"
];
Object.freeze(LIST_POPULAR);
const LIST_RTL = [
  "ae",
  "aeb",
  "ar",
  "arc",
  "arq",
  "ars",
  "ary",
  "arz",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "ha",
  "he",
  "khw",
  "ks",
  "ku",
  "mzn",
  "nqo",
  "ps",
  "sd",
  "syr",
  "ug",
  "ur"
];
Object.freeze(LIST_RTL);

const language = {
  __proto__: null,
  DEFAULT_LANGUAGE: DEFAULT_LANGUAGE,
  DEFAULT_TEXT_DIRECTION: DEFAULT_TEXT_DIRECTION,
  LIST: LIST$1,
  LIST_POPULAR: LIST_POPULAR,
  LIST_RTL: LIST_RTL,
  TEXT_DIRECTIONS: TEXT_DIRECTIONS
};

const LIST = {
  AD: { i: "AD", f: "\u{1F1E6}\u{1F1E9}", u: ["EUR"], p: ["376"] },
  AE: {
    i: "AE",
    f: "\u{1F1E6}\u{1F1EA}",
    u: ["AED"],
    p: ["971"],
    d: [6, 0, 1, 2, 3, 4, 5],
    c: [
      "gregory",
      "islamic-umalqura",
      "islamic",
      "islamic-civil",
      "islamic-tbla"
    ]
  },
  AF: {
    i: "AF",
    f: "\u{1F1E6}\u{1F1EB}",
    u: ["AFN"],
    p: ["93"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [4, 5],
    c: ["persian", "gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  AG: { i: "AG", f: "\u{1F1E6}\u{1F1EC}", u: ["XCD"], p: ["1268"], d: [0, 1, 2, 3, 4, 5, 6] },
  AI: { i: "AI", f: "\u{1F1E6}\u{1F1EE}", u: ["XCD"], p: ["1264"] },
  AL: {
    i: "AL",
    f: "\u{1F1E6}\u{1F1F1}",
    u: ["ALL"],
    p: ["355"],
    c: ["gregory", "islamic-civil", "islamic-tbla"]
  },
  AM: { i: "AM", f: "\u{1F1E6}\u{1F1F2}", u: ["AMD"], p: ["374"] },
  AO: { i: "AO", f: "\u{1F1E6}\u{1F1F4}", u: ["AOA"], p: ["244"] },
  AQ: { i: "AQ", f: "\u{1F1E6}\u{1F1F6}", u: [], p: ["672"] },
  AR: { i: "AR", f: "\u{1F1E6}\u{1F1F7}", u: ["ARS"], p: ["54"] },
  AS: { i: "AS", f: "\u{1F1E6}\u{1F1F8}", u: ["USD"], p: ["1684"], d: [0, 1, 2, 3, 4, 5, 6] },
  AT: { i: "AT", f: "\u{1F1E6}\u{1F1F9}", u: ["EUR"], p: ["43"] },
  AU: { i: "AU", f: "\u{1F1E6}\u{1F1FA}", u: ["AUD"], p: ["61"] },
  AW: { i: "AW", f: "\u{1F1E6}\u{1F1FC}", u: ["AWG"], p: ["297"] },
  AX: { i: "AX", f: "\u{1F1E6}\u{1F1FD}", u: ["EUR"], p: ["358"] },
  AZ: {
    i: "AZ",
    f: "\u{1F1E6}\u{1F1FF}",
    u: ["AZN"],
    p: ["994"],
    c: ["gregory", "islamic-civil", "islamic-tbla"]
  },
  BA: { i: "BA", f: "\u{1F1E7}\u{1F1E6}", u: ["BAM"], p: ["387"] },
  BB: { i: "BB", f: "\u{1F1E7}\u{1F1E7}", u: ["BBD"], p: ["1246"] },
  BD: {
    i: "BD",
    f: "\u{1F1E7}\u{1F1E9}",
    u: ["BDT"],
    p: ["880"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  BE: { i: "BE", f: "\u{1F1E7}\u{1F1EA}", u: ["EUR"], p: ["32"] },
  BF: { i: "BF", f: "\u{1F1E7}\u{1F1EB}", u: ["XOF"], p: ["226"] },
  BG: { i: "BG", f: "\u{1F1E7}\u{1F1EC}", u: ["BGN"], p: ["359"] },
  BH: {
    i: "BH",
    f: "\u{1F1E7}\u{1F1ED}",
    u: ["BHD"],
    p: ["973"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: [
      "gregory",
      "islamic-umalqura",
      "islamic",
      "islamic-civil",
      "islamic-tbla"
    ]
  },
  BI: { i: "BI", f: "\u{1F1E7}\u{1F1EE}", u: ["BIF"], p: ["257"] },
  BJ: { i: "BJ", f: "\u{1F1E7}\u{1F1EF}", u: ["XOF"], p: ["229"] },
  BL: { i: "BL", f: "\u{1F1E7}\u{1F1F1}", u: ["EUR"], p: ["590"] },
  BM: { i: "BM", f: "\u{1F1E7}\u{1F1F2}", u: ["BMD"], p: ["1441"] },
  BN: { i: "BN", f: "\u{1F1E7}\u{1F1F3}", u: ["BND"], p: ["673"] },
  BO: { i: "BO", f: "\u{1F1E7}\u{1F1F4}", u: ["BOB", "BOV"], p: ["591"] },
  BQ: { i: "BQ", f: "\u{1F1E7}\u{1F1F6}", u: ["USD"], p: ["5997"] },
  BR: { i: "BR", f: "\u{1F1E7}\u{1F1F7}", u: ["BRL"], p: ["55"], d: [0, 1, 2, 3, 4, 5, 6] },
  BS: { i: "BS", f: "\u{1F1E7}\u{1F1F8}", u: ["BSD"], p: ["1242"], d: [0, 1, 2, 3, 4, 5, 6] },
  BT: {
    i: "BT",
    f: "\u{1F1E7}\u{1F1F9}",
    u: ["BTN", "INR"],
    p: ["975"],
    d: [0, 1, 2, 3, 4, 5, 6]
  },
  BV: { i: "BV", f: "\u{1F1E7}\u{1F1FB}", u: ["NOK"], p: ["47"] },
  BW: { i: "BW", f: "\u{1F1E7}\u{1F1FC}", u: ["BWP"], p: ["267"], d: [0, 1, 2, 3, 4, 5, 6] },
  BY: { i: "BY", f: "\u{1F1E7}\u{1F1FE}", u: ["BYN"], p: ["375"] },
  BZ: { i: "BZ", f: "\u{1F1E7}\u{1F1FF}", u: ["BZD"], p: ["501"], d: [0, 1, 2, 3, 4, 5, 6] },
  CA: { i: "CA", f: "\u{1F1E8}\u{1F1E6}", u: ["CAD"], p: ["1"], d: [0, 1, 2, 3, 4, 5, 6] },
  CC: { i: "CC", f: "\u{1F1E8}\u{1F1E8}", u: ["AUD"], p: ["61"] },
  CD: { i: "CD", f: "\u{1F1E8}\u{1F1E9}", u: ["CDF"], p: ["243"] },
  CF: { i: "CF", f: "\u{1F1E8}\u{1F1EB}", u: ["XAF"], p: ["236"] },
  CG: { i: "CG", f: "\u{1F1E8}\u{1F1EC}", u: ["XAF"], p: ["242"] },
  CH: { i: "CH", f: "\u{1F1E8}\u{1F1ED}", u: ["CHE", "CHF", "CHW"], p: ["41"] },
  CI: { i: "CI", f: "\u{1F1E8}\u{1F1EE}", u: ["XOF"], p: ["225"] },
  CK: { i: "CK", f: "\u{1F1E8}\u{1F1F0}", u: ["NZD"], p: ["682"] },
  CL: { i: "CL", f: "\u{1F1E8}\u{1F1F1}", u: ["CLF", "CLP"], p: ["56"] },
  CM: { i: "CM", f: "\u{1F1E8}\u{1F1F2}", u: ["XAF"], p: ["237"] },
  CN: { i: "CN", f: "\u{1F1E8}\u{1F1F3}", u: ["CNY"], p: ["86"], c: ["gregory"] },
  CO: { i: "CO", f: "\u{1F1E8}\u{1F1F4}", u: ["COP"], p: ["57"], d: [0, 1, 2, 3, 4, 5, 6] },
  CR: { i: "CR", f: "\u{1F1E8}\u{1F1F7}", u: ["CRC"], p: ["506"] },
  CU: { i: "CU", f: "\u{1F1E8}\u{1F1FA}", u: ["CUC", "CUP"], p: ["53"] },
  CV: { i: "CV", f: "\u{1F1E8}\u{1F1FB}", u: ["CVE"], p: ["238"] },
  CW: { i: "CW", f: "\u{1F1E8}\u{1F1FC}", u: ["ANG"], p: ["5999"] },
  CX: { i: "CX", f: "\u{1F1E8}\u{1F1FD}", u: ["AUD"], p: ["61"], c: ["gregory"] },
  CY: { i: "CY", f: "\u{1F1E8}\u{1F1FE}", u: ["EUR"], p: ["357"] },
  CZ: { i: "CZ", f: "\u{1F1E8}\u{1F1FF}", u: ["CZK"], p: ["420"] },
  DE: { i: "DE", f: "\u{1F1E9}\u{1F1EA}", u: ["EUR"], p: ["49"] },
  DJ: {
    i: "DJ",
    f: "\u{1F1E9}\u{1F1EF}",
    u: ["DJF"],
    p: ["253"],
    d: [6, 0, 1, 2, 3, 4, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  DK: { i: "DK", f: "\u{1F1E9}\u{1F1F0}", u: ["DKK"], p: ["45"] },
  DM: { i: "DM", f: "\u{1F1E9}\u{1F1F2}", u: ["XCD"], p: ["1767"], d: [0, 1, 2, 3, 4, 5, 6] },
  DO: {
    i: "DO",
    f: "\u{1F1E9}\u{1F1F4}",
    u: ["DOP"],
    p: ["1809", "1829", "1849"],
    d: [0, 1, 2, 3, 4, 5, 6]
  },
  DZ: {
    i: "DZ",
    f: "\u{1F1E9}\u{1F1FF}",
    u: ["DZD"],
    p: ["213"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  EC: { i: "EC", f: "\u{1F1EA}\u{1F1E8}", u: ["USD"], p: ["593"] },
  EE: { i: "EE", f: "\u{1F1EA}\u{1F1EA}", u: ["EUR"], p: ["372"] },
  EG: {
    i: "EG",
    f: "\u{1F1EA}\u{1F1EC}",
    u: ["EGP"],
    p: ["20"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  EH: {
    i: "EH",
    f: "\u{1F1EA}\u{1F1ED}",
    u: ["MAD", "DZD", "MRU"],
    p: ["212"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  ER: {
    i: "ER",
    f: "\u{1F1EA}\u{1F1F7}",
    u: ["ERN"],
    p: ["291"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  ES: { i: "ES", f: "\u{1F1EA}\u{1F1F8}", u: ["EUR"], p: ["34"] },
  ET: {
    i: "ET",
    f: "\u{1F1EA}\u{1F1F9}",
    u: ["ETB"],
    p: ["251"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory", "ethiopic"]
  },
  FI: { i: "FI", f: "\u{1F1EB}\u{1F1EE}", u: ["EUR"], p: ["358"] },
  FJ: { i: "FJ", f: "\u{1F1EB}\u{1F1EF}", u: ["FJD"], p: ["679"] },
  FK: { i: "FK", f: "\u{1F1EB}\u{1F1F0}", u: ["FKP"], p: ["500"] },
  FM: { i: "FM", f: "\u{1F1EB}\u{1F1F2}", u: ["USD"], p: ["691"] },
  FO: { i: "FO", f: "\u{1F1EB}\u{1F1F4}", u: ["DKK"], p: ["298"] },
  FR: { i: "FR", f: "\u{1F1EB}\u{1F1F7}", u: ["EUR"], p: ["33"] },
  GA: { i: "GA", f: "\u{1F1EC}\u{1F1E6}", u: ["XAF"], p: ["241"] },
  GB: { i: "GB", f: "\u{1F1EC}\u{1F1E7}", u: ["GBP"], p: ["44"] },
  GD: { i: "GD", f: "\u{1F1EC}\u{1F1E9}", u: ["XCD"], p: ["1473"] },
  GE: { i: "GE", f: "\u{1F1EC}\u{1F1EA}", u: ["GEL"], p: ["995"] },
  GF: { i: "GF", f: "\u{1F1EC}\u{1F1EB}", u: ["EUR"], p: ["594"] },
  GG: { i: "GG", f: "\u{1F1EC}\u{1F1EC}", u: ["GBP"], p: ["44"] },
  GH: { i: "GH", f: "\u{1F1EC}\u{1F1ED}", u: ["GHS"], p: ["233"] },
  GI: { i: "GI", f: "\u{1F1EC}\u{1F1EE}", u: ["GIP"], p: ["350"] },
  GL: { i: "GL", f: "\u{1F1EC}\u{1F1F1}", u: ["DKK"], p: ["299"] },
  GM: { i: "GM", f: "\u{1F1EC}\u{1F1F2}", u: ["GMD"], p: ["220"] },
  GN: { i: "GN", f: "\u{1F1EC}\u{1F1F3}", u: ["GNF"], p: ["224"] },
  GP: { i: "GP", f: "\u{1F1EC}\u{1F1F5}", u: ["EUR"], p: ["590"] },
  GQ: { i: "GQ", f: "\u{1F1EC}\u{1F1F6}", u: ["XAF"], p: ["240"] },
  GR: { i: "GR", f: "\u{1F1EC}\u{1F1F7}", u: ["EUR"], p: ["30"] },
  GS: { i: "GS", f: "\u{1F1EC}\u{1F1F8}", u: ["GBP"], p: ["500"] },
  GT: { i: "GT", f: "\u{1F1EC}\u{1F1F9}", u: ["GTQ"], p: ["502"], d: [0, 1, 2, 3, 4, 5, 6] },
  GU: { i: "GU", f: "\u{1F1EC}\u{1F1FA}", u: ["USD"], p: ["1671"], d: [0, 1, 2, 3, 4, 5, 6] },
  GW: { i: "GW", f: "\u{1F1EC}\u{1F1FC}", u: ["XOF"], p: ["245"] },
  GY: { i: "GY", f: "\u{1F1EC}\u{1F1FE}", u: ["GYD"], p: ["592"] },
  HK: {
    i: "HK",
    f: "\u{1F1ED}\u{1F1F0}",
    u: ["HKD"],
    p: ["852"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory"]
  },
  HM: { i: "HM", f: "\u{1F1ED}\u{1F1F2}", u: ["AUD"], p: ["61"] },
  HN: { i: "HN", f: "\u{1F1ED}\u{1F1F3}", u: ["HNL"], p: ["504"], d: [0, 1, 2, 3, 4, 5, 6] },
  HR: { i: "HR", f: "\u{1F1ED}\u{1F1F7}", u: ["HRK"], p: ["385"] },
  HT: { i: "HT", f: "\u{1F1ED}\u{1F1F9}", u: ["HTG", "USD"], p: ["509"] },
  HU: { i: "HU", f: "\u{1F1ED}\u{1F1FA}", u: ["HUF"], p: ["36"] },
  IC: { i: "IC", f: "\u{1F1EE}\u{1F1E8}", u: ["EUR"], p: ["34"] },
  ID: {
    i: "ID",
    f: "\u{1F1EE}\u{1F1E9}",
    u: ["IDR"],
    p: ["62"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  IE: { i: "IE", f: "\u{1F1EE}\u{1F1EA}", u: ["EUR"], p: ["353"] },
  IL: {
    i: "IL",
    f: "\u{1F1EE}\u{1F1F1}",
    u: ["ILS"],
    p: ["972"],
    d: [0, 1, 2, 3, 4, 5, 6],
    e: [5, 6],
    c: ["gregory", "hebrew", "islamic", "islamic-civil", "islamic-tbla"]
  },
  IM: { i: "IM", f: "\u{1F1EE}\u{1F1F2}", u: ["GBP"], p: ["44"] },
  IN: {
    i: "IN",
    f: "\u{1F1EE}\u{1F1F3}",
    u: ["INR"],
    p: ["91"],
    d: [0, 1, 2, 3, 4, 5, 6],
    e: [0],
    c: ["gregory", "indian"]
  },
  IO: { i: "IO", f: "\u{1F1EE}\u{1F1F4}", u: ["USD"], p: ["246"] },
  IQ: {
    i: "IQ",
    f: "\u{1F1EE}\u{1F1F6}",
    u: ["IQD"],
    p: ["964"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  IR: {
    i: "IR",
    f: "\u{1F1EE}\u{1F1F7}",
    u: ["IRR"],
    p: ["98"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [5],
    c: ["persian", "gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  IS: { i: "IS", f: "\u{1F1EE}\u{1F1F8}", u: ["ISK"], p: ["354"] },
  IT: { i: "IT", f: "\u{1F1EE}\u{1F1F9}", u: ["EUR"], p: ["39"] },
  JE: { i: "JE", f: "\u{1F1EF}\u{1F1EA}", u: ["GBP"], p: ["44"] },
  JM: { i: "JM", f: "\u{1F1EF}\u{1F1F2}", u: ["JMD"], p: ["1876"], d: [0, 1, 2, 3, 4, 5, 6] },
  JO: {
    i: "JO",
    f: "\u{1F1EF}\u{1F1F4}",
    u: ["JOD"],
    p: ["962"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  JP: {
    i: "JP",
    f: "\u{1F1EF}\u{1F1F5}",
    u: ["JPY"],
    p: ["81"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory"]
  },
  KE: { i: "KE", f: "\u{1F1F0}\u{1F1EA}", u: ["KES"], p: ["254"], d: [0, 1, 2, 3, 4, 5, 6] },
  KG: { i: "KG", f: "\u{1F1F0}\u{1F1EC}", u: ["KGS"], p: ["996"] },
  KH: { i: "KH", f: "\u{1F1F0}\u{1F1ED}", u: ["KHR"], p: ["855"], d: [0, 1, 2, 3, 4, 5, 6] },
  KI: { i: "KI", f: "\u{1F1F0}\u{1F1EE}", u: ["AUD"], p: ["686"] },
  KM: {
    i: "KM",
    f: "\u{1F1F0}\u{1F1F2}",
    u: ["KMF"],
    p: ["269"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  KN: { i: "KN", f: "\u{1F1F0}\u{1F1F3}", u: ["XCD"], p: ["1869"] },
  KP: { i: "KP", f: "\u{1F1F0}\u{1F1F5}", u: ["KPW"], p: ["850"] },
  KR: {
    i: "KR",
    f: "\u{1F1F0}\u{1F1F7}",
    u: ["KRW"],
    p: ["82"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory"]
  },
  KW: {
    i: "KW",
    f: "\u{1F1F0}\u{1F1FC}",
    u: ["KWD"],
    p: ["965"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: [
      "gregory",
      "islamic-umalqura",
      "islamic",
      "islamic-civil",
      "islamic-tbla"
    ]
  },
  KY: { i: "KY", f: "\u{1F1F0}\u{1F1FE}", u: ["KYD"], p: ["1345"] },
  KZ: { i: "KZ", f: "\u{1F1F0}\u{1F1FF}", u: ["KZT"], p: ["76", "77"] },
  LA: { i: "LA", f: "\u{1F1F1}\u{1F1E6}", u: ["LAK"], p: ["856"], d: [0, 1, 2, 3, 4, 5, 6] },
  LB: {
    i: "LB",
    f: "\u{1F1F1}\u{1F1E7}",
    u: ["LBP"],
    p: ["961"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  LC: { i: "LC", f: "\u{1F1F1}\u{1F1E8}", u: ["XCD"], p: ["1758"] },
  LI: { i: "LI", f: "\u{1F1F1}\u{1F1EE}", u: ["CHF"], p: ["423"] },
  LK: { i: "LK", f: "\u{1F1F1}\u{1F1F0}", u: ["LKR"], p: ["94"] },
  LR: { i: "LR", f: "\u{1F1F1}\u{1F1F7}", u: ["LRD"], p: ["231"] },
  LS: { i: "LS", f: "\u{1F1F1}\u{1F1F8}", u: ["LSL", "ZAR"], p: ["266"] },
  LT: { i: "LT", f: "\u{1F1F1}\u{1F1F9}", u: ["EUR"], p: ["370"] },
  LU: { i: "LU", f: "\u{1F1F1}\u{1F1FA}", u: ["EUR"], p: ["352"] },
  LV: { i: "LV", f: "\u{1F1F1}\u{1F1FB}", u: ["EUR"], p: ["371"] },
  LY: {
    i: "LY",
    f: "\u{1F1F1}\u{1F1FE}",
    u: ["LYD"],
    p: ["218"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  MA: {
    i: "MA",
    f: "\u{1F1F2}\u{1F1E6}",
    u: ["MAD"],
    p: ["212"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  MC: { i: "MC", f: "\u{1F1F2}\u{1F1E8}", u: ["EUR"], p: ["377"] },
  MD: { i: "MD", f: "\u{1F1F2}\u{1F1E9}", u: ["MDL"], p: ["373"] },
  ME: { i: "ME", f: "\u{1F1F2}\u{1F1EA}", u: ["EUR"], p: ["382"] },
  MF: { i: "MF", f: "\u{1F1F2}\u{1F1EB}", u: ["EUR"], p: ["590"] },
  MG: { i: "MG", f: "\u{1F1F2}\u{1F1EC}", u: ["MGA"], p: ["261"] },
  MH: { i: "MH", f: "\u{1F1F2}\u{1F1ED}", u: ["USD"], p: ["692"], d: [0, 1, 2, 3, 4, 5, 6] },
  MK: { i: "MK", f: "\u{1F1F2}\u{1F1F0}", u: ["MKD"], p: ["389"] },
  ML: { i: "ML", f: "\u{1F1F2}\u{1F1F1}", u: ["XOF"], p: ["223"] },
  MM: { i: "MM", f: "\u{1F1F2}\u{1F1F2}", u: ["MMK"], p: ["95"], d: [0, 1, 2, 3, 4, 5, 6] },
  MN: { i: "MN", f: "\u{1F1F2}\u{1F1F3}", u: ["MNT"], p: ["976"] },
  MO: {
    i: "MO",
    f: "\u{1F1F2}\u{1F1F4}",
    u: ["MOP"],
    p: ["853"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory"]
  },
  MP: { i: "MP", f: "\u{1F1F2}\u{1F1F5}", u: ["USD"], p: ["1670"] },
  MQ: { i: "MQ", f: "\u{1F1F2}\u{1F1F6}", u: ["EUR"], p: ["596"] },
  MR: {
    i: "MR",
    f: "\u{1F1F2}\u{1F1F7}",
    u: ["MRU"],
    p: ["222"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  MS: { i: "MS", f: "\u{1F1F2}\u{1F1F8}", u: ["XCD"], p: ["1664"] },
  MT: { i: "MT", f: "\u{1F1F2}\u{1F1F9}", u: ["EUR"], p: ["356"], d: [0, 1, 2, 3, 4, 5, 6] },
  MU: { i: "MU", f: "\u{1F1F2}\u{1F1FA}", u: ["MUR"], p: ["230"] },
  MV: {
    i: "MV",
    f: "\u{1F1F2}\u{1F1FB}",
    u: ["MVR"],
    p: ["960"],
    d: [5, 6, 0, 1, 2, 3, 4],
    c: ["gregory", "islamic-civil", "islamic-tbla"]
  },
  MW: { i: "MW", f: "\u{1F1F2}\u{1F1FC}", u: ["MWK"], p: ["265"] },
  MX: { i: "MX", f: "\u{1F1F2}\u{1F1FD}", u: ["MXN"], p: ["52"], d: [0, 1, 2, 3, 4, 5, 6] },
  MY: {
    i: "MY",
    f: "\u{1F1F2}\u{1F1FE}",
    u: ["MYR"],
    p: ["60"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  MZ: { i: "MZ", f: "\u{1F1F2}\u{1F1FF}", u: ["MZN"], p: ["258"], d: [0, 1, 2, 3, 4, 5, 6] },
  NA: { i: "NA", f: "\u{1F1F3}\u{1F1E6}", u: ["NAD", "ZAR"], p: ["264"] },
  NC: { i: "NC", f: "\u{1F1F3}\u{1F1E8}", u: ["XPF"], p: ["687"] },
  NE: {
    i: "NE",
    f: "\u{1F1F3}\u{1F1EA}",
    u: ["XOF"],
    p: ["227"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  NF: { i: "NF", f: "\u{1F1F3}\u{1F1EB}", u: ["AUD"], p: ["672"] },
  NG: { i: "NG", f: "\u{1F1F3}\u{1F1EC}", u: ["NGN"], p: ["234"] },
  NI: { i: "NI", f: "\u{1F1F3}\u{1F1EE}", u: ["NIO"], p: ["505"], d: [0, 1, 2, 3, 4, 5, 6] },
  NL: { i: "NL", f: "\u{1F1F3}\u{1F1F1}", u: ["EUR"], p: ["31"] },
  NO: { i: "NO", f: "\u{1F1F3}\u{1F1F4}", u: ["NOK"], p: ["47"] },
  NP: { i: "NP", f: "\u{1F1F3}\u{1F1F5}", u: ["NPR"], p: ["977"], d: [0, 1, 2, 3, 4, 5, 6] },
  NR: { i: "NR", f: "\u{1F1F3}\u{1F1F7}", u: ["AUD"], p: ["674"] },
  NU: { i: "NU", f: "\u{1F1F3}\u{1F1FA}", u: ["NZD"], p: ["683"] },
  NZ: { i: "NZ", f: "\u{1F1F3}\u{1F1FF}", u: ["NZD"], p: ["64"] },
  OM: {
    i: "OM",
    f: "\u{1F1F4}\u{1F1F2}",
    u: ["OMR"],
    p: ["968"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  PA: {
    i: "PA",
    f: "\u{1F1F5}\u{1F1E6}",
    u: ["PAB", "USD"],
    p: ["507"],
    d: [0, 1, 2, 3, 4, 5, 6]
  },
  PE: { i: "PE", f: "\u{1F1F5}\u{1F1EA}", u: ["PEN"], p: ["51"], d: [0, 1, 2, 3, 4, 5, 6] },
  PF: { i: "PF", f: "\u{1F1F5}\u{1F1EB}", u: ["XPF"], p: ["689"] },
  PG: { i: "PG", f: "\u{1F1F5}\u{1F1EC}", u: ["PGK"], p: ["675"] },
  PH: { i: "PH", f: "\u{1F1F5}\u{1F1ED}", u: ["PHP"], p: ["63"], d: [0, 1, 2, 3, 4, 5, 6] },
  PK: {
    i: "PK",
    f: "\u{1F1F5}\u{1F1F0}",
    u: ["PKR"],
    p: ["92"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  PL: { i: "PL", f: "\u{1F1F5}\u{1F1F1}", u: ["PLN"], p: ["48"] },
  PM: { i: "PM", f: "\u{1F1F5}\u{1F1F2}", u: ["EUR"], p: ["508"] },
  PN: { i: "PN", f: "\u{1F1F5}\u{1F1F3}", u: ["NZD"], p: ["64"] },
  PR: {
    i: "PR",
    f: "\u{1F1F5}\u{1F1F7}",
    u: ["USD"],
    p: ["1787", "1939"],
    d: [0, 1, 2, 3, 4, 5, 6]
  },
  PS: {
    i: "PS",
    f: "\u{1F1F5}\u{1F1F8}",
    u: ["ILS"],
    p: ["970"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  PT: { i: "PT", f: "\u{1F1F5}\u{1F1F9}", u: ["EUR"], p: ["351"], d: [0, 1, 2, 3, 4, 5, 6] },
  PW: { i: "PW", f: "\u{1F1F5}\u{1F1FC}", u: ["USD"], p: ["680"] },
  PY: { i: "PY", f: "\u{1F1F5}\u{1F1FE}", u: ["PYG"], p: ["595"], d: [0, 1, 2, 3, 4, 5, 6] },
  QA: {
    i: "QA",
    f: "\u{1F1F6}\u{1F1E6}",
    u: ["QAR"],
    p: ["974"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: [
      "gregory",
      "islamic-umalqura",
      "islamic",
      "islamic-civil",
      "islamic-tbla"
    ]
  },
  RE: { i: "RE", f: "\u{1F1F7}\u{1F1EA}", u: ["EUR"], p: ["262"] },
  RO: { i: "RO", f: "\u{1F1F7}\u{1F1F4}", u: ["RON"], p: ["40"] },
  RS: { i: "RS", f: "\u{1F1F7}\u{1F1F8}", u: ["RSD"], p: ["381"] },
  RU: { i: "RU", f: "\u{1F1F7}\u{1F1FA}", u: ["RUB"], p: ["7"] },
  RW: { i: "RW", f: "\u{1F1F7}\u{1F1FC}", u: ["RWF"], p: ["250"] },
  SA: {
    i: "SA",
    f: "\u{1F1F8}\u{1F1E6}",
    u: ["SAR"],
    p: ["966"],
    d: [0, 1, 2, 3, 4, 5, 6],
    e: [5, 6],
    c: ["islamic-umalqura", "gregory", "islamic", "islamic-rgsa"]
  },
  SB: { i: "SB", f: "\u{1F1F8}\u{1F1E7}", u: ["SBD"], p: ["677"] },
  SC: { i: "SC", f: "\u{1F1F8}\u{1F1E8}", u: ["SCR"], p: ["248"] },
  SD: {
    i: "SD",
    f: "\u{1F1F8}\u{1F1E9}",
    u: ["SDG"],
    p: ["249"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  SE: { i: "SE", f: "\u{1F1F8}\u{1F1EA}", u: ["SEK"], p: ["46"] },
  SG: {
    i: "SG",
    f: "\u{1F1F8}\u{1F1EC}",
    u: ["SGD"],
    p: ["65"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory"]
  },
  SH: { i: "SH", f: "\u{1F1F8}\u{1F1ED}", u: ["SHP"], p: ["290"] },
  SI: { i: "SI", f: "\u{1F1F8}\u{1F1EE}", u: ["EUR"], p: ["386"] },
  SJ: { i: "SJ", f: "\u{1F1F8}\u{1F1EF}", u: ["NOK"], p: ["4779"] },
  SK: { i: "SK", f: "\u{1F1F8}\u{1F1F0}", u: ["EUR"], p: ["421"] },
  SL: { i: "SL", f: "\u{1F1F8}\u{1F1F1}", u: ["SLL"], p: ["232"] },
  SM: { i: "SM", f: "\u{1F1F8}\u{1F1F2}", u: ["EUR"], p: ["378"] },
  SN: { i: "SN", f: "\u{1F1F8}\u{1F1F3}", u: ["XOF"], p: ["221"] },
  SO: { i: "SO", f: "\u{1F1F8}\u{1F1F4}", u: ["SOS"], p: ["252"] },
  SR: { i: "SR", f: "\u{1F1F8}\u{1F1F7}", u: ["SRD"], p: ["597"] },
  SS: { i: "SS", f: "\u{1F1F8}\u{1F1F8}", u: ["SSP"], p: ["211"] },
  ST: { i: "ST", f: "\u{1F1F8}\u{1F1F9}", u: ["STN"], p: ["239"] },
  SV: {
    i: "SV",
    f: "\u{1F1F8}\u{1F1FB}",
    u: ["SVC", "USD"],
    p: ["503"],
    d: [0, 1, 2, 3, 4, 5, 6]
  },
  SX: { i: "SX", f: "\u{1F1F8}\u{1F1FD}", u: ["ANG"], p: ["1721"] },
  SY: {
    i: "SY",
    f: "\u{1F1F8}\u{1F1FE}",
    u: ["SYP"],
    p: ["963"],
    d: [6, 0, 1, 2, 3, 4, 5],
    e: [6, 5],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  SZ: { i: "SZ", f: "\u{1F1F8}\u{1F1FF}", u: ["SZL"], p: ["268"] },
  TC: { i: "TC", f: "\u{1F1F9}\u{1F1E8}", u: ["USD"], p: ["1649"] },
  TD: {
    i: "TD",
    f: "\u{1F1F9}\u{1F1E9}",
    u: ["XAF"],
    p: ["235"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  TF: { i: "TF", f: "\u{1F1F9}\u{1F1EB}", u: ["EUR"], p: ["262"] },
  TG: { i: "TG", f: "\u{1F1F9}\u{1F1EC}", u: ["XOF"], p: ["228"] },
  TH: {
    i: "TH",
    f: "\u{1F1F9}\u{1F1ED}",
    u: ["THB"],
    p: ["66"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["buddhist", "gregory"]
  },
  TJ: {
    i: "TJ",
    f: "\u{1F1F9}\u{1F1EF}",
    u: ["TJS"],
    p: ["992"],
    c: ["gregory", "islamic-civil", "islamic-tbla"]
  },
  TK: { i: "TK", f: "\u{1F1F9}\u{1F1F0}", u: ["NZD"], p: ["690"] },
  TL: { i: "TL", f: "\u{1F1F9}\u{1F1F1}", u: ["USD"], p: ["670"] },
  TM: {
    i: "TM",
    f: "\u{1F1F9}\u{1F1F2}",
    u: ["TMT"],
    p: ["993"],
    c: ["gregory", "islamic-civil", "islamic-tbla"]
  },
  TN: {
    i: "TN",
    f: "\u{1F1F9}\u{1F1F3}",
    u: ["TND"],
    p: ["216"],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  TO: { i: "TO", f: "\u{1F1F9}\u{1F1F4}", u: ["TOP"], p: ["676"] },
  TR: {
    i: "TR",
    f: "\u{1F1F9}\u{1F1F7}",
    u: ["TRY"],
    p: ["90"],
    c: ["gregory", "islamic-civil", "islamic-tbla"]
  },
  TT: { i: "TT", f: "\u{1F1F9}\u{1F1F9}", u: ["TTD"], p: ["1868"], d: [0, 1, 2, 3, 4, 5, 6] },
  TV: { i: "TV", f: "\u{1F1F9}\u{1F1FB}", u: ["AUD"], p: ["688"] },
  TW: {
    i: "TW",
    f: "\u{1F1F9}\u{1F1FC}",
    u: ["TWD"],
    p: ["886"],
    d: [0, 1, 2, 3, 4, 5, 6],
    c: ["gregory", "roc"]
  },
  TZ: { i: "TZ", f: "\u{1F1F9}\u{1F1FF}", u: ["TZS"], p: ["255"] },
  UA: { i: "UA", f: "\u{1F1FA}\u{1F1E6}", u: ["UAH"], p: ["380"] },
  UG: { i: "UG", f: "\u{1F1FA}\u{1F1EC}", u: ["UGX"], p: ["256"], e: [0] },
  UM: { i: "UM", f: "\u{1F1FA}\u{1F1F2}", u: ["USD"], p: ["1"], d: [0, 1, 2, 3, 4, 5, 6] },
  US: {
    i: "US",
    f: "\u{1F1FA}\u{1F1F8}",
    u: ["USD", "USN", "USS"],
    p: ["1"],
    d: [0, 1, 2, 3, 4, 5, 6]
  },
  UY: { i: "UY", f: "\u{1F1FA}\u{1F1FE}", u: ["UYI", "UYU"], p: ["598"] },
  UZ: {
    i: "UZ",
    f: "\u{1F1FA}\u{1F1FF}",
    u: ["UZS"],
    p: ["998"],
    c: ["gregory", "islamic-civil", "islamic-tbla"]
  },
  VA: { i: "VA", f: "\u{1F1FB}\u{1F1E6}", u: ["EUR"], p: ["379"] },
  VC: { i: "VC", f: "\u{1F1FB}\u{1F1E8}", u: ["XCD"], p: ["1784"] },
  VE: { i: "VE", f: "\u{1F1FB}\u{1F1EA}", u: ["VES"], p: ["58"], d: [0, 1, 2, 3, 4, 5, 6] },
  VG: { i: "VG", f: "\u{1F1FB}\u{1F1EC}", u: ["USD"], p: ["1284"] },
  VI: { i: "VI", f: "\u{1F1FB}\u{1F1EE}", u: ["USD"], p: ["1340"], d: [0, 1, 2, 3, 4, 5, 6] },
  VN: { i: "VN", f: "\u{1F1FB}\u{1F1F3}", u: ["VND"], p: ["84"] },
  VU: { i: "VU", f: "\u{1F1FB}\u{1F1FA}", u: ["VUV"], p: ["678"] },
  WF: { i: "WF", f: "\u{1F1FC}\u{1F1EB}", u: ["XPF"], p: ["681"] },
  WS: { i: "WS", f: "\u{1F1FC}\u{1F1F8}", u: ["WST"], p: ["685"], d: [0, 1, 2, 3, 4, 5, 6] },
  XK: {
    i: "XK",
    f: "\u{1F1FD}\u{1F1F0}",
    u: ["EUR"],
    p: ["377", "381", "383", "386"],
    c: ["gregory", "islamic-civil", "islamic-tbla"]
  },
  YE: {
    i: "YE",
    f: "\u{1F1FE}\u{1F1EA}",
    u: ["YER"],
    p: ["967"],
    d: [0, 1, 2, 3, 4, 5, 6],
    e: [5, 6],
    c: ["gregory", "islamic", "islamic-civil", "islamic-tbla"]
  },
  YT: { i: "YT", f: "\u{1F1FE}\u{1F1F9}", u: ["EUR"], p: ["262"] },
  ZA: { i: "ZA", f: "\u{1F1FF}\u{1F1E6}", u: ["ZAR"], p: ["27"], d: [0, 1, 2, 3, 4, 5, 6] },
  ZM: { i: "ZM", f: "\u{1F1FF}\u{1F1F2}", u: ["ZMW"], p: ["260"] },
  ZW: {
    i: "ZW",
    f: "\u{1F1FF}\u{1F1FC}",
    u: ["USD", "ZAR", "BWP", "GBP", "AUD", "CNY", "INR", "JPY"],
    p: ["263"],
    d: [0, 1, 2, 3, 4, 5, 6]
  }
};
Object.freeze(LIST);
const DEFAULT_PROPS = {
  i: "US",
  f: "\u{1F30E}",
  u: [],
  p: [],
  c: ["gregory"],
  d: [1, 2, 3, 4, 5, 6, 0],
  e: [6, 0]
};
Object.freeze(DEFAULT_PROPS);
function getProperties(countryCode) {
  return LIST[countryCode];
}

const country = {
  __proto__: null,
  DEFAULT_PROPS: DEFAULT_PROPS,
  LIST: LIST,
  getProperties: getProperties
};

function groupBy(arr, fn) {
  return arr.reduce((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return { ...prev, [groupKey]: group };
  }, {});
}
function minMaxNumber(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

const UNIT_LIST = [
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
  "year"
];
Object.freeze(UNIT_LIST);
const UNIT_DISPLAY_TYPES = ["narrow", "short", "long"];
Object.freeze(UNIT_DISPLAY_TYPES);
const FILE_SIZE_UNITS = {
  terabyte: 1099511627776,
  // 1024 × 1024 × 1024 x 1024
  gigabyte: 1073741824,
  // 1024 × 1024 × 1024
  megabyte: 1048576,
  // 1024 × 1024
  kilobyte: 1024
  // 1024 × 1024
};
Object.freeze(FILE_SIZE_UNITS);
const RELATIVE_TIME_DIVISION = [
  { amount: 60, unit: "seconds" },
  { amount: 60, unit: "minutes" },
  { amount: 24, unit: "hours" },
  { amount: 7, unit: "days" },
  { amount: 4.34524, unit: "weeks" },
  { amount: 12, unit: "months" },
  { amount: Number.POSITIVE_INFINITY, unit: "years" }
];
Object.freeze(RELATIVE_TIME_DIVISION);
const RELATIVE_TIMES_REFERENCE = {
  year: 31536e3,
  quarter: 7776e3,
  month: 2592e3,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
};
Object.freeze(RELATIVE_TIMES_REFERENCE);
class Formatter {
  constructor(locale) {
    this.locale = locale;
  }
  getNumberFormat(options) {
    return new Intl.NumberFormat(this.locale.baseName, options);
  }
  getPluralRules(options) {
    return new Intl.PluralRules(this.locale.baseName, options);
  }
  unitFormat(number, unit, per, unitDisplay = "long") {
    let u = unit;
    if (per) {
      u = `${unit}-per-${per}`;
    }
    return this.getNumberFormat({
      style: "unit",
      unit: u,
      unitDisplay
    }).format(number);
  }
  /**
   * @param percent float number between 0 until 1
   * @param unitDisplay
   * @returns {String}
   */
  percentHumanReadable(percent, unitDisplay = "short") {
    const p = Number.parseFloat((percent * 100).toFixed(2));
    return new Intl.NumberFormat(this.locale.baseName, {
      style: "unit",
      unit: "percent",
      unitDisplay
    }).format(minMaxNumber(p, 0, 100));
  }
  /**
   * @param bytes none zero byte size
   * @param unitDisplay
   * @returns {String}
   */
  fileSizeHumanReadable(bytes, unitDisplay = "short") {
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
      unitDisplay
    }).format(Number.parseFloat(byteX));
  }
  durationDates(date1, date2, unitDisplay = "long") {
    const diffSeconds = Math.abs(
      Math.round(date1.getTime() - date2.getTime()) / 1e3
    );
    for (const [u, value] of Object.entries(RELATIVE_TIMES_REFERENCE)) {
      if (diffSeconds >= value) {
        const number = Math.round(diffSeconds / value);
        return new Intl.NumberFormat(this.locale.baseName, {
          style: "unit",
          unit: u,
          unitDisplay
        }).format(number);
      }
    }
    return new Intl.NumberFormat(this.locale.baseName, {
      style: "unit",
      unit: "second",
      unitDisplay
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
  relativeTimeFormatterByUnit(compareDate, unit, referenceDate = /* @__PURE__ */ new Date(), style = "long", numeric = "auto") {
    const formatter = new Intl.RelativeTimeFormat(this.locale.baseName, {
      style,
      numeric
    });
    let validUnit = "years";
    if (RELATIVE_TIMES_REFERENCE[unit]) {
      validUnit = unit;
    }
    const pDurationSeconds = (compareDate.getTime() - referenceDate.getTime()) / 1e3;
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
  approximateRelativeTimeFormatter(compareDate, referenceDate = /* @__PURE__ */ new Date(), style = "long", numeric = "auto") {
    const formatter = new Intl.RelativeTimeFormat(this.locale.baseName, {
      style,
      numeric
    });
    let duration = (compareDate.getTime() - referenceDate.getTime()) / 1e3;
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

const formatter = {
  __proto__: null,
  FILE_SIZE_UNITS: FILE_SIZE_UNITS,
  Formatter: Formatter,
  RELATIVE_TIMES_REFERENCE: RELATIVE_TIMES_REFERENCE,
  RELATIVE_TIME_DIVISION: RELATIVE_TIME_DIVISION,
  UNIT_DISPLAY_TYPES: UNIT_DISPLAY_TYPES,
  UNIT_LIST: UNIT_LIST
};

const LANGUAGE_LIST_FILTER = ["popular", "all"];
Object.freeze(LANGUAGE_LIST_FILTER);
const LANGUAGE_LIST_ORDER = [
  "iso",
  // default
  "native"
];
Object.freeze(LANGUAGE_LIST_ORDER);
const COUNTRY_LIST_ORDER = [
  "iso",
  // default
  "native"
];
Object.freeze(COUNTRY_LIST_ORDER);
class Locale {
  constructor(localeString) {
    this.language = DEFAULT_LANGUAGE;
    this.isRTL = false;
    this.country = DEFAULT_PROPS;
    this.calendars = [];
    this.formatter = new Formatter(
      new Intl.Locale(DEFAULT_LANGUAGE).maximize()
    );
    this.locale = new Intl.Locale(
      new Intl.Locale(
        `${DEFAULT_LANGUAGE}-${DEFAULT_PROPS.i}`
      ).maximize()
    );
    try {
      this.locale = new Intl.Locale(new Intl.Locale(localeString).maximize());
    } catch {
    }
    this.setup();
  }
  isRTLLanguage() {
    return this.isRTL;
  }
  getTextDirection() {
    return this.isRTL ? "rtl" : "ltr";
  }
  setCountry(countryCode) {
    let locale = new Intl.Locale(
      new Intl.Locale(`${this.language}-${DEFAULT_PROPS.i}`).maximize()
    );
    try {
      locale = new Intl.Locale(
        new Intl.Locale(`${this.language}-${countryCode}`).maximize()
      );
    } catch {
    }
    this.locale = locale;
    this.setup();
    return this;
  }
  getLocale() {
    return this.locale;
  }
  toString() {
    return this.locale.baseName;
  }
  getLanguageList(filter = "popular", order = "iso") {
    let languageArray = [];
    if (typeof filter === "string") {
      if (filter === "all") {
        languageArray = LIST$1;
      } else if (filter === "popular") {
        languageArray = LIST_POPULAR;
      }
    } else if (Array.isArray(filter)) {
      languageArray = filter;
    }
    let result = [];
    for (const languageCode of languageArray) {
      if (!LIST$1.includes(languageCode)) {
        continue;
      }
      const name = new Intl.DisplayNames(this.locale, {
        type: "language"
      }).of(languageCode) || languageCode;
      const nativeName = new Intl.DisplayNames(languageCode, {
        type: "language"
      }).of(languageCode) || languageCode;
      const item = {
        id: languageCode,
        name,
        nativeName,
        rtl: LIST_RTL.includes(languageCode),
        direction: LIST_RTL.includes(languageCode) ? "rtl" : "ltr"
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
  getCountryList(order = "iso") {
    let result = [];
    for (const [countryCode, props] of Object.entries(LIST)) {
      const item = Object.assign(props, {
        name: new Intl.DisplayNames(this.locale, {
          type: "region"
        }).of(countryCode) || countryCode,
        nameEnglish: new Intl.DisplayNames("en", {
          type: "region"
        }).of(countryCode) || countryCode
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
    }
    return result;
  }
  setCalendar(c) {
    if (LIST$2.includes(c)) {
      this.calendars = this.calendars.map((i) => {
        i.selected = i.id === c;
        return i;
      });
    }
    return this;
  }
  getDefaultCalendar() {
    let calendar2 = this.calendars[0];
    const selected = this.calendars.find((i) => i.selected);
    if (selected) {
      calendar2 = selected;
    }
    return calendar2;
  }
  getCalendars() {
    return this.calendars;
  }
  getLanguage() {
    const name = new Intl.DisplayNames(this.locale, {
      type: "language"
    }).of(this.language) || this.language;
    const nativeName = new Intl.DisplayNames(this.language, {
      type: "language"
    }).of(this.language) || this.language;
    const item = {
      id: this.language,
      direction: this.isRTL ? "rtl" : "ltr",
      rtl: this.isRTL,
      name,
      nativeName
    };
    return item;
  }
  getCountry() {
    return this.country;
  }
  getFormatter() {
    return this.formatter;
  }
  setup() {
    this.language = this.locale.language && LIST$1.includes(this.locale.language) ? this.locale.language : DEFAULT_LANGUAGE;
    if (LIST_RTL.includes(this.language)) {
      this.isRTL = true;
    }
    const countryCode = this.locale.region && LIST[this.locale.region] ? this.locale.region : DEFAULT_PROPS.i;
    this.formatter = new Formatter(this.locale);
    this.country = Object.assign(
      {},
      DEFAULT_PROPS,
      LIST[countryCode]
    );
    const preferredCalendarList = this.country.c;
    const used = {};
    this.calendars = [];
    let i = 0;
    for (const c of preferredCalendarList) {
      const cal = {
        id: c,
        preferred: true,
        selected: i === 0,
        name: new Intl.DisplayNames(this.locale, {
          type: "calendar"
        }).of(c) || c
      };
      this.calendars.push(cal);
      used[c] = true;
      i += 1;
    }
    for (const c of LIST$2) {
      if (used[c]) {
        continue;
      }
      const cal = {
        id: c,
        preferred: false,
        selected: false,
        name: new Intl.DisplayNames(this.locale, {
          type: "calendar"
        }).of(c) || c
      };
      this.calendars.push(cal);
    }
  }
}

const locale = {
  __proto__: null,
  COUNTRY_LIST_ORDER: COUNTRY_LIST_ORDER,
  LANGUAGE_LIST_FILTER: LANGUAGE_LIST_FILTER,
  LANGUAGE_LIST_ORDER: LANGUAGE_LIST_ORDER,
  Locale: Locale
};

const MAX_SUPPORTED_YEAR_LIST = 500;
const MAX_DAYS_IN_YEAR = 500;
const MAX_DAYS_IN_MONTH = 40;
Object.freeze(MAX_SUPPORTED_YEAR_LIST);
Object.freeze(MAX_DAYS_IN_YEAR);
Object.freeze(MAX_DAYS_IN_MONTH);
const MONGODB_OBJECT_ID_FILL_TYPE = ["0", "f"];
Object.freeze(MONGODB_OBJECT_ID_FILL_TYPE);
const MIN_MONGODB_OBJECT_ID_DATE = /* @__PURE__ */ new Date(0);
const MAX_MONGODB_OBJECT_ID_DATE = new Date(
  Number.parseInt("ffffffff", 16) * 1e3
);
Object.freeze(MIN_MONGODB_OBJECT_ID_DATE);
Object.freeze(MAX_MONGODB_OBJECT_ID_DATE);
const DATE_TIME_SET_MODE = ["start", "middle", "end"];
Object.freeze(DATE_TIME_SET_MODE);
const NUMERIC_TOKENIZE = ["yyyy", "M", "d"];
Object.freeze(NUMERIC_TOKENIZE);
function dateToMongoDBObjectID(date, mode = "0") {
  if (date < MIN_MONGODB_OBJECT_ID_DATE) {
    return Math.ceil(MIN_MONGODB_OBJECT_ID_DATE.getTime() / 1e3).toString(16).padEnd(24, mode);
  } else if (date > MAX_MONGODB_OBJECT_ID_DATE) {
    return Math.floor(MAX_MONGODB_OBJECT_ID_DATE.getTime() / 1e3).toString(16).padEnd(24, mode);
  }
  if (mode === "0") {
    return Math.floor(date.getTime() / 1e3).toString(16).padEnd(24, mode);
  }
  return Math.ceil(date.getTime() / 1e3).toString(16).padEnd(24, mode);
}
function mongoDBObjectIDToDate(objectId) {
  if (/^[\da-f]{24}$/i.test(objectId)) {
    return new Date(
      Number.parseInt(objectId.toLowerCase().slice(0, 8), 16) * 1e3
    );
  }
  throw new Error("invalid object id");
}
function dateToUnixTime(date) {
  return Math.round(date.getTime() / 1e3);
}
function unixTimeToDate(unixTime) {
  return new Date(unixTime * 1e3);
}
function dateSetTime(date, mode = "start", utc = false) {
  let times = [0, 0, 0, 0];
  switch (mode.trim().toLowerCase()) {
    case "middle": {
      times = [12, 0, 0, 0];
      break;
    }
    case "end": {
      times = [23, 59, 59, 999];
      break;
    }
    default:
      times = [0, 0, 0, 0];
      break;
  }
  const setTimeFn = utc ? "setUTCHours" : "setHours";
  const d = new Date(date);
  d[setTimeFn](times[0], times[1], times[2], times[3]);
  return d;
}
class DateTimeCalendar {
  constructor(locale, date = /* @__PURE__ */ new Date()) {
    this.locale = locale;
    this.date = date;
  }
  getDate() {
    return this.date;
  }
  toString() {
    return this.date.toISOString();
  }
  setDate(date) {
    this.date = date;
    return this;
  }
  toLocaleDateString(options = {
    dateStyle: "long"
  }) {
    return this.date.toLocaleDateString(
      this.locale.getLocale().baseName,
      options
    );
  }
  toLocaleTimeString(options = {
    timeStyle: "long"
  }) {
    return this.date.toLocaleTimeString(
      this.locale.getLocale().baseName,
      options
    );
  }
  toLocaleString(options = {
    dateStyle: "long",
    timeStyle: "long"
  }) {
    return this.date.toLocaleString(this.locale.getLocale().baseName, options);
  }
  getAlternateCalendars(options = {
    dateStyle: "long"
  }) {
    const result = [];
    for (const c of this.locale.getCalendars()) {
      if (c.selected) {
        continue;
      }
      const [year, month, monthName, day] = this.format(
        "yyyy | M | MMMM | d",
        this.date,
        c.id
      ).split("|").map((i) => i.trim());
      const opt = Object.assign({}, options, {
        calendar: c.id
      });
      const dac = {
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
        )
      };
      result.push(dac);
    }
    return result;
  }
  format(format, date = this.date, outputCalendar = this.locale.getDefaultCalendar().id) {
    return luxon.DateTime.fromJSDate(date).reconfigure({
      locale: this.locale.getLocale().baseName,
      outputCalendar
    }).toFormat(format);
  }
  tokenize(token, date = this.date) {
    const parts = token.filter((i) => NUMERIC_TOKENIZE.includes(i)).join(" ").trim();
    if (parts.length > 0) {
      return luxon.DateTime.fromJSDate(date).reconfigure({
        outputCalendar: this.locale.getDefaultCalendar().id,
        locale: "en-US",
        numberingSystem: "latn"
      }).toFormat(parts).split(" ").map((p) => Number.parseInt(p, 10));
    }
    return [];
  }
  dateSetTime(mode = "start", utc = false) {
    this.date = dateSetTime(this.date, mode, utc);
    return this;
  }
  dateGetMongoDBObjectId(mode = "0") {
    return dateToMongoDBObjectID(this.date, mode);
  }
  yearList(before = -120, after = 20) {
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
    const result = [];
    for (let i = start; i <= end; i += 1) {
      const number = currentYear + i;
      if (number >= 1) {
        result.push({
          number,
          selected: number === currentYear,
          name: this.locale.getFormatter().getNumberFormat({
            useGrouping: false
          }).format(number)
        });
      }
    }
    return result;
  }
  yearSet(wantedYear) {
    const [currentYear, currentMonth, currentDay] = this.tokenize([
      "yyyy",
      "M",
      "d"
    ]);
    wantedYear = Math.round(wantedYear);
    if (wantedYear === currentYear) {
      return this;
    }
    if (wantedYear < 0 || Math.abs(wantedYear - currentYear) > MAX_SUPPORTED_YEAR_LIST) {
      return this;
    }
    let direction = 1;
    if (wantedYear < currentYear) {
      direction = -1;
    }
    let i = 0;
    while (true) {
      const dayChange = i * direction;
      const dt = luxon.DateTime.fromJSDate(this.date).plus({ day: dayChange });
      const d = dt.toJSDate();
      const [iterateYear, iterateMonth, iterateDay] = this.tokenize(
        ["yyyy", "M", "d"],
        d
      );
      if (iterateYear === wantedYear && iterateMonth === currentMonth && iterateDay === currentDay) {
        this.date = d;
        return this;
      }
      i += 1;
    }
  }
  yearShift(next) {
    const [currentYear] = this.tokenize(["yyyy"]);
    return this.yearSet(next ? currentYear + 1 : currentYear - 1);
  }
  monthList() {
    const [currentYear, currentMonth, currentDay] = this.tokenize(
      ["yyyy", "M", "d"],
      this.date
    );
    const result = [];
    const used = {};
    for (let i = -MAX_DAYS_IN_YEAR; i <= MAX_DAYS_IN_YEAR; i += 1) {
      const dt = luxon.DateTime.fromJSDate(this.date).plus({ day: i });
      const jsDate = dt.toJSDate();
      const [iterateYear, titleInt] = this.tokenize(["yyyy", "M"], jsDate);
      const nameNumber = this.format("M", jsDate);
      if (iterateYear === currentYear && !used[nameNumber]) {
        result.push({
          date: jsDate,
          selected: titleInt === currentMonth,
          name: this.format("MMMM", jsDate),
          nameNumber,
          number: titleInt
        });
        used[nameNumber] = true;
      }
    }
    return result;
  }
  monthShift(next) {
    const [currentYear, currentMonth, currentDay] = this.tokenize(
      ["yyyy", "M", "d"],
      this.date
    );
    for (let i = -MAX_DAYS_IN_MONTH; i <= MAX_DAYS_IN_MONTH; i += 1) {
      const dt = luxon.DateTime.fromJSDate(this.date).plus({ day: i });
      const jsDate = dt.toJSDate();
      const [iterateYear, iterateMonth, iterateDay] = this.tokenize(
        ["yyyy", "M", "d"],
        jsDate
      );
      if (iterateDay !== currentDay) {
        continue;
      }
      if (next === true && (iterateYear > currentYear || iterateMonth > currentMonth)) {
        return this.setDate(jsDate);
      } else if (next === false && (iterateYear < currentYear || iterateMonth < currentMonth)) {
        return this.setDate(jsDate);
      }
    }
    return this;
  }
  dayShift(next = true) {
    return this.setDate(
      luxon.DateTime.fromJSDate(this.date).plus({
        day: next ? 1 : -1
      }).toJSDate()
    );
  }
  /**
   * @param alternateCalendars array of calendars name or number of addition calendars based on locale
   */
  daysOfMonthList() {
    const [currentYear, currentMonth, currentDay] = this.tokenize(
      ["yyyy", "M", "d"],
      this.date
    );
    const result = [];
    const weekEnds = this.locale.getCountry().e;
    for (let i = -MAX_DAYS_IN_MONTH; i <= MAX_DAYS_IN_MONTH; i += 1) {
      const dt = luxon.DateTime.fromJSDate(this.date).plus({ day: i });
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
          number: titleInt
        });
      }
    }
    return result;
  }
  /**
   * @param alternateCalendars array of calendars name or number of addition calendars based on locale
   */
  daysOfMonthWeekList() {
    const dayList = this.daysOfMonthList();
    const weekDays = this.locale.getCountry().d;
    const [weekStartDay] = weekDays;
    const weekNames = {};
    const days = [];
    let weekNumber = 0;
    for (const day of dayList) {
      if (!weekNames[day.weekDay]) {
        const weekHeader = {
          short: this.format("EEE", day.date),
          long: this.format("EEEE", day.date),
          narrow: this.format("EEEEE", day.date),
          weekEnd: day.weekEnd
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
        weekNumber
      });
    }
    const result = {
      header: [],
      weeks: []
    };
    for (const wDay of weekDays) {
      result.header.push(weekNames[wDay]);
    }
    for (const iterateWeekProps of Object.values(
      groupBy(days, (i) => i.weekNumber)
    )) {
      const currentWeek = [
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      ];
      for (const processDay of iterateWeekProps) {
        const weekDayIndex = weekDays.indexOf(
          processDay.date.getDay()
        );
        const dayProps = {
          date: processDay.date,
          utcDate: processDay.utcDate,
          weekDay: processDay.weekDay,
          weekEnd: processDay.weekEnd,
          selected: processDay.selected,
          name: processDay.name,
          number: processDay.number,
          weekNumber
        };
        currentWeek[weekDayIndex] = dayProps;
      }
      result.weeks.push(currentWeek);
    }
    return result;
  }
}

const dateTime = {
  __proto__: null,
  DATE_TIME_SET_MODE: DATE_TIME_SET_MODE,
  DateTimeCalendar: DateTimeCalendar,
  MAX_DAYS_IN_MONTH: MAX_DAYS_IN_MONTH,
  MAX_DAYS_IN_YEAR: MAX_DAYS_IN_YEAR,
  MAX_MONGODB_OBJECT_ID_DATE: MAX_MONGODB_OBJECT_ID_DATE,
  MAX_SUPPORTED_YEAR_LIST: MAX_SUPPORTED_YEAR_LIST,
  MIN_MONGODB_OBJECT_ID_DATE: MIN_MONGODB_OBJECT_ID_DATE,
  MONGODB_OBJECT_ID_FILL_TYPE: MONGODB_OBJECT_ID_FILL_TYPE,
  NUMERIC_TOKENIZE: NUMERIC_TOKENIZE,
  dateSetTime: dateSetTime,
  dateToMongoDBObjectID: dateToMongoDBObjectID,
  dateToUnixTime: dateToUnixTime,
  mongoDBObjectIDToDate: mongoDBObjectIDToDate,
  unixTimeToDate: unixTimeToDate
};

function getIdentifier() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

const timezone = {
  __proto__: null,
  getIdentifier: getIdentifier
};

function isSupported() {
  return typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined" && typeof Intl.DateTimeFormat !== "undefined" && typeof Intl.DateTimeFormat.prototype.formatToParts !== "undefined" && typeof Intl.DateTimeFormat.prototype.resolvedOptions !== "undefined" && typeof Intl.NumberFormat !== "undefined" && typeof Intl.PluralRules !== "undefined" && typeof Intl.DisplayNames !== "undefined" && typeof Intl.ListFormat !== "undefined" && typeof Intl.Locale !== "undefined" && typeof Intl.supportedValuesOf !== "undefined" && typeof Intl.getCanonicalLocales !== "undefined" && typeof Intl.RelativeTimeFormat !== "undefined" && new Intl.Locale("fa").maximize().region === "IR" && new Intl.DisplayNames("en-US", { type: "region" }).of("IR") === "Iran" && new Intl.DisplayNames("fa-IR", { type: "calendar" }).of("persian") === "\u062A\u0642\u0648\u06CC\u0645 \u0647\u062C\u0631\u06CC \u0634\u0645\u0633\u06CC" && new Intl.DisplayNames("de-DE", { type: "script" }).of("Arab") === "Arabisch" && new Intl.DisplayNames("fr-FR", { type: "language" }).of("de") === "allemand" && new Intl.DisplayNames("ar-UE", { type: "currency" }).of("EUR") === "\u064A\u0648\u0631\u0648" && Intl.getCanonicalLocales("EN-US").includes("en-US") && Intl.supportedValuesOf("calendar").includes("persian");
}

exports.calendar = calendar;
exports.country = country;
exports.dateTime = dateTime;
exports.formatter = formatter;
exports.isSupported = isSupported;
exports.language = language;
exports.locale = locale;
exports.timezone = timezone;
