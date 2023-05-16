import {
  calendar,
  country,
  dateTime,
  formatter,
  isSupported,
  language,
  locale,
  timezone,
} from "../dist/index.mjs";

import {
  isCalendarSupported,
  isCountrySupported,
  isLanguageFullySupported,
  isLanguageSupported,
} from "./helpers.js";

mocha.setup("bdd");

describe("browser support", function () {
  it("supported", function () {
    chai.expect(isSupported()).to.equal(true);
  });
});

describe("dateTime", function () {
  it("format", function () {
    const dt = new dateTime.DateTimeCalendar(new locale.Locale("fa"));
    chai.assert.ok(dt.format("yyyy MM dd"));
  });
});

describe("timezone", function () {
  it("getIdentifier", function () {
    chai.assert.ok(timezone.getIdentifier());
  });
});

describe("formatter", () => {
  it("formatter", () => {
    const f = new formatter.Formatter(new Intl.Locale("fa").maximize());
    const num = 999;
    for (const u of formatter.UNIT_LIST) {
      chai.assert.ok(f.unitFormat(num, u));
      for (const p of formatter.UNIT_LIST) {
        chai.assert.ok(f.unitFormat(num, u, p));
      }
    }
  });
});

describe("locale", function () {
  it("fa", function () {
    const l = new locale.Locale("fa");

    chai.expect(l.getLanguage().id).to.equal("fa");
    chai.expect(l.getCountry().i).to.equal("IR");
    chai.expect(l.getCountry().d).to.deep.equal([6, 0, 1, 2, 3, 4, 5]);
    chai.expect(l.getCountry().e).to.deep.equal([5]);

    chai.assert.ok(l.getCalendars());
    chai.assert.ok(l.getCountryList());
    chai.assert.ok(l.getCountryList("iso"));
    chai.assert.ok(l.getCountryList("native"));

    chai.assert.ok(l.getLanguageList());
    chai.assert.ok(l.getLanguageList(["fa"], "iso"));
    chai.assert.ok(l.getLanguageList("all", "native"));
  });
});

describe("data", function () {
  describe(`languages all: (${language.LIST.length})`, function () {
    it(`test all language for valid locale supported`, function () {
      for (const lang of language.LIST) {
        chai.expect(isLanguageSupported(lang)).to.equal(true);
      }
    });
    it("test rtl list", function () {
      for (const lang of language.LIST_RTL) {
        chai.expect(language.LIST.includes(lang)).to.equal(true);
      }
    });
    it("test popular list", function () {
      for (const lang of language.LIST_POPULAR) {
        chai.expect(language.LIST.includes(lang)).to.equal(true);
      }
    });
  });

  describe(`languages popular: (${language.LIST_POPULAR.length})`, function () {
    for (const lang of language.LIST_POPULAR) {
      it(`test "${lang}" for full supported`, function () {
        chai.expect(isLanguageFullySupported(lang)).to.equal(true);
      });
    }
  });

  describe(`calendar: (${calendar.LIST.length})`, function () {
    for (const cal of calendar.LIST) {
      it(`test ${cal}`, function () {
        chai.expect(isCalendarSupported(cal)).to.equal(true);
      });
    }
  });

  describe(`country: (${Object.values(country.LIST).length})`, function () {
    for (const props of Object.values(country.LIST)) {
      it(`test  ${props.f} "${props.i}"`, function () {
        chai.expect(isCountrySupported(props.i)).to.equal(true);
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (isSupported()) {
    document.querySelector("#not-supported").remove();
  }
});
mocha.checkLeaks();
mocha.run();

// 2023-05-16T09:45:57
