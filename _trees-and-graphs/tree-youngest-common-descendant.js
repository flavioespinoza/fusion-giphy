// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	const depthOne = getDepth(descendantOne, topAncestor);
	const depthTwo = getDepth(descendantTwo, topAncestor);
	if (depthOne > depthTwo) {
		return traverseTree(descendantOne, descendantTwo, depthOne - depthTwo);
	} else {
		return traverseTree(descendantTwo, descendantOne, depthTwo - depthOne);
	}
}

function traverseTree(lower, upper, diff) {
	while(diff > 0) {
		lower = lower.ancestor;
		diff--;
	}
	while(lower !== upper) {
		lower = lower.ancestor;
		upper = upper.ancestor;
	}
	return lower;
}

function getDepth(descendant, topAncestor) {
	let depth = 0;
	while(descendant !== topAncestor) {
		descendant = descendant.ancestor;
		depth++;
	}
	return depth;
}
 
// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
