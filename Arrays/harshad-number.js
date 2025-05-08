/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let digitsum = 0;
    let temp = x;
    while(temp>0){
        let lastdigit = temp%10;
        digitsum += lastdigit;
        temp = (temp-lastdigit)/10;
    }
    if(x%digitsum === 0){
        return digitsum;
    }
    return -1;
};
