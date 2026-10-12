import { Config } from "./types/config.ts";
import getCharKinds from "./helpers/get-char-kinds.ts";
import getEmptyIndexes from "./helpers/get-empty-indexes.ts";
import getRandomArrItem from "./helpers/get-random-arr-item.ts";

/**
 * Class to instance a new password generator.
 */
export class GeneratePassword {
    private config: Config;
    private minLength = 4;

    constructor(config: Config) {
        this.config = config;

        if (!this.isValidLength()) {
            const errMsg = `Password length less than minimum required of ${this.minLength} characters`;

            throw new RangeError(errMsg);
        }

        if (!this.isAnyKindSet()) {
            const errMsg = `At least one character kind must be set to be included in the generated password.`;

            throw new Error(errMsg);
        }
    }

    /**
     *
     * @returns Created password including characters passed in Config.
     */
    public build(): string {
        const password = new Array(this.config.length).fill(null);
        const charKinds = getCharKinds(this.config);

        let charKindIndex = 0;

        for (let i = 0; i < password.length; i++) {
            const emptyIndexes = getEmptyIndexes(password);
            const randomIndex = getRandomArrItem(emptyIndexes);

            const charKind = charKinds[charKindIndex];
            const randomChar = getRandomArrItem<string | number>(charKind);

            password[randomIndex] = randomChar;

            if (charKindIndex < charKinds.length - 1) {
                charKindIndex += 1;
            } else {
                charKindIndex = 0;
            }
        }

        return password.join("");
    }

    /**
     * Checks if the configured password length is
     * valid
     */
    private isValidLength(): boolean {
        /*
            value follows the quantity of kinds
            of characters that could be included
            on the generated password.

            if all four kinds must be included,
            the password length cannot be less
            than four as not all kinds would be
            included.
        */
        return this.config.length >= this.minLength;
    }

    /**
     * Checks if at least one character kind
     * was set to be included in the generated
     * password.
     */
    private isAnyKindSet(): boolean {
        const { lowercase, uppercase, numbers, symbols } = this.config;

        return lowercase || uppercase || numbers || symbols;
    }
}
