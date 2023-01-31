export const toStringWithSymbol = (number, symbol) => {
    const string = number.toString()
        let newString = ''
        for (let i = 0; i < string.length; i += 3) {
            const part = string.substring(string.length - i - 3, string.length - i);
            newString = i === 0 ? part : part + symbol + newString;
        }
        return newString
    }