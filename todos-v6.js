//.toggleAll: if everything is true, make everything false
//.toggleAll: otherwise, make everything true

var todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('Your Todo list is empty!');
        } else {
            console.log('My Todos:');
            this.todos.forEach(function (todo) {
                if (todo.completed) {
                    console.log('(x)', todo.todoText);
                } else {
                    console.log('( )', todo.todoText);
                }
            });
        }
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
    toggleAll: function () {
        if (this.isAllCompleted()) {
            this.makeAllUncompleted();
        } else {
            this.makeAllCompleted();
        }
        this.displayTodos();
    },
    isAllCompleted: function () {
        var completed = true;
        this.todos.forEach(function (todo) {
            if (todo.completed == false) {
                completed = false;
            }
        });
        return completed;
    },
    makeAllCompleted: function () {
        this.todos.forEach(function (todo) {
            todo.completed = true;
        });
    },
    makeAllUncompleted: function () {
        this.todos.forEach(function (todo) {
            todo.completed = false;
        });
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

todoList.displayTodos();
todoList.addTodo('first');
todoList.addTodo('second');
todoList.addTodo('third');
todoList.changeTodo(0, 'ma oi');
todoList.toggleCompleted(0);
todoList.toggleCompleted(1);
todoList.toggleCompleted(2);
todoList.toggleAll();
todoList.toggleAll();