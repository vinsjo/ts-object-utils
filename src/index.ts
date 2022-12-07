export function objectKeys<
    K extends keyof T,
    T = Record<string | number | symbol, unknown>
>(obj: T): K[] {
    if (!(obj instanceof Object)) return [];
    return Object.keys(obj) as K[];
}

export function objectEntries<
    K extends keyof T,
    T = Record<string | number | symbol, unknown>
>(obj: T): [K, T[K]][] {
    if (!(obj instanceof Object)) return [];
    return Object.entries(obj) as [K, T[K]][];
}

export function objectValues<
    K extends keyof T,
    T = Record<string | number | symbol, unknown>
>(obj: T): T[K][] {
    if (!(obj instanceof Object)) return [];
    return Object.values(obj) as T[K][];
}
