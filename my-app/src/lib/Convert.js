export function toCal(far) {
    return ((far - 32) * 5) / 9
    
}
export function toFar(cal) {
    return (cal * 9) / 5 + 32
 
}

export function convart(tem, convertTo){
    const input = parseFloat(tem)
    if (Number.isNaN(input)) {
        return ""
    }
    const output = convertTo(input)
    const round = Math.round(output)
    return round.toString()
}