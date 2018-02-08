function alternatingSums(a) {
    //empty arrays for teams
    var team1 = [];
    var team2 = [];
    //put all even indexes in team1 and all odd indexes in team2
    for (var i = 0; i<a.length; i++) {
        if (i%2 === 0 || i === 0) {
            team1.push(a[i]);
        } else if (i%2 === 1) {
            team2.push(a[i])
        }
    }
    //sum all weights in each teams
    var sum1 = team1.reduce(function(a,b) {return a+b}, 0);
    var sum2 = team2.reduce(function(a,b) {return a+b}, 0);
    //return array with total weights of teams
    return [sum1, sum2];
}
