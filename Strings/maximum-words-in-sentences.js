/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let length = 0;
  let words 
  for(let i=0;i<sentences.length;i++){
    words = sentences[i].split(" ").length;
    if(words>length){
        length = words;
    }
  }
  return length;
};
