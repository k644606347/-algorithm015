/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 二叉树前序遍历-迭代
 * O(n) n = 节点总数
 */
function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [],
        stack: TreeNode[] = [];

    if (!root)
        return result;

    stack.push(root);

    while (stack.length > 0) {
        let firstNode = stack.shift() as TreeNode;

        result.push(firstNode.val);

        firstNode.right && stack.unshift(firstNode.right);
        firstNode.left && stack.unshift(firstNode.left);
    }

    return result;
};
