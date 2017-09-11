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
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function (position) {
        todoList.toggleCompleted(position);
        view.displayTodos();
    }
};

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        todoList.todos.forEach(function (todo, index) {
            var li = document.createElement('li');

            if (todo.completed) {
                li.textContent = '(x) ' + todo.todoText;
            } else {
                li.textContent = '( ) ' + todo.todoText;
            }

            li.id = index;
            li.appendChild(this.createDeleteButton());
            li.appendChild(this.createToggleButton());
            todosUl.appendChild(li);
        }, this);
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    createToggleButton: function () {
        var toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle';
        toggleButton.className = 'toggleButton';
        return toggleButton;
    },
    setUpEventListeners: function () {
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function (event) {
            var clickedElement = event.target;
            if (clickedElement.className == 'deleteButton') {
                handlers.deleteTodo(clickedElement.parentNode.id);
            }
        });

        todosUl.addEventListener('click', function (event) {
            var clickedElement = event.target;
            if (clickedElement.className == 'toggleButton') {
                handlers.toggleCompleted(clickedElement.parentNode.id);
            }
        });
    }

};

todoList.addTodo('go to the gym today!');
todoList.addTodo('second Todo');
view.setUpEventListeners();
view.displayTodos();
