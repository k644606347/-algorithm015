/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0;i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== j) {
                nums[j] = nums[i];
                nums[i] = 0;
            }
            j++;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//     for (let i = nums.length ; i --;) {
//       if (!nums[i]) {
//         nums.splice(i, 1);
//         nums.push(0);
//       }
//     }
// }
