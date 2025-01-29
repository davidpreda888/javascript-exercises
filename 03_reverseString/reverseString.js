const reverseString = function(str) {
    let result = '';
    let size = str.length - 1;

    if (str === ''){
        return str;
    }

    for (let i = size; i >= 0; i--){
        result = result + str.charAt(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
