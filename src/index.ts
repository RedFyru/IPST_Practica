// function identicalLetters(a: string, b: string) {
//     let res: string = '';
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] == b[j] && !res.includes(a[i])) {
//                 res += a[i];
//             }
//         }
//     }
//     console.log(res);
// }
//
// identicalLetters('Hello', 'Hello world');
//
//
// function longestWord(a: string){
//     let words: string[] = [];
//     let currentWord: string = '';
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == " ") {
//             if (currentWord) {
//                 words.push(currentWord);
//                 currentWord = '';
//             }
//         } else {
//             currentWord += a[i];
//         }
//     }
//     if (currentWord) {
//         words.push(currentWord);
//     }
//     let longest = words[0];
//     for (let j = 0; j < words.length; j++) {
//         if (words[j].length > longest.length) {
//             longest = words[j];
//         }
//     }
//     console.log(longest);
// }
//
// longestWord('Hello I am Gleb');
//
//
// function indexOF(a: string, b: string) {
//     for (let i = 0; i <= a.length - b.length; i++) {
//         let match = true;
//         for (let j = 0; j < b.length; j++) {
//             if (a[i + j] !== b[j]) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) {
//             return i;
//         }
//     }
//     return -1;
// }
//
// console.log(indexOF('I go home today', 'home'));
//
//
// function runLengthEncoding(a: string) {
//     let sum: number = 1;
//     let Encoding: string = "";
//     for (let i = 0; i < a.length; ++i) {
//         if (a[i] == a[i + 1]) {
//             sum += 1;
//         } else {
//             Encoding += (`${a[i]}-${sum}`);
//             sum = 1;
//         }
//     }
//     return Encoding;
// }
//
// function runLengthDecoding(Encoding: string) {
//     let Decoding: string = "";
//     let numbers: number[] = [];
//     let letters: string[] = [];
//     let EncodingStringWithOutDashes = Encoding.replace(/([a-zA-Z])-(\d+)/g, '$1$2');
//     for (let i = 0; i < EncodingStringWithOutDashes.length; i++) {
//         if (i % 2 == 0) {
//             letters.push(EncodingStringWithOutDashes[i]);
//         } else {
//             numbers.push(Number(EncodingStringWithOutDashes[i]))
//         }
//     }
//     for (let i = 0; i < letters.length; i++) {
//         Decoding += letters[i].repeat(numbers[i]);
//     }
//     return Decoding;
// }
//
// const Encoding = runLengthEncoding("Hello");
// console.log("Encoded:", Encoding);
//
// const Decoding = runLengthDecoding(Encoding);
// console.log("Decoding:", Decoding);
