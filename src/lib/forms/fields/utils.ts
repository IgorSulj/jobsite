export function getDateNowString() {
    let date = new Date()
    let day = date.getDay().toString().padStart(2, '0')
    let month = date.getMonth().toString().padStart(2, '0')
    let year = date.getFullYear().toString().padStart(4, '0')
    return `${year}-${month}-${day}`
}