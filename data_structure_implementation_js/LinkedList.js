// implementation of the linked list in js

// creating node class 
class Node {
    constructor(data){
        this.data=data;
        this.next=null;
        
    }
};

//creating linked list class
class LinkedList {
    constructor(){
        this.head=null;
        
    }

    //method to add at the top of the linked list
    addTop(data){
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
        
    }

    //method to add at the last of list
    addLast( data){
        const newNode= new Node(data);
        if(this.head!== null){
            this.head= newNode;
            return;
        } 
        else {
            let current= this.head;
            while(current.next!== null){
                current=current.next;
            }
            current.next=newNode;
        }

    }
 //return size of list
 size(){ let count=0;
    let current= this.head;
    while(current.next!==null){
       current=current.next;
       count++;
    }
    return count+1;
    
 }
 // add element at the given index of list
    addAtIndex(index,data){
     if(index<0 || index< this.size()){
        const newNode=new Node(data);
        let count=0;
        let current= this.head;
        while(count<index){
           current=current.next;
           count++;
        }
        current.next=newNode;
     }
     else { 
        console.log("invalid index");
       }
    }
 //remove element from top
 removeTop(){
    if (this.head===null){return;}
    else{
    this.head=this.head.next;}

 }

 removeLast(){
    if(this.head!== null){
    
    return;
} 
else {
    let current= this.head;
    while(current.next.next!== null){
        current=current.next;
    }
    current.next=null;
}

 }
 // remove at the given index
 removeAtIndex(index){
    if(index<0 || index>this.size()){
    
    return;
} 
else if (index===0){
    this.removeTop();
}
else {
    let current= this.head;
    while(current.next<index){
        current=current.next;
    }
    current.next.next=null;
}

 }
  // print list
 printList(){
    let current =this.head;
    while(current!== null){
        console.log(current.data);
        current=current.next;
    }
 }
};

