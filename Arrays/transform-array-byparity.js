/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            arr.push(nums[i] = 0)
        }else{
           arr.push(nums[i] = 1)
        }
    }
    return arr.sort();
};
