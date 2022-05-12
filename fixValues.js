export function fixValues(initValue, minValue, maxValue) {

    if (typeof minValue !== 'number' && typeof maxValue !== 'number') {
        return [initValue, undefined, undefined]
    }
    if (typeof minValue === 'number' && typeof maxValue !== 'number') {

        return minValue < initValue ? [initValue, minValue, undefined] : [minValue, initValue, undefined]
    }
    if (typeof minValue !== 'number' && typeof maxValue === 'number') {
        return maxValue < initValue ? [maxValue, undefined, initValue] : [initValue, undefined, maxValue]
    }
    if (typeof minValue === 'number' && typeof maxValue === 'number') {
        const [min, mid, max] = [initValue, minValue, maxValue].sort((a, b) => {
            return a < b ? -1 : 1
        })
        return [mid, min, max]
    }
}