
function removenums( number ) {

    if ( number.length === 0) {
        return 0
    }


    let i = 0

    for ( let j=0 ; j <number.length ; j++) {

        if(number[j] !== number[i]) {

            i++
            number[i] = number [j]
        }
    }

    return i+1 
}

let number= [ 0,0,1,1,1,2,2,3,3,4]
let n1 = removenums(number)
console.log(n1)
console.log(number.slice(0,n1))

