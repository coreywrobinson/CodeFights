function adjacentElementsProduct(inputArray) {
    var largestNum = inputArray[0]*inputArray[1];
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i]*inputArray[i+1] > largestNum) {
            largestNum = (inputArray[i]*inputArray[i+1]);
        }
    }
    return largestNum;
}
