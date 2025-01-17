function runLengthEncoding(a: string) {
    let sum: number = 1;
    let Encoding: string = "";
    for (let i = 0; i < a.length; ++i) {
        if (a[i] == a[i + 1]) {
            sum += 1;
        } else {
            Encoding += (`${a[i]}-${sum}`);
            sum = 1;
        }
    }
    return Encoding;
}

function runLengthDecoding(Encoding: string) {
    let Decoding: string = "";
    let numbers: number[] = [];
    let letters: string[] = [];
    let EncodingStringWithOutDashes = Encoding.replace(/([a-zA-Z])-(\d+)/g, '$1$2');
    for (let i = 0; i < EncodingStringWithOutDashes.length; i++) {
        if (i % 2 == 0) {
            letters.push(EncodingStringWithOutDashes[i]);
        } else {
            numbers.push(Number(EncodingStringWithOutDashes[i]));
        }
    }
    for (let i = 0; i < letters.length; i++) {
        Decoding += letters[i].repeat(numbers[i]);
    }
    return Decoding;
}

const Encoding = runLengthEncoding("Hello");
console.log("Encoded:", Encoding);

const Decoding = runLengthDecoding(Encoding);
console.log("Decoding:", Decoding);
