function allLongestStrings(inputArray) {
    //variable to hold the amount of characters in the longest string
    longestString = 0;
    //iterate through the strings to find the longest string
    inputArray.forEach(function(string) {
        if(string.length >longestString) {
            longestString = string.length;
        }
    })
    //filter out all the strings that are not as long as the longest string
    return inputArray.filter(function(finalStrings) {
        return finalStrings.length == longestString;
    });
    
}
