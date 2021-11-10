/********************************************************
 * CODE INSTRUCTIONS:                                   *
 * 1) The method findInOrderSuccessor you're asked      *
 *    to implement is located at line 26.               *
 * 2) Use the helper code below to implement it.        *
 * 3) In a nutshell, the helper code allows you to      *
 *    to build a Binary Search Tree.                    *
 * 4) Jump to line 94 to see an example for how the     *
 *    helper code is used to test findInOrderSuccessor. *
 ********************************************************/

const util = require('util');

const options = {
  showHidden: false,
  depth: null,
  colors: true,
};

// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}
// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  let root = this.root;

  // 1. If the tree is empty, create the root
  if (!root) {
    this.root = new Node(key);
    return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert it
  let currentNode = root;
  let newNode = new Node(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

// Returns a reference to a node in the BST by its key.
// Use this function when you need a node to test your
// findInOrderSuccessor function on.
BinarySearchTree.prototype.getNodeByKey = function(key) {
  let currentNode = this.root;

  while (currentNode) {
    if (key === currentNode.key) {
      return currentNode;
    }

    if (key < currentNode.key) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return null;
};


/*********************************************
 * Solution
 *********************************************/
BinarySearchTree.prototype.findInOrderSuccessor = function(node) {
  if (node.right !== null) {
    return findMinKeyWithinTree(node.right);
  }

  // pointers
  const parent = node.parent;
  const child = node;

  // travel up using the parent pointer until you see
  // a node that is the left child of its parent.
  
  // the parent of such a node is the in-order-successor! :)
  while (parent !== null && child === parent.right) {
    child = parent;
    parent = child.parent;
  }

  return parent;


};

function findMinKeyWithinTree(current) {
  while (current.left !== null) {
    current = current.left;
  }
  return current;
}




// Create a Binary Search Tree
let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

// let inspect = util.inspect(bst, options);
// console.log(inspect);
/**
 * @example
 * {
 *   root: <ref *1> Node {
 *     key: 20,
 *     parent: null,
 *     left: <ref *2> Node {
 *       key: 9,
 *       parent: [Circular *1],
 *       left: Node { key: 5, parent: [Circular *2], left: null, right: null },
 *       right: <ref *3> Node {
 *         key: 12,
 *         parent: [Circular *2],
 *         left: Node {
 *           key: 11,
 *           parent: [Circular *3],
 *           left: null,
 *           right: null
 *         },
 *         right: Node {
 *           key: 14,
 *           parent: [Circular *3],
 *           left: null,
 *           right: null
 *         }
 *       }
 *     },
 *     right: Node { key: 25, parent: [Circular *1], left: null, right: null }
 *   }
 * }
 * */

// Get a reference to the node whose key is 9
let test = bst.getNodeByKey(9);

// Find the in order successor of test
let successor = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if (successor) {
  console.log('Inorder successor of ' + test.key + ' is ' + successor.key);
} else {
  console.log('Inorder successor does not exist');
}


"use strict";

/* 

You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "5,com.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

Sample output (in any order/format):

calculateClicksByDomain(counts) =>
com:                     1345
google.com:              900
stackoverflow.com:       10
overflow.com:            20
yahoo.com:               410
mail.yahoo.com:          60
mobile.sports.yahoo.com: 10
sports.yahoo.com:        50
com.com:                 5
org:                     3
wikipedia.org:           3
en.wikipedia.org:        2
m.wikipedia.org:         1
mobile.sports:           1
sports:                  1
uk:                      1
co.uk:                   1
google.co.uk:            1

n: number of domains in the input
(individual domains and subdomains have a constant upper length)


*/



// Strategy ==================
// 1. results = define return data structure
// 2. 
const example_results = {
  'com': 1345,
  'google.com': 900, 
}
// 3. loop through counts
// 4. create map of key val pairs from 1st argument
//    "40,sports.yahoo.com",
//    'split (,)' => 40, sports.yahoo.com
// 
// 4B. Build Trie Class

// 6. for each count loop through awarded 
// 7. if key in results add count to results[key] 
//    else results[key] = count
// 8. create set of possible substrings
// 9. loop through set and implement multiStringSearch(substring, trieDataStructure) add return to results 

// L. return results

const counts = [ 
  "900, google.com",
  
  
  "60, mail.yahoo.com",
  
  "10, mobile.sports.yahoo.com",
  "40, sports.yahoo.com",
  
  "300, yahoo.com",
  
  
  "10, stackoverflow.com",
  "20, overflow.com",
  
  "5, com.com",
  
  
  
  "2,en.wikipedia.org",
  "1,m.wikipedia.org"
  ,
  "1,mobile.sports",
  
  "1,google.co.uk" 
];

const counts_2 = [ 
  {
    domain: 'com',
    name: 'yahoo',
    subdomains: ['sports', 'mobile'],
    count: 900,
    awarded: [ // how do you do this?
      'com', 
      'yahoo.com', 
      'sports.yahoo.com', 
      'mobile.sports.yahoo.com'
    ]
  },

];

function buildTrie(array) {
  
  const temp = {};
  const results = {
    trie: {},
    counts_2: [],
  }
  
  for (const string of array) {
    let split = string.split(',')
    let count = split[0];
    let fullDomain = split[1].split('.');
    const awarded = [];
  
    for (let i = fullDomain.length-1; i >= 0; i--) {
      if (fullDomain[i + 1]) {
        
      } else {
        
      }
    }
    
    results.counts_2.push({
      domain: 
    })
  }
  
}

function multiStringSearch(targetWord, trieDataStructure) {
  // create the trie substringList
  
  // 
  
}


class Trie {
  constructor() {
    this.root = {};
  }
  
  insert(string) {
    let current = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!(string[i] in current)) {
        current[string[i]] = {};
      }
      current = current[string[i]];
    }
    current['*'] = string;
  }
}


// ca, cat
const trie_data_structure = {
  root: {
    c: {
      a: {
        '*': 'ca',
        t: {
          '*': 'cat'
        }
      }
    }
  }
}