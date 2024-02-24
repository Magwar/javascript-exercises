const removeFromArray = function(array, ...items) {
    const result= [];
    array.forEach(function(item) {
        if(!items.includes(item)) {
            result.push(item);
            }
    });
    return result;
    // const newArr = [];
    // for(let item of array) {
    //     if (!items.includes(item)){
    //         newArr.push(item);
    //         }
    // }
    // return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
