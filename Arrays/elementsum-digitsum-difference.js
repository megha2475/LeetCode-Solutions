/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let res = 0;
    let sum = 0;
    let digisum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    let digits = nums.join('').split('').map(Number);
    for(let i=0;i<digits.length;i++){
        if(digits[i]>0){
            let lastdigit = digits[i]%10;
            digisum += lastdigit;
            digits[i] = (digits[i]-lastdigit)/10;
        }
    }
    let abs = Math.abs(sum-digisum);
    return abs;
};
