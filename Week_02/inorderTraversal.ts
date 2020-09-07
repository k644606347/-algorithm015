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
 * 二叉树中序遍历-递归
 * O(n) n=节点总数
 */
function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    function _inorderTraversal(root: TreeNode | null) {
        if (!root) return;
        if (root.left) {
            // result.push(root.left);
            _inorderTraversal(root.left);
        }
        root.val && result.push(root.val);
        if (root.right) {
            // result.push(root.right);
            _inorderTraversal(root.right);
        }
    }

    _inorderTraversal(root);

    return result;
};
