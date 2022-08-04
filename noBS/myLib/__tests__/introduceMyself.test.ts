import { Set, introduceMyself } from "../src/index";

describe("introduceMyself", () => {
  it("should introduce me", () => {
    expect(introduceMyself("Sid")).toEqual("Hello Sid");
  });
});

describe("Set", () => {
  it("should return true", () => {
    const set = new Set();
    expect(set.isEmpty()).toEqual(true);
  });

  it("should not be empty after you add a string", () => {
    const set = new Set();
    set.add("test");
    expect(set.isEmpty()).toBe(false);
  });

  it("should return whether or not a certain string is in the set", () => {
    const set = new Set();
    set.add("Sid");
    expect(set.contains("Sid")).toBe(true);
  });

  it("should only contain strings that I have added", () => {
    const set = new Set();
    set.add("Sid");
    expect(set.contains("Ash")).toBe(false);
  });

  it("should remove a string when I call remove", () => {
    const set = new Set();
    set.add("Sid");
    expect(set.contains("Sid")).toBe(true);
    set.remove("Sid");
    expect(set.contains("Sid")).toBe(false);
    expect(set.isEmpty()).toBe(true);
  });
});
