# Find in order successor

All trees are Binary Search Trees

## With Parent | inputNode.parent

Node Constructor

```js
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}
```

Sudocode

```js
 function findInOrderSuccessor(inputNode):
    if (inputNode.right != null):
        // return the node with minimum key in the right subtree
        return findMinKeyWithinTree(inputNode.right)

    ancestor = inputNode.parent
    child = inputNode

    // travel up using the parent pointer until you see
    // a node which is the left child of its parent. The parent
    // of such a node is successorNode.
    while (ancestor != null AND child == ancestor.right):
        child = ancestor
        ancestor = child.parent

    return ancestor

function findMinKeyWithinTree(inputNode):
    while (inputNode.left != null):
        inputNode = inputNode.left

    return inputNode
```
