import _ from "lodash";

/**
 * Return a random item from an array.
 * @param arr An Array of a generic type.
 * @returns A random item from the given array.
 */
export default function getRandomArrItem<T>(arr: T[]): T {
    if (!Array.isArray(arr)) {
        throw new TypeError("Expect an array as argument.");
    }

    if (!arr.length) {
        throw new RangeError("Expect an array length not equals to zero.");
    }

    const randomIndex = _.random(0, arr.length - 1);
    const randomItem = arr[randomIndex];

    return randomItem;
}
