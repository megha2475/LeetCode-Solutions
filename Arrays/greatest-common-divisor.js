/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = nums[0];
    let min = nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max = nums[i]
        }
        if(nums[i]<min){
            min = nums[i]
        }
    }
    while(max){
        let temp = max;
        max = min%max;
        min = temp;
    }
    return min;
};
