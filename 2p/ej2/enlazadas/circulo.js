function circularLinkedList() {
   
    let Node = function(element) {
      this.element = element;
      this.next = null;
    }
  
    let length = 0;
    let head = null;
  
  
    this.getElementAt = function(index) {
      if(index >= 0 && index <= length){
        let node = head;
        for(let i = 0; i < index && node != null; i++){
          node = node.next;
        }
        return node;
      }
      return undefined;
    }
    
    
    this.append = function(element){
    
      const node = new Node(element);
      let current;
      
    
      if(head === null){
        head = node;
      }else{
     
        current = this.getElementAt(length - 1);
        current.next = node;
      }
      
      node.next = head;
      length++;
    }
    
  
    this.insert = function(element, index){
      if(index >= 0 && index <= length){
        const node = new Node(element);
        let current = head;
        
   
        if(index === 0){      
          if(head === null){
            head = node;
            node.next = head;
          }else{
            node.next = current;
            current = this.getElementAt(length);
            head = node;
            current.next = head;
          }
        }else{
          
          const previous = this.getElementAt(index - 1);
          node.next = previous.next;
          previous.next = node;
        }
        
        length++;
        return true;
      }
      return false;
    }
    
  
    this.removeAt = function (index) {
      if(index >= 0 && index < length){
        let current = head;
        
       
        if(index === 0){
          if(length === 1){
            head = undefined;
          }else{
            const removed = head;
            current = this.getElementAt(length - 1);
            head = head.next;
            current.next = head;
            current = removed;
          }
        }else{
         
          const previous = this.getElementAt(index - 1);
          current = previous.next;
          previous.next = current.next;
        }
        
        length--;
        return current.element;
      }
      return undefined;
    }
    
    
    this.indexOf = function(elm){
      let current = head,
      index = -1;
  
    
      while(current){
        if(elm === current.element){
           return ++index;
        }
  
         index++;
         current = current.next;
       }
  
     
      return -1;
    };
    
   
    this.isPresent = (elm) => {
      return this.indexOf(elm) !== -1;
    };
    
    
    this.getHead = function(){
      return head;
    }
    
    
    this.delete = (elm) => {
       return this.removeAt(this.indexOf(elm));
    }; 
    
  
    this.deleteHead = function(){
      this.removeAt(0);
    }
    
    
    this.toString = function(){
      let current = head,
      string = '';
      const temp = head.element;
      
      while(current){
        if(temp === current.next.element){
          string += current.element + (current.next ? '\n' : '');
          break;
        }
        
        string += current.element + (current.next ? '\n' : '');
        current = current.next;
      }
  
      return string;
    };
    
   
    this.toArray = function(){
      let arr = [],
      current = head;
      const temp = head.element
  
      while(current){
       
        if(temp === current.next.element){
          arr.push(current.element);
          break;
        }
        
        arr.push(current.element);
        current = current.next;
      }
  
      return arr;
    };
    
  
    this.isEmpty = function(){
      return length === 0;
    };
    
    
    this.size = function(){
      return length;
    }
    
  }
  let cLL = new circularLinkedList();
cLL.append(50);
cLL.append(80);
cLL.append(20);
cLL.append(50);
console.log(cLL.removeAt(2));
cLL.insert(70, 3);
cLL.deleteHead();
cLL.delete(70);
console.log(cLL.toArray());