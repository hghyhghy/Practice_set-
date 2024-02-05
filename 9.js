
//  length of the last word

function oflength( s )
{
    s=s.trim()
    // s plitting the  words

    const words = s.split(' ')
    if( words.length === 0 ) {
        return 0;
    }

    const lastword = words[words.length-1]
    const result= lastword.length 
    return result
    

}

let s="Hello World"
console.log(oflength(s))