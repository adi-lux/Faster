function TodoView(todoController) {
  const controller = todoController;
  const observerName = 'ToDo';

  const getParentTodo = (e) => e.target.parentElement;
  const getTodoContents = (e, index) => getParentTodo(e).children[index].textContent;

  const addTodoView = () => {
    const todoWindow = document.createElement('div');
    todoWindow.className = 'add-todo-window';
    const todoForm = document.createElement('form');

    const todoName = document.createElement('input');
    todoName.type = 'text';

    const todoContent = document.createElement('input');
    todoContent.type = 'text';

    const todoDueDate = document.createElement('input');
    todoDueDate.type = 'date';

    const todoPriority = document.createElement('input');
    todoPriority.type = 'number';

    const todoButton = document.createElement('input');
    todoButton.type = 'button';
    todoButton.value = 'Add';

    todoButton.addEventListener('click', controller.addTodo);
    todoForm.appendChild(todoName);
    todoForm.appendChild(todoContent);
    todoForm.appendChild(todoDueDate);
    todoForm.appendChild(todoPriority);
    todoForm.appendChild(todoButton);
    todoWindow.appendChild(todoForm);

    const container = document.querySelector('.todo-view');
    container.appendChild(todoWindow);
  };

  const editTodoView = (e) => {
    const editTodoName = getTodoContents(e, 0);
    const editTodoContent = getTodoContents(e, 1);
    const editTodoDueDate = getTodoContents(e, 2);
    const editTodoPriority = getTodoContents(e, 3);

    const todoWindow = document.createElement('div');
    todoWindow.className = 'edit-todo-window';
    const todoForm = document.createElement('form');

    const todoName = document.createElement('input');
    todoName.type = 'text';
    todoName.value = editTodoName;

    const todoContent = document.createElement('input');
    todoContent.type = 'text';
    todoContent.value = editTodoContent;

    const todoDueDate = document.createElement('input');
    todoDueDate.type = 'date';
    todoDueDate.value = editTodoDueDate;

    const todoPriority = document.createElement('input');
    todoPriority.type = 'number';
    todoPriority.value = editTodoPriority;

    const todoButton = document.createElement('input');
    todoButton.type = 'button';
    todoButton.value = 'edit';
    todoButton.className = 'trueToDoEditButton';

    const hiddenOriginal = document.createElement('input');
    hiddenOriginal.type = 'hidden';
    hiddenOriginal.value = editTodoName;

    todoButton.addEventListener('click', controller.editTodo);
    todoForm.appendChild(todoName);
    todoForm.appendChild(todoContent);
    todoForm.appendChild(todoDueDate);
    todoForm.appendChild(todoPriority);
    todoForm.appendChild(todoButton);
    todoForm.appendChild(hiddenOriginal);
    todoWindow.appendChild(todoForm);
    getParentTodo(e).replaceChildren(todoForm);
  };

  const holderGenerator = (parameters) => {
    const [todoName, todoDescription, todoDueDate, todoPriority] = parameters;
    let visibility;
    if (document.querySelector('.expand-todo-button') !== null) {
      visibility = 'visible';
    } else if (document.querySelector('.shrink-todo-button') !== null) {
      visibility = 'hidden';
    } else {
      visibility = 'hidden';
    }

    const tdHolder = document.createElement('form');
    tdHolder.className = 'todo';
    const tdNameHeader = document.createElement('h3');
    tdNameHeader.textContent = todoName;

    const tdDescription = document.createElement('p');
    tdDescription.textContent = todoDescription;
    tdDescription.className = 'todo-description';
    tdDescription.style.visibility = visibility;

    const tdDueDate = document.createElement('p');
    tdDueDate.textContent = todoDueDate;

    const tdPriority = document.createElement('p');
    tdPriority.textContent = todoPriority;

    const expandTodoButton = document.createElement('input');
    expandTodoButton.type = 'button';
    if (visibility === 'hidden') {
      expandTodoButton.className = 'expand-todo-button';
    } else {
      expandTodoButton.className = 'shrink-todo-button';
    }
    expandTodoButton.value = '...';

    const editTodoButton = document.createElement('input');
    editTodoButton.type = 'button';
    editTodoButton.className = 'edit-todo-button';
    editTodoButton.value = 'edit';

    const deleteTodoButton = document.createElement('input');
    deleteTodoButton.type = 'button';
    deleteTodoButton.className = 'delete-todo-button';
    deleteTodoButton.value = 'delete';

    tdHolder.appendChild(tdNameHeader);
    tdHolder.appendChild(tdDescription);
    tdHolder.appendChild(tdDueDate);
    tdHolder.appendChild(tdPriority);
    tdHolder.appendChild(expandTodoButton);
    tdHolder.appendChild(editTodoButton);
    tdHolder.appendChild(deleteTodoButton);
    return tdHolder.cloneNode(true);
  };

  const shrinkTodoView = (e) => {
    const todoName = getTodoContents(e, 0);
    const todoDescription = getTodoContents(e, 1);
    const todoDueDate = getTodoContents(e, 2);
    const todoPriority = getTodoContents(e, 3);

    const tdHolder = holderGenerator([
      todoName,
      todoDescription,
      todoDueDate,
      todoPriority,
    ]);
    getParentTodo(e).replaceChildren(tdHolder);
    updateEventHandlers();
  };
  const expandTodoView = (e) => {
    const todoName = getTodoContents(e, 0);
    const todoDescription = getTodoContents(e, 1);
    const todoDueDate = getTodoContents(e, 2);
    const todoPriority = getTodoContents(e, 3);

    const tdHolder = holderGenerator([
      todoName,
      todoDescription,
      todoDueDate,
      todoPriority,
    ]);
    getParentTodo(e).replaceChildren(tdHolder);
    updateEventHandlers();
  };

  const updateEventHandlers = () => {
    const editButtons = document.querySelectorAll('.edit-todo-button');
    const deleteButtons = document.querySelectorAll('.delete-todo-button');
    const expandButtons = document.querySelectorAll('.expand-todo-button');
    const shrinkButtons = document.querySelectorAll('.shrink-todo-button');
    deleteButtons.forEach((button) => button.addEventListener('click', controller.deleteTodo));
    editButtons.forEach((button) => button.addEventListener('click', editTodoView));
    expandButtons.forEach((button) => {
      button.addEventListener('click', expandTodoView);
    });
    shrinkButtons.forEach((button) => {
      button.addEventListener('click', shrinkTodoView);
    });
    const todoButton = document.querySelector('button.add-todo-button');
    todoButton.addEventListener('click', addTodoView);
  };

  const buildView = (givenTodoList) => {
    const newTodoView = document.createElement('div');
    newTodoView.className = 'todo-view';
    givenTodoList.forEach((todo) => {
      const tdHolder = holderGenerator(todo.parameters);
      newTodoView.appendChild(tdHolder);
    });

    const addTodoViewButton = document.createElement('button');
    addTodoViewButton.className = 'add-todo-button';
    addTodoViewButton.textContent = '+';
    newTodoView.appendChild(addTodoViewButton);
    return newTodoView.cloneNode(true);
  };

  const updateView = (model) => {
    const todoContainer = model.getTypeNameList('ToDo');
    const todoList = todoContainer.itemList;
    const todoView = document.querySelectorAll('.todo, .add-todo-window');
    todoView.forEach((node) => {
      node.remove();
    });
    const newTodoView = buildView(todoList);
    const contentSide = document.querySelector('div.todo-view');
    const actualContentSide = document.querySelector('div.content-side');
    actualContentSide.replaceChild(newTodoView, contentSide);
    updateEventHandlers();
  };

  updateEventHandlers();

  return {
    get observerName() {
      return observerName;
    },
    buildView,
    updateView,
  };
}

export default TodoView;
