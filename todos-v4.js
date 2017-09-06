// todoList.addTodo should add objects
//todoList.changeTodo should change the todoText property
//todoList.toggleCompleted should change the comleted property
var todoList = {
    todos: [],
    displayTodos: function () {
        console.log('My todos:', this.todos);
    },
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

todoList.addTodo('ma oi');
todoList.changeTodo(0, 'ma oi 2');