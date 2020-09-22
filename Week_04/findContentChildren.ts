/**
 * https://leetcode-cn.com/problems/assign-cookies/solution/
 * 给孩子分饼干
 * 时间 O(n)
 * @param g 
 * @param s 
 */
function findContentChildren(g: number[], s: number[]): number {
    let gCount = 0, sIndex = 0;
    
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    while (gCount < g.length && sIndex < s.length) {
        if (g[gCount] <= s[sIndex]) {
            gCount++;
            sIndex++;
        } else {
            sIndex++;
        }
    }

    return gCount;
};