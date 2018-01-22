function makeArrayConsecutive2(statues) {
    var count = 0;
    statues.sort(function(a,b) {
        return a-b;
    });
    for (var i =0; i<statues.length-1; i++) {
        if (statues[i] !== statues[i+1]-1) {
            count+= (statues[i+1]-statues[i])-1;   
        } 
    }return count;
}
