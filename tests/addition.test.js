import("../src/addition");

test("deux plus deux font 4", () => {
    expect(addition(2 + 2)).toBe(4);
});

test("renvoie une erreur quand on lui envoie un NaN", () => {
    expect(addition("l" + 2)).toThrow("An argument isNaN");
});
