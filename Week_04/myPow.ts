/**
 * 递归
 * 时间: O(logn)
 * @param x 
 * @param n 
 */
function myPow(x: number, n: number): number {
    function helper(x: number, n: number) {
        if (n === 0)
            return 1;

        let remainder = n % 2;
        let y: number = helper(x, (n - remainder) / 2);

        return remainder === 0 ? y * y : y * y * x * remainder;
    }
    
    return helper(x, n);
};