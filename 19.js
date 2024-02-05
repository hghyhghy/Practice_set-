
function isHappy(n) {

    const mymap = new Set()

    function ofsquare ( number ){
        let result=0

        while ( number>0){
            let temp = number%10
            result += temp*temp
            number= Math.floor(number/10)
        
        }

        return result
    }

    while ( n!==1 && !mymap.has(n)){
        mymap.add(n)
        n=ofsquare(n)
    }

    return n === 1
    
}

const n= 19
console.log(isHappy(n))