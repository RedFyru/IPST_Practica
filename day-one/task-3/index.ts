function indexOF(a: string, b: string) {
    for (let i = 0; i <= a.length - b.length; i++) {
        let match = true;
        for (let j = 0; j < b.length; j++) {
            if (a[i + j] !== b[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }
    return -1;
}

console.log(indexOF('I go home today', 'home'));
