/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * N叉树层序遍历(BSF)
 * O(n) n=层数
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];

    if (!root)
        return result;

    let children = [root];

    while(children.length > 0) {
        result.push(children.map(child => child.val));

        children = children.reduce((pre, cur, i) => {
            if (Array.isArray(cur.children)) {
                pre = pre.concat(cur.children);
            }
            return pre;
        }, []);
    }

    return result;
};
