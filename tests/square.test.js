import("../src/square");

test("doit retouner un nombre", () => {
    expect(square(2)).toBe(4);
});

test("", () => {
    expect(square(-10).toBe(100));
});

test("", () => {
    expect(square("l").toThrow("is not a number"));
});

export default square;
