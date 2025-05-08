/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
  let count = 0;
  for(let i=1;i<=num;i++){
    let digitsum = 0;
    let current = i;
    while(current>0){
        let lastdigit = current%10;
        digitsum += lastdigit;
        current = (current-lastdigit)/10;
    }
    if(digitsum%2===0){
        count++;
    }
  }
  return count;
};
