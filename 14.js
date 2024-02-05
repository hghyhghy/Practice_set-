function isSubsequence(s,t) {
    let  temp = 0

    for(let i=0 ; i<t.length; i++  ){
        if( t[i] === s[temp])
        { temp =temp+1}
    }

    return temp === s.length
}

const s="abc"
const t ="ahbgdc"
console.log(isSubsequence(s,t))