function reverseParentheses(s) {
    //if string starts with (
    if (s.includes("(")) {
        //call the function again with reversed string
        return reverseParentheses(reverseOnce(s));
    }
    //when no more parentheses are present, return s
    return s;
}

function reverseOnce(s) {
    //regex captures string inside parentheses
    var regex = /\(([^()]*)\)/i;
    //captures characters between parentheses
    var substr = regex.exec(s)[1];
    //reverse string
    substr = substr.split("").reverse().join("");
    //replace where regex is true with substr
    return s.replace(regex, substr);
}
