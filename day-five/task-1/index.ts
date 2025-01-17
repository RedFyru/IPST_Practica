type ResultType = {
    playerChoice: string;
    computerChoice: string;
    winnerMessage: string;
}

function game(playerValue:string): ResultType {
    const gameValue: string[] = ["Камень", "Ножницы", "Бумага"];
    let res: number = 0
    let target: ResultType = {} as ResultType
    let computerValue = Math.floor(Math.random() * 3);
    if (!gameValue.includes(playerValue)) {
        throw new Error("Invalid value");
    }
    for (let i = 0; i < gameValue.length; i++) {
        if (playerValue === gameValue[i]) {
            res = i - computerValue;
            if (res == -1 || res == 2) {
                target = {
                    playerChoice: gameValue[i],
                    computerChoice: gameValue[computerValue],
                    winnerMessage: "Победил игрок"
                };
            } else if (res == 1 || res == -2) {
                target = {
                    playerChoice: gameValue[i],
                    computerChoice: gameValue[computerValue],
                    winnerMessage: "Победил компьютер"
                };
            } else {
                target = {
                    playerChoice: gameValue[i],
                    computerChoice: gameValue[computerValue],
                    winnerMessage: "Ничья"
                };
            }
        }
    }
    return target;
}

try {
    const endGame = game("Камень");
    console.log(endGame);
} catch (error) {
    console.error(error);
}
