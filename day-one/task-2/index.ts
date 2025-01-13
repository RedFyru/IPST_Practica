function longestWord(a: string){
    let words: string[] = [];
    let currentWord: string = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] == " ") {
            if (currentWord) {
                words.push(currentWord);
                currentWord = '';
            }
        } else {
            currentWord += a[i];
        }
    }
    if (currentWord) {
        words.push(currentWord);
    }
    let longest = words[0];
    for (let j = 0; j < words.length; j++) {
        if (words[j].length > longest.length) {
            longest = words[j];
        }
    }
    console.log(longest);
}

longestWord('Hello I am Gleb');
