import { writable, type Readable, type Writable, derived } from "svelte/store";

export type FormStep = 'personal' 
                     | 'contacts' 
                     | 'education'
                     | 'courses'
                     | 'experience'
                     | 'additional'

export const steps: readonly FormStep[] = ['personal', 'contacts', 'education', 'courses', 'experience', 'additional']

export function getLocalStorageStore<T>(name: string, init: T): Writable<T> {
    
    let storageVal = window.localStorage.getItem(name)
    if (storageVal) {
        init = JSON.parse(storageVal)
    }
    const store = writable<T>(init)
    store.subscribe(val => {
        window.localStorage.setItem(name, JSON.stringify(val))
    })

    return store
}

export function validatedStore<T>(store: Readable<T>, f: (val: T) => boolean) {
    return derived(store, ($store) => f($store) ? $store : undefined)
}

export function validatePersonalForm(data: any): boolean {
    return (
        data.russianName.length > 1 &&
        data.englishName.length > 1 &&
        !isNaN(data.salary)
    )
}
