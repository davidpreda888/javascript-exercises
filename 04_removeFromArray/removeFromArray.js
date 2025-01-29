const removeFromArray = function(array, ...obj) {

    return array.filter(val => !obj.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
