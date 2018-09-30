
export function getDays(time: number) {
    return Math.floor(time / (1000 * 60 * 60 * 24))
}

export function getHours(time: number) {
    return Math.floor(time / (1000 * 60 * 60 ) % 24)
}

export function getMinutes(time: number) {
    return Math.floor(time / (1000 * 60) % 60)
}

export function getSeconds(time: number) {
    return Math.floor(time / (1000) % 60)
}