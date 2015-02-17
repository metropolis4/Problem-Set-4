// Problem 1

var addNumbers = function(string){
    var total = 0;
    string = _.reject(string, isNaN).join('').split(' ');
    _.chain(string)
        .map(function(val){return Number(val)})
        .map(function(val){return total += val})
        .value();
    return total;
};


// Problem 2

var longestWord = function(string){
    var initialWords = string.split(' ');
    var numArray = _.map(initialWords, function(val){
        return val.length;
    });
    var biggest = numArray.indexOf(Math.max.apply(this, numArray));
    return initialWords[biggest];
};

