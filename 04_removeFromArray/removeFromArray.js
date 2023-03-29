const removeFromArray = function(nums, ...args) {
    let newNums = [];
    for (i = 0; i < nums.length; i++){
        if (!args.includes(nums[i])){
            newNums.push(nums[i]);
        }
    }
    return newNums;
}

// Do not edit below this line
module.exports = removeFromArray;
