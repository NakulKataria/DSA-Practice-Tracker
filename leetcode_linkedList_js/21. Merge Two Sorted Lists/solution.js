/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let list=new ListNode(-1);
    let tail=list;

    while(list1 && list2){
        if(list1.val<=list2.val){
            tail.next=list1;
            list1=list1.next;
        }
        else{
            tail.next=list2;
            list2=list2.next;
        }
        tail=tail.next;
    }
    tail.next=list1 || list2;
    return list.next;
    
};