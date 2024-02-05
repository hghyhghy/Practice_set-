

function wordPattern ( pattern ,s ){

    const words = s.split( ' ' );
    if( pattern.length !== words.length) {
        return false 

    }

    const patterntoword = new Map()
    const wordtopattern = new Map()

    for ( let i =0  ; i< pattern.length ; i++){
        const char = pattern[i]
        const word = words[i]

        if( patterntoword.has(char)){
            if( patterntoword.get(char) !==  word) {
                return false 
            }
            }else {
                patterntoword.set(char,word)
        }

        if( wordtopattern.has(word)){
            if(wordtopattern.get(word) !==  char){
                return false 
            }
            
            }else {
                wordtopattern.set(word,char)
        }
    }
    return true 
}

let pattern ="abba"
let s="dog cat cat fish"
console.log(wordPattern(pattern,s))