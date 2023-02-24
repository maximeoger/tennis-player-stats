import * as utils from "./utils";

const testList = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
  { id: 5, name: "d" },
];

describe("selectTwoRandomPlayers", () => {
  test("should return an array with two different items", () => {
    const selection = utils.selectTwoRandomPlayers(testList);
    expect(selection[0]).not.toMatchObject(selection[1]);
  });
});

describe("formatHeight", () => {
  test("should format height", () => {
    const formattedHeight = utils.formatHeight(145);
    expect(formattedHeight).toMatch(/\b\d{1,2}m\d{1,2}\b/);
    expect(formattedHeight).toEqual("1m45");
  });
});

describe("formatWeight", () => {
  test("should format weight", () => {
    const formattedWeight = utils.formatWeight(83000);
    expect(formattedWeight).toMatch(/\b\d{1,3}Kg\b/);
    expect(formattedWeight).toEqual("83Kg");
  });
});

describe("formatAge", () => {
  const formattedAge = utils.formatAge(29);
  expect(formattedAge).toMatch(/\b\d{1,2} ans\b/);
  expect(formattedAge).toEqual("29 ans");
});
