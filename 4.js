
function ofduplicate( num ) {

   let n1= num.sort((a,b) => a-b)
   let v1= Math.floor(n1.length/2)
   return n1[v1]

} 

let num = [3,2,3]
let n = ofduplicate(num)
console.log(n)