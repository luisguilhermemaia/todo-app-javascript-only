var todoList = {
    todos: [],
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
    },
    toggleAll: function () {
        if (this.isAllCompleted()) {
            this.makeAllUncompleted();
        } else {
            this.makeAllCompleted();
        }
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
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    }
};

var handlers = {
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function () {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleTodoPossitionInput = document.getElementById('toggleTodoPossitionInput');
        todoList.toggleCompleted(toggleTodoPossitionInput.valueAsNumber);
        toggleTodoPossitionInput.value = '';
        view.displayTodos();
    }
};

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        todoList.todos.forEach(function (todo) {
            var temp = document.createElement('li');
            
            if (todo.completed) {
                temp.textContent = '(x) ' +  todo.todoText;
            } else {
                temp.textContent ='( ) ' + todo.todoText;
            }

            todosUl.appendChild(temp);
        });
    }
};


todoList.addTodo('go to the gym today!');
todoList.addTodo('second Todo');
view.displayTodos();
