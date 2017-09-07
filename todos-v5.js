// .displayTodos should show .todoText
//.displayTodos should tell you if .todos is empty
//.displayTodos should show 

var todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('Your Todo list is empty!');
        } else {
            console.log('My Todos:');
            this.todos.forEach(function (todo) {
                if (todo.completed){
                    console.log('(x)',todo.todoText);
                } else {
                    console.log('( )',todo.todoText);
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
todoList.toggleCompleted(1);