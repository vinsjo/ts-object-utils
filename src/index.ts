export function objectKeys<T = Record<string | number | symbol, unknown>>(
    obj: T
): Array<keyof T> {
    if (!(obj instanceof Object)) return [];
    return Object.keys(obj) as Array<keyof T>;
}

export function objectEntries<T = Record<string | number | symbol, unknown>>(
    obj: T
): Array<[keyof T, T[keyof T]]> {
    if (!(obj instanceof Object)) return [];
    return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}

export function objectValues<T = Record<string | number | symbol, unknown>>(
    obj: T
): T[keyof T][] {
    if (!(obj instanceof Object)) return [];
    return Object.values(obj) as T[keyof T][];
}

export function pick<T = Record<string | number | symbol, unknown>>(
    obj: T,
    ...keys: Array<keyof T>
): Pick<T, typeof keys[number]> {
    return objectEntries(obj)
        .filter(([key]) => keys.includes(key))
        .reduce((output, [key, value]) => {
            return { ...output, [key]: value };
        }, {}) as Pick<T, typeof keys[number]>;
}
export function omit<T = Record<string | number | symbol, unknown>>(
    obj: T,
    ...keys: Array<keyof T>
): Omit<T, typeof keys[number]> {
    return objectEntries(obj)
        .filter(([key]) => !keys.includes(key))
        .reduce((output, [key, value]) => {
            return { ...output, [key]: value };
        }, {}) as Pick<T, typeof keys[number]>;
}
