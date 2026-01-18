// //create our array
// let groceries = ["Milk","Eggs","Cereal","Salami","Juice"];
// console.log(groceries)
// //Access the first Item
// let firstItem = groceries[0];
// console.log('The First Item is : '+firstItem)

// //Acces the last Item
// let lastItem = groceries[groceries.length - 1];
// console.log('The last Item is : '+lastItem)

// //Acces the Third Item
// let thirdItem = groceries[2];
// console.log('Thirst Item is :'+thirdItem)

// //Inert new Item at the end
// groceries.push("Ice Cream")

// //insert at the beginning
// groceries.unshift("Cheese")

// //insert item after the 3rd item
// let deletedElemnt = groceries.splice(2,0,"Reda")


// //Find a particular item
// let foundIndex = groceries.indexOf("eggs")
// console.log('The index of Eggs : '+foundIndex)

// console.log(groceries)

//Training LinkedList
class linkedListNode{
  constructor(data,next=null){
    this.data = data;
    this.next = next
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addFirst(data){
    const newNode = new linkedListNode(data,this.head);
    this.head = newNode;
    if(!this.tail){
      this.tail = newNode;
    }
    this.size++;
  }

  addLast(data){
    const newNode = new linkedListNode(data);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode
    }else{
      this.tail.next = newNode;
      this.tail  = newNode;
    }
    this.size++;
  }

  addBefore(beforeData,data){
    const newNode = new linkedListNode(data);
    if(this.size === 0){
      this.head = newNode;
      this.size++;
      return;
    }

    if(this.head.data === beforeData){
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head.next;
    let prev = this.head;

    while(current){
      if(current.next === beforeData){
        newNode.next = current;
        prev.next = newNode;
        this.size++;
        return;
      }
      prev = current;
      current = current.next
    }
    throw new Error(`Node with data ${beforeData} not found in List`);
  }


  addAfter(afterData,data){
    const newNode = new linkedListNode(data);

    if(this.size === 0){
      this.head = newNode;
      this.size++;
      return;
    }

    let current  = this.head;

    while(current){
      if(current.data === afterData){
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return;
      }
      current = current.next;
    }
    throw new Error(`Node with data ${afterData} Not Found in List !`);
  }

  contains(data){
    let current = this.head;

    while(current){
      if(current.data === data){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  removeFirst(){
    if(!this.head){
      throw new Error(`List is Empty`);
    }

    this.head = this.head.next;
    if(!this.head){
      this.tail = null;
    }
    this.size--;
  }

  removeLast(){
     if(!this.tail){
      throw new Error(`List is Empty`);
    }
    
    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }

    let current = this.head;
    let prev = null;

    while(current.next){
      prev = current;
      current = current.next
    }

    prev.next = null;
    this.tail = prev;
    this.size--;
  }


  removeData(data){
    if(this.size === 0){
      throw new Error(`List is Empty`);
    }
    
  }
}
