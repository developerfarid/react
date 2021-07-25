export function toMeter(feet) {
    return feet / 3.281
}
export function toFeet(meter) {
    return meter * 3.281
}
export function toCinte(cinte) {
    return cinte * 100
}
export function convert(length, convertTo) {
    const input = parseFloat(length)
    if (Number.isNaN(input)) {
        return ""
    }
    const output = convertTo(input)
    const round = Math.round(output*10000)/10000
    return round
}