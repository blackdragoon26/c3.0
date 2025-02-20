/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.emptyList=[];
  }
  add(todo){
    this.emptyList.push(todo);
  }
  remove(indexOfTodo){
    // if(indexOfTodo<this.emptyList.length){
      this.emptyList.splice(indexOfTodo,1);
    // }
    
  }
  update(index, updatedTodo){
    if(index<this.emptyList.length)
    this.emptyList[index]=updatedTodo;
  }
  getAll(){
    return this.emptyList;
  }
  get(indexOfTodo){
    if(indexOfTodo<this.emptyList.length){
    return this.emptyList[indexOfTodo];
    }
    else{
      return null;
    }
  }
  clear(){
    while(this.emptyList!=0){
      this.emptyList.pop();
    }
  }
}
// const Dreams=new Todo();
// Dreams.add("To Die Rich");
// Dreams.add("Be Confident Proud prick");
// Dreams.add("Happy");
// Dreams.add("Goth");
// Dreams.add("Ex");
// console.log(Dreams.getAll());

// Dreams.update(4, "Wine");
// console.log(Dreams.getAll());


  
module.exports = Todo;
