/**
 * Returns a numeric array indicating the empty indexes.
 * @param arr An array of a generic type.
 * @returns A numeric array indicating the empty indexes.
 */
export default function getEmptyIndexes<T>(arr: T[]): number[] {
    const emptyIndexes = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (item === null || item === undefined) {
            emptyIndexes.push(i);
        }
    }

    return emptyIndexes;
}
