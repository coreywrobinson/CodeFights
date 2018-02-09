function arrayChange(inputArray) {
    //count number of increases
    var count = 0;
    for (var i = 0; i<inputArray.length; i++) {
        //if consecutive integers are equal, increase the latter by 1 and add to count
        if (inputArray[i] === inputArray[i+1]) {
            inputArray[i+1]++;
            count++;
            //if second integer is smaller, increase it until it's greater
        } else if (inputArray[i] > inputArray[i+1]) {
            while (inputArray[i]>=inputArray[i+1]) {
                inputArray[i+1]++;
                count++;
            }
        }
    }
    return count;
}
