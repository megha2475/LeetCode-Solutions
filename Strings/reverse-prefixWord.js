/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let ind = word.indexOf(ch);
    let revWord = word.slice(0,ind+1).split('').reverse().join('');
    let prefix = revWord + word.slice(ind+1);
    return prefix;
};
