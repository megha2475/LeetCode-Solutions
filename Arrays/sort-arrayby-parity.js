/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            arr.push(nums[i])
        }
    }
    for(let j=0;j<nums.length;j++){
        if(nums[j]%2!==0){
            arr.push(nums[j])
        }
    }
    return arr;
};
