function checkPalindrome(inputString) {
    console.log(inputString);
    if (inputString === inputString.split("").reverse().join("")) {
        return true;
    } else {return false;}
}
