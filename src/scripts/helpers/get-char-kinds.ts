import { Config } from "../types/config.ts";

/**
 * Returns an array of char kind's arrays based on
 * the given configuration object.
 * @param config Configuration that indicates what kind of char should be
 * included in the generated password.
 * @returns An array of char kind's arrays
 */
export default function getCharKinds(config: Config): (string[] | number[])[] {
    const chars = [];

    if (config.lowercase) {
        chars.push(getLowercase());
    }

    if (config.uppercase) {
        chars.push(getUppercase());
    }

    if (config.numbers) {
        chars.push(getNumbers());
    }

    if (config.symbols) {
        chars.push(getSymbols());
    }

    return chars;
}

function getSymbols(): Array<string> {
    return "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
}

function getNumbers(): Array<number> {
    const numbers: Array<number> = [];

    for (let i = 0; i < 10; i++) {
        numbers.push(i);
    }

    return numbers;
}

function getLowercase(): Array<string> {
    return getLetters();
}

function getUppercase(): Array<string> {
    return getLetters().map((letter) => letter.toUpperCase());
}

function getLetters(): Array<string> {
    const lowercaseACodePoint = 97;

    const codePoints = new Array(26)
        .fill(lowercaseACodePoint)
        .map((codePoint, index) => codePoint + index);

    const letters = codePoints.map((codePoint) => {
        return String.fromCodePoint(codePoint);
    });

    return letters;
}
