function sortByHeight(a) {
    //filter out all people and sort numerically
    var sortedArr = a.filter(function(x) {
        return x != -1
    }).sort(function(a,b) {
        return a - b;
    });
    //if position isn't a tree, change it to the person and then increase index for next person to add
    var indexVal = 0;
    for (var i=0; i<a.length; i++) {
        if (a[i] != -1) {
            a[i] = sortedArr[indexVal];
            indexVal++
        }
    }
    return a;
}
