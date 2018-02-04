function commonCharacterCount(s1, s2) {
    //split up strings into arrays of characters
    s1 = s1.split("");
    s2 = s2.split("");
    //array to hold matched characters
    var matches = [];
    //array to hold indexes that are already matched in the second array
    var bannedIndex = [];
    //iterate through the arrays
    for (var i = 0; i < s1.length; i++) {
        for (var j = 0; j < s2.length; j++) {
            //if the characters match AND the index hasn't been matched before...
            if (s1[i] === s2[j] && bannedIndex.indexOf(j) === -1) {
                //push the character to the matched array and ban the index
                matches.push(s1[i]);
                bannedIndex.push(j);
                //move on to the next character... i++
                break;
            }
        }
    }
    return matches.length;
}
