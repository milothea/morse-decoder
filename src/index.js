const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
    const getMorseCode = (code) =>
        code.replaceAll('11', '-')
            .replaceAll('10', '.')
            .replaceAll(/[0]/g, '');
    const space = '**********';
    const words = expr.split(space).map((word) => word.match(/.{1,10}/g).map((code) => getMorseCode(code)));
    const result = [];

    words.forEach((word) => {
        let decodedWord = '';

        word.forEach((code) => {
            decodedWord += MORSE_TABLE[code];
        });

        result.push(decodedWord);
    });

    return result.join(' ');
}

module.exports = {
    decode
}