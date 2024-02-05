
function twoSum(nums,target) {

    const mymap = new Map()

    for ( let i=0; i<nums.length ;i++){
        const complement = target - nums[i]
        if( mymap.has(complement)){
            return [ mymap.get(complement),i]
        }

        mymap.set(nums[i],i)
    }

    return []

    
}
let nums=[2,7,11,15]
let target = 9
 console.log(twoSum(nums,target));