/**
 * Configuration needed for password generation.
 *
 * Each boolean fields indicate if the corresponding
 * kind of char should be included in the generated
 * password.
 *
 * The length field indicate the generated password length.
 */
export interface Config {
    lowercase: boolean;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
    length: number;
}
