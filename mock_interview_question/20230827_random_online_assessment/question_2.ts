import ExecutionTimer from '../../src/utils/execution_timer';
import TreeNode from '../../src/utils/tree_node'
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Mock Question 2
 * 
 * Consider all the leaves of a binary tree, from left to right order,
 * the values of those leaves form a leaf value sequence.
 * 
 * https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 * Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 * 
 * Example 1:
 * https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg
 * Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 * Output: true
 * 
 * Example 2:
 * https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg
 * Input: root1 = [1,2,3], root2 = [1,3,2]
 * Output: false
 * 
 * Constraints:
 *   * The number of nodes in each tree will be in the range [1, 200].
 *   * Both of the given trees will have values in the range [0, 200].
 * ----------------------------------------------------------------------------------------------------------------------
 */
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let arrRoot1 = [], arrRoot2 = []
    traverse(root1, arrRoot1)
    traverse(root2, arrRoot2)
    return JSON.stringify(arrRoot1) === JSON.stringify(arrRoot2)
};

function traverse(tree: TreeNode, array: number[]) {
    if (!tree) return
    if (!tree.left && !tree.right) return array.push(tree.val)
    traverse(tree.left, array)
    traverse(tree.right, array)
}

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        { root1:[3,5,1,6,2,9,8,null,null,7,4], root2: [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8] }, // true
        { root1:[1,2,3], root2: [1,3,2] }, // false
    ]

    aTestCases.forEach((value, index) => console.log(index, '||', leafSimilar(TreeNode.fromArray(value.root1), TreeNode.fromArray(value.root2))))
});