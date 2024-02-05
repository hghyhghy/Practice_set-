
function twoSum(numbers,target) {

    let left = 0
    let right=numbers.length-1

    while (left < right) {

        const sum = numbers[left] + numbers[right]

        if(sum === target){

            return [ left+1 ,right+1]
        }

        else if ( sum < target){
            left ++

        } else{
           
            right-- 
        }
        
    }

}
let numbers=[2,7,11,15]
let target=9
console.log(twoSum(numbers,target))