function centuryFromYear(year) {
    //if 1501/100 = 15.01 +1 = 16.01 Math.floor = 16
    //if 1500%100 = 0 return year
    if (year%100===0) {
        return year/100;
    } else {
        return Math.floor((year/100)+1)
    }
}
