import { Config } from "./types/config.ts";
import getCharKinds from "./helpers/get-char-kinds.ts";
import getEmptyIndexes from "./helpers/get-empty-indexes.ts";
import getRandomArrItem from "./helpers/get-random-arr-item.ts";

/**
 * Class to instance a new password generator.
 */
export class GeneratePassword {
    private config: Config;

    constructor(config: Config) {
        this.config = config;
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
}
