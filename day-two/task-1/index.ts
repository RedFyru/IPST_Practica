function countFilledValues(data: Record<string, unknown>): number {
    let sum: number = 0;
    const values = Object.values(data);
    values.forEach(value => {
        if (value !== null && value !== undefined && value !== "") {
            sum += 1;
        }
    });
    return sum;
}

const data = {
    name: "Alice",
    age: 25,
    address: "",
    phone: undefined,
    email: "[alice@example.com](<mailto:alice@example.com>)",
    notes: null,
};

const result = countFilledValues(data);
console.log(result);
