const partition = function(head, x) {
  // set current to head
  let current = head;
  // "before" and "after" are the two pointers used to create the two list.
  // "beforeHead" and "afterHead" are used to save the heads of the two lists.
  // All of these are initialized with the dummy list nodes created.
  let beforeHead = new ListNode(0);
  let before = beforeHead;
  let afterHead = new ListNode(0);
  let after = afterHead;
  // while current exists
  while (current) {
    // If the current list node value is lesser than the given x,
    // assign it to the before list.
    if (current.val < x) {
      before.next = current;
      before = before.next;
    } else {
      // assign it to the after list.
      after.next = current;
      after = after.next;
    }
    // move ahead in the current list
    current = current.next;
  }

  // Last node of "after" list would also be ending node of the reformed list
  after.next = null;

  // Once all the nodes are correctly assigned to the two lists,
  // combine them to form a single list which would be returned.
  before.next = afterHead.next;

  // return the next before-head
  return beforeHead.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head;
let x;
let result;

// head = [1, 4, 3, 2, 5, 2];
head = new ListNode(1);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(2);
console.log(JSON.stringify(head, null, 2));
x = 3;
result = partition(head, x);
console.log(JSON.stringify(result, null, 2));
/**
 * expected result [1, 2, 2, 4, 3, 5]
 * @example
 * {
 *   "val": 1,
 *   "next": {
 *     "val": 2,
 *     "next": {
 *       "val": 2,
 *       "next": {
 *         "val": 4,
 *         "next": {
 *           "val": 3,
 *           "next": {
 *             "val": 5,
 *             "next": null
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 * */
