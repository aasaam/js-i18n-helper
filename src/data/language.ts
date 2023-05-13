/**
 * Text direction
 */
export const TEXT_DIRECTIONS = ["rtl", "ltr"] as const;
export type TextDirections = (typeof TEXT_DIRECTIONS)[number];
Object.freeze(TEXT_DIRECTIONS);

/**
 * Default for fallback
 */
export const DEFAULT_TEXT_DIRECTION: TextDirections = "ltr" as const;
Object.freeze(DEFAULT_TEXT_DIRECTION);

export const DEFAULT_LANGUAGE = "en" as const;
Object.freeze(DEFAULT_LANGUAGE);

/**
 * List of language ISO code that support in JavaScript ecosystem
 */
export const LIST: string[] = [
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
  "zza",
];
Object.freeze(LIST);

/**
 * List of popular languages ISO code
 * Must supported with full information in browsers
 */
export const LIST_POPULAR: string[] = [
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
  "zu",
];
Object.freeze(LIST_POPULAR);

/**
 * List of right to left languages ISO code
 */
export const LIST_RTL: string[] = [
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
  "ur",
];
Object.freeze(LIST_RTL);
