/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {

        prices.sort((a,b)=>a-b);

        let result = prices[0]+prices[1];
        
        if(result<=money){
            return money - result;
        }else{
            return money
        }
};
