/**
 * Returns a numeric array indicating the empty indexes.
 * @param arr An array of a generic type.
 * @returns A numeric array indicating the empty indexes.
 */
export default function getEmptyIndexes<T>(arr: T[]): number[] {
    if (!Array.isArray(arr)) {
        throw new TypeError("Expect an array as argument.");
    }

    if (!arr.length) {
        throw new RangeError("Expect an array length not equals to zero.");
    }

    const emptyIndexes = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (item === null || item === undefined) {
            emptyIndexes.push(i);
        }
    }

    return emptyIndexes;
}
