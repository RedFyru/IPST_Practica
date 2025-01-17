function breakingTheAmountIntoBills(sum: number): Record<number, number> {
    let banknote: number[] = [100, 50, 10, 5, 2, 1];
    let result: Record<number, number> = {};
    for (let i = 0; i < banknote.length && sum != 0; i++) {
        let countOfBanknotes: number = Math.floor(sum / banknote[i]);
        if (countOfBanknotes != 0) {
            result[banknote[i]] = countOfBanknotes;
            sum = sum - countOfBanknotes * banknote[i];
        }
    }
    return result;
}

console.log(breakingTheAmountIntoBills(252))
