function matrixElementsSum(matrix) {
    //array to hold banned indexes
    var bannedIndex = [];
    //variable to cummulate prices
    var totalPrice = 0;
    //iterate through rows
    for (var i = 0; i < matrix.length; i++) {
        //iterate through columns
        for (var j = 0; j < matrix[i].length; j++) {
            //if there's a 0, push it's index to bannedIndex 
            if (matrix[i][j] === 0) {
                bannedIndex.push(j);
                //if index isn't banned then add price to total
            } else if (bannedIndex.indexOf(j)=== -1) {
                totalPrice += matrix[i][j];
            }
        }
    } return totalPrice;
}
            
            
            
    
