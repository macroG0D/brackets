module.exports = function check(str, bracketsConfig) {
  const bracketPairs = []; 
  bracketsConfig.forEach(elem => {
    bracketPairs.push(elem.join('')); // push each bracket pair as string element into the array to compair each bracket pair with the str   
  });

  let controlCounter = 0; // counter extra iterations to restart the loop in cases when some bracket pairs compair with str elements was missed out 
  while (controlCounter <= bracketPairs.length) { // restart the bracket pairs compairing 
    bracketPairs.forEach(elem => { // for each brackets pair
      while (str.includes(elem)) { // if str includes that brackets pair in a row
        for (let k = 0; k < str.length; k ++) { // loop over the str
          if (elem == str.slice(k, k + 2)) { // find the pair matching brackets in the str
            str = str.split(''); // convert string into array to use splice method
            str.splice(k, 2); // use splice to remove the matching pair from the str
            str = str.join(''); // conver the str array back to a string type
          }
        }
      }
    });
    if (str.length === 0) { // if str length is 0 — each pair was found and removed — the str is correct.
      return true;
    } else { // if str length is not 0, try to re-compair remaining str elements with bracket pais again
      controlCounter++;
    }
  }
  // if after all the str is not empty — most likely it is not correct
  return false;
}
