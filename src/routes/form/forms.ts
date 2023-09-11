import { writable, type Readable, type Writable, derived } from "svelte/store";
import type { FamilyStatus } from "$lib/forms/fields/FamilyStatusInput.svelte";

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

export function validatedStore<T>(store: Readable<T>, f = (val: T) => true) {
    return derived(store, ($store) => f($store) ? $store : undefined)
}

export function withValidation<T>(store: Writable<T>, f = (val: T) => true) {
    return {
        raw: store,
        valid: validatedStore(store, f)
    }
}

export function validatePersonalForm(data: any): boolean {
    return (
        data.russianName.length > 1 &&
        data.englishName.length > 1 &&
        !isNaN(data.salary)
    )
}

export const personalFormData = withValidation(
    getLocalStorageStore('form:personal', {
        russianName: '',
        englishName: '',
        birthday: '2000-01-01',
        familyStatus: 'not-married' as FamilyStatus,
        salary: NaN,
        wantedJob: 'germany'
    }),
    validatePersonalForm
)

export const contactsFormData = withValidation(
    getLocalStorageStore('form:personal', {
        country: '',
        city: '',
        street: '',
        flat: '',
        index: '',
        phone: '',
        email: ''
    })
)
