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

var handlers = {
    displayTodos: function () {
        todoList.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
    },
    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function () {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
    },
    toggleCompleted: function () {
        var toggleTodoPossitionInput = document.getElementById('toggleTodoPossitionInput');
        todoList.toggleCompleted(toggleTodoPossitionInput.valueAsNumber);
        toggleTodoPossitionInput.value = '';
    }
};

todoList.addTodo('go to the gym today!');
todoList.addTodo('second Todo');
