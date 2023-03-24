export const requaredField = (value: string) => {
    return value ? undefined : 'error message'

}
export const  maxLengthCreator = (maxLength:number) => (value:string) => {
    if (value && value.length >= maxLength) {
        return `Max length is ${maxLength} symbols`
    }
    return undefined
}
