
function ofstr(haystack,needle) {
    
    if(needle === '') {
        return 0
    }

    for ( let i=0 ; i<=haystack.length; i++){
        if( haystack.substring(i,i+needle.length) === needle){
            return i;
        }
    }

    return -1
}

let haystack="Hello"
let needle="ll"
console.log(ofstr(haystack,needle))