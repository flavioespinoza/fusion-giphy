/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} listOne
 * @param {ListNode} listTwo
 * @return {ListNode}
 */
// Recursive Strategy ======================
function mergeTwoLists(listOne, listTwo) {
  if(!listOne || !listTwo) return listOne || listTwo;
  if(listOne.val < listTwo.val) {
    listOne.next = mergeTwoLists(listOne.next, listTwo);
    return listOne;
  }
  listTwo.next = mergeTwoLists(listOne, listTwo.next);
  return listTwo;
};

// Psudocode
function recurse_1(listOne, listTwo) {
  // if (!listOne or !listTwo) return listOne || listTwo

  // if listOne-val < listTwo-val
  //   listOne-next = recurse(listOne.next, listTwo)
  //   return listOne

  // listTwo.next = recurse(listOne, listTwo.next)
  // return listTwo
}

// Psudocode
function recurse_2(listOne, listTwo) {
  // if (!listOne or !listTwo) return listOne or listTwo <-- whichever exists

  // if (listOne-val < listTwo-val) 
  //    listOne-next = recurse(listOne-next, listTwo)
  //    return listOne

  // listTwo-next = recurse(listOne, listTwo-next);
  // return listTwo
}










let listOne;
let listTwo;

listOne = [1, 2, 4];
listTwo = [1, 3, 4];
console.log(mergeTwoLists(listOne, listTwo));

listOne = [5, 1, 3];
listTwo = [6, 4, 2];

console.log(mergeTwoLists(listOne, listTwo));
