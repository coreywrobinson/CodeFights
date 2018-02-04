function isLucky(n) {
    //convert number to string
    var nString = n.toString();
    //get middle index 
    var half = (nString.length / 2);
    //get strings with first and second half digits in string form
    var halfStr1 = nString.substring(0, half);
    var halfStr2 = nString.substring(half);
    //empty arrays to hold string values of halves
    var strArr1 = [];
    var strArr2 = [];
    //push individual string digit values to arrays
    for (var i = 0; i<halfStr1.length; i++) {
        strArr1.push(halfStr1.charAt(i));
    }
    for (var i = 0; i<halfStr2.length; i++) {
        strArr2.push(halfStr2.charAt(i));
    }
    //emtpy arrays to add digits to
    var numArr1 = [];
    var numArr2 = [];
    //convert string values to digits and push to arrays
    for (var i = 0; i<halfStr1.length; i++) {
        numArr1.push(parseInt(halfStr1[i], 10));
    }
    for (var i = 0; i<halfStr2.length; i++) {
        numArr2.push(parseInt(halfStr2[i], 10));
    }
    //sum the digits in each array and compare
    var sum1 = numArr1.reduce(function(a, b) {return a+b}, 0);
    var sum2 = numArr2.reduce(function(a, b) {return a+b}, 0);
    return (sum1 === sum2);
}
