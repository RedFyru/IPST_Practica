function identicalLetters(a: string, b: string) {
    let res: string = '';
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j] && !res.includes(a[i])) {
                res += a[i];
            }
        }
    }
    console.log(res);
}

identicalLetters('Hello', 'Hello world');
