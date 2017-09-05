var todos = ['item1', 'item2', 'item3', 'item4'];

git //it should have a function to display todos 
function displayTodos() {
    console.log('My todos:', todos);
}

//it should have a function to add todos
var addItem = function (list, item) {
    list.push(item);
    displayTodos();
};

var addInTodo = addItem.bind(null, todos);

//it should have a function to change todos
function changeTodo(position, value) {
    todos[position] = value;
    displayTodos();
}

//it should have a function to delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

addInTodo('ma oi');

changeTodo(0, 'oi ma');

deleteTodo(1);
