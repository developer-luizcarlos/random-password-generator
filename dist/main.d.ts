import { Config } from "./types/config.ts";
/**
 * Class to instance a new password generator.
 */
export declare class GeneratePassword {
    private config;
    private minLength;
    constructor(config: Config);
    /**
     *
     * @returns Created password including characters passed in Config.
     */
    build(): string;
    /**
     * Checks if the configured password length is
     * valid
     */
    private isValidLength;
    /**
     * Checks if at least one character kind
     * was set to be included in the generated
     * password.
     */
    private isAnyKindSet;
}
