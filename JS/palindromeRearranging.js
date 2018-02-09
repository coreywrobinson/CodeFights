function palindromeRearranging(inputString) {
    //split string into array of individual characters
    var charArray = inputString.split("");
    //empty object to hold character-count key-values
    var letterObj = {};
    //iterate through character array
    for (var i=0; i< charArray.length; i++) {
        //if character isn't in the letterObj, add it and set it equal to 1
        if (!letterObj.hasOwnProperty(charArray[i])) {
            letterObj[charArray[i]] = 1
            //if character is in the letterObj, increment count by 1
        } else if (letterObj.hasOwnProperty(charArray[i])) {
                   letterObj[charArray[i]]++;
                   }
    }
    
    var oddCount = 0;
    //for each loop... if number of characters is odd, increment oddCount by 1
    for (val in letterObj) {
        if (letterObj[val] %2 !==0) {
            oddCount++;
        }
    }
    //palindrome can have up to 1 odd number of characters
    return oddCount <=1;
}
