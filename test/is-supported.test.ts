import { expect, it, describe } from "vitest";

import { isSupported } from "../src";

describe("is supported", () => {
  it("is supported", () => {
    expect(isSupported()).toBe(true);
  });
});
