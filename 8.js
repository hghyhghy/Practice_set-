
function ofint( roman ) {

    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };

    let result=0

    for( let i=0 ; i<roman.length;i++){

        let currSym= roman[i]
        let currVal= romanNumerals[currSym]



        if( i<roman.length-1 && romanNumerals[roman[i+1]] > currVal){

            result = result-currVal
        } else {

            result =result+currVal
        }
    }

    return result;
    
}

let roman='XXX'
console.log(ofint(roman))