/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let sum1 = 0;
    let sum2 = 0;
    for(let i=0;i<num.length;i++){
        if(i%2===0){
            sum1 += Number(num[i]);
        }else{
            sum2 += Number(num[i]);
        }
    }
    console.log(sum1);
    return sum1 === sum2;
};
