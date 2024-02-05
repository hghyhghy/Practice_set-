//  reversing the entire array 

function reverse( nums , start , end ){
    while( start < end) {

        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp 
        start++;
        end--
    }
}

function ofreverse( nums,k) {
    let len = nums.length

    if( len<=1){
        return;
    }

    reverse(nums, 0 , len-1 )
    reverse( nums, 0 ,k-1)
    reverse( nums,k,len-1)
}
let nums = [ -1]
let k = 3
ofreverse(nums,k)
console.log(nums)