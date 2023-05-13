import { expect, it, describe } from "vitest";

import { timezone } from "../src";

describe("timezone", () => {
  it("timezone", () => {
    expect(timezone.getIdentifier()).toBeTruthy();
  });
});
