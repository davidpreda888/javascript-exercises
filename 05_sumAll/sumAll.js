const sumAll = function(int1, int2) {
    let result = 0;

    if(int1 < 0 || int2 < 0 || typeof int1 !== 'number' || typeof int2 !== 'number' || Math.floor(int1) !== int1 || Math.floor(int2) !== int2){
        return "ERROR";
    }

    for (let i= Math.min(int1, int2); i <= Math.max(int1, int2); i++){
        result = result + i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
