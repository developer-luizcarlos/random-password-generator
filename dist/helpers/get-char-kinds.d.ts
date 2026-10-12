import { Config } from "../types/config.ts";
/**
 * Returns an array of char kind's arrays based on
 * the given configuration object.
 * @param config Configuration that indicates what kind of char should be
 * included in the generated password.
 * @returns An array of char kind's arrays
 */
export default function getCharKinds(config: Config): (string[] | number[])[];
