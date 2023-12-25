type Guard<T> = (data: T) => string[]

export function guardAgainst<T>(...guards: [error: string, check: (data: T) => boolean][]): Guard<T> {
    return (data: T) => guards.filter(guard => guard[1](data)).map(guard => guard[0])
}

export function validated<T>(guard: Guard<T>, data: T) {
    return guard(data).length == 0 ? data : undefined
}

export const emailRegex = /(?:[a-z0-9]+[_\-.]*?)*[a-z0-9]+@[a-z0-9\-]+\.[a-z]{2,}/
export const phoneRegex = /\+[0-9]+/

