function square(x) {
    if (isNaN(x)) {
        throw new Error("x is not a number");
    }
    return x * x;
}

export default square;
