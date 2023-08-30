import { writable, type Writable } from "svelte/store";

export type FormStep = 'personal' 
                     | 'contacts' 
                     | 'education'
                     | 'courses'
                     | 'experience'
                     | 'additional'

;

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
