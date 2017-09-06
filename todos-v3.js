//it should store the todos array on an object
//it should have a displayTodos method
//it should have an addTodo method
//it should have a changeTodo method
///it should have a deleteTodo method
var todoList = {
    todos: ['item1', 'item2', 'item3', 'item4'],
    displayTodos: function () {
        console.log('My todos:', this.todos);
    },
    addItem: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function (position, value) {
        todos[position] = value;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        todos.splice(position, 1);
        this.displayTodos();
    }
};


todoList.addItem('ma oi');