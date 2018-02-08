function addBorder(picture) {
    //empty string to add however many asterisks there are characters
    var horizontalBorder = "";
    for (var i = 0; i<picture[0].length+2; i++) {
        horizontalBorder = horizontalBorder.concat("*");
    }
    //place asterisks before and after each word in array
    picture = picture.map(function(words) {return "*" + words + "*"});
    //add border created from js3-5
    picture.push(horizontalBorder);
    picture.unshift(horizontalBorder);
    return picture;
                                                   
}

