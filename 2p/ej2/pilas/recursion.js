function fact(n) {
    var s = new Stack();
    var product = 1;
    while (n > 1) {
      s.push(n--);
    }
    while (s.length() > 0) {
      product *= s.pop();
    }
    return product;
  }
  function Stack() { 
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.length = length;
  }
  function pop() {
    return this.dataStore[--this.top];
  }
  function length() {
    return this.top;
  }
  function push(element) {
    this.dataStore[this.top++] = element;
  }
console.log(" el numero factorial es  " +fact(7));