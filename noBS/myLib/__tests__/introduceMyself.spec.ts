import { Set, introduceMyself } from "../src/index";

describe("introduceMyself", () => {
  it("should introduce me", () => {
    expect(introduceMyself("Sid")).toEqual("Hello Sid");
  });
});

describe("Set", () => {
  it("should return true", () => {
    const set = Set;
    expect(set.isEmpty).toEqual(true);
  });
});
