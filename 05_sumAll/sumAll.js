const sumAll = function (start, end) {
    if (start > end) {
        [start, end] = [end, start];
    }
    if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    }
    if (start < 0 || end < 0 ) {
        return 'ERROR';
    }
    let total = 0;
    for(let num = start; num <= end; num++){
        // total = total + num;
        total += num;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
