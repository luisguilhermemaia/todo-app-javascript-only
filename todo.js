//It should have a place to store todos;
var todos = ['item1', 'item2', 'item3', 'item4'];

//It should have a way to display the todos;
console.log(todos);

var addItem = function(list, item){
    list.push(item);
};

//It should have a way to add new todos;
var addInTodo = addItem.bind(null,todos);

addInTodo('ma oi');

console.log(todos);

//It should have a way to change a todo;
todos[0] = 'outra coisa';

console.log(todos);

//It should have a way to delete a todo;
todos.splice(0,1);
todos.splice(3,1);
console.log(todos);




