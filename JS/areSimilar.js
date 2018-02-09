function areSimilar(a, b) {
    //compare integers at each index and count differences
    var different = 0;
    for (var i = 0; i<a.length; i++) {
        if (a[i] !== b[i]) {
            different++;
        }
    }
    //sort arrays numerically
    var sumA = a.sort(function(a,b){return a-b});
    var sumB = b.sort(function(a,b){return a-b});
    //if arrays have 2 or less differences and are identical after being sorted...
    if (different <= 2 && sumA.toString() == sumB.toString()) {
        return true;
    } else return false;
}
