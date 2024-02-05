
// jumping game 

function ofjump ( num ) {

    let maxReach = 0
    
    for ( let  i =0 ; i<num.length ; i++) {

        if ( i > maxReach) {
            return false
            
        }


        maxReach= Math.max( maxReach,i+num[i])

        if( maxReach >= num.length-1){
            return true
        }
    }
   return false
}

let num =[ 1, 3, 1, 0, 4]
console.log(ofjump(num))