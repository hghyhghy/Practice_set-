

function ofreverse( s ) {

    s=s.trim()
    const newVal = s.split(/\s+/)
    const Value  = newVal.reverse()
    const result = Value.join(' ')

    return result 
}

const inputString = "  Hello   World  ";
const reversedString = ofreverse(inputString);
console.log(reversedString);