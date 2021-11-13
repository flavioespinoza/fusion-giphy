/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  let c = head;
  while (c) {
    if (c.next && c.val === c.next.val) c.next = c.next.next;
    else c = c.next;
  }
  return head;
};