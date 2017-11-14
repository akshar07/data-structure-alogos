function LinkedList(){  
  this.head = null;
}
     
LinkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;      
    }
    else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
let sll=new LinkedList()
sll.push(1)
sll.push(2)
sll.push(3)
console.log(sll.head)

//Class implementation
class LinkedList{
    constructor(){
      this.head=null;
    }
      
      push(val){
        let node={
           value:val,
          next:null
        }
        if(!this.head){
          this.head=node;
        }
        else{
          let current=this.head;
          while(current.next){
            current=current.next;
          }
          current.next=node;
        }
      }
    }
    
    let ssl=new LinkedList()
    ssl.push(2)
    ssl.push(6)
    ssl.push(4)
    console.log(ssl.head)