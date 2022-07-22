import format from 'date-fns/format';

function TodoView(todoController) {
  const controller = todoController;
  const observerName = 'ToDo';

  const getParentTodo = (e) => e.target.parentElement;
  const getTodoContents = (e, index) =>
    getParentTodo(e).children[index].textContent;

  const onInput = (e) => {
    const newPriority = e.target.value;
    console.log(newPriority);
    if (newPriority === '1') {
      e.target.style.backgroundColor = 'aquamarine';
    } else if (newPriority === '2') {
      e.target.style.backgroundColor = 'rgb(255, 255, 205)';
    } else {
      e.target.style.backgroundColor = 'rgb(255, 139, 126)';
    }
  };
  const addTodoView = () => {
    const originalAddButton = document.querySelector('.add-todo-button');
    originalAddButton.disabled = true;

    const todoWindow = document.createElement('div');
    todoWindow.className = 'add-todo-window';
    const todoForm = document.createElement('form');
    todoForm.className = 'add-todo-form';

    const todoName = document.createElement('input');
    todoName.type = 'text';
    todoName.className = 'add-todo-name';
    todoName.placeholder = 'Bob Jones';
    const todoContent = document.createElement('textarea');
    todoContent.className = 'add-todo-content';
    todoContent.placeholder = 'placeholder description';

    const todoDueDate = document.createElement('input');
    todoDueDate.type = 'date';
    todoDueDate.className = 'add-todo-due-date';
    todoDueDate.maxLength = 8;

    const todoPriority = document.createElement('input');
    todoPriority.type = 'number';
    todoPriority.className = 'add-todo-priority';
    todoPriority.style.backgroundColor = 'aquamarine';
    todoPriority.value = 1;
    todoPriority.max = 3;
    todoPriority.min = 1;
    todoPriority.maxLength = 1;
    todoPriority.addEventListener('input', onInput);

    const todoButton = document.createElement('input');
    todoButton.type = 'button';
    todoButton.value = 'Add';
    todoButton.className = 'true-add-todo-button';

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
    const backButton = document.querySelector('.todo');
    backButton.style.visibility = 'hidden';

    const todoWindow = document.createElement('div');
    todoWindow.className = 'edit-todo-window';
    const todoForm = document.createElement('form');
    todoForm.className = 'edit-todo-form';

    const todoName = document.createElement('input');
    todoName.type = 'text';
    todoName.value = editTodoName;
    todoName.className = 'edit-todo-name';

    const todoContent = document.createElement('textarea');
    todoContent.value = editTodoContent;
    todoContent.className = 'edit-todo-content';

    const todoDueDate = document.createElement('input');
    todoDueDate.type = 'date';
    todoDueDate.value = format(new Date(editTodoDueDate), 'MM/dd/yyyy');
    todoDueDate.className = 'edit-todo-due-date';
    todoDueDate.maxLength = 8;

    const todoPriority = document.createElement('input');
    todoPriority.type = 'number';
    todoPriority.value = editTodoPriority;
    todoPriority.className = 'edit-todo-priority';
    todoPriority.value = 1;
    todoPriority.max = 3;
    todoPriority.min = 1;
    todoPriority.addEventListener('input', onInput);
    if (editTodoPriority === '1') {
      todoPriority.style.backgroundColor = 'aquamarine';
    } else if (editTodoPriority === '2') {
      todoPriority.style.backgroundColor = 'rgb(255, 255, 205)';
    } else {
      todoPriority.style.backgroundColor = 'rgb(255, 139, 126)';
    }
    const todoButton = document.createElement('input');
    todoButton.type = 'button';
    todoButton.value = 'edit';
    todoButton.className = 'true-todo-edit-button';

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
    todoForm.style.visibility = 'visible';
    getParentTodo(e).replaceChildren(todoForm);
  };

  const holderGenerator = (parameters) => {
    const [todoName, todoDescription, todoDueDate, todoPriority] = parameters;

    const tdHolder = document.createElement('form');
    tdHolder.className = 'todo';
    const tdNameHeader = document.createElement('h3');
    tdNameHeader.textContent = todoName;
    tdNameHeader.placeholder = 'Bob Jones';
    tdNameHeader.className = 'todo-view-name';

    const tdDescription = document.createElement('p');
    tdDescription.textContent = todoDescription;
    tdDescription.className = 'todo-description';
    //tdDescription.style.visibility = 'hidden';

    const tdDueDate = document.createElement('p');
    tdDueDate.textContent = format(new Date(todoDueDate), 'MM/dd/yyyy');
    tdDueDate.className = 'todo-due-date';

    const tdPriority = document.createElement('p');
    tdPriority.textContent = todoPriority;
    tdPriority.className = 'todo-priority';
    if (todoPriority === '1') {
      tdPriority.style.backgroundColor = 'aquamarine';
    } else if (todoPriority === '2') {
      tdPriority.style.backgroundColor = 'rgb(255, 255, 205)';
    } else {
      tdPriority.style.backgroundColor = 'rgb(255, 139, 126)';
    }

    // const expandTodoButton = document.createElement('input');
    // expandTodoButton.type = 'button';
    // expandTodoButton.className = 'expand-todo-button';
    // //expandTodoButton.value = 'show';

    // const shrinkTodoButton = document.createElement('input');
    // shrinkTodoButton.type = 'button';
    // shrinkTodoButton.className = 'shrink-todo-button';
    // shrinkTodoButton.disabled = true;
    // shrinkTodoButton.style.visibility = 'hidden';
    // shrinkTodoButton.value = 'hide';

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
    //tdHolder.appendChild(expandTodoButton);
    //tdHolder.appendChild(shrinkTodoButton);
    tdHolder.appendChild(editTodoButton);
    tdHolder.appendChild(deleteTodoButton);
    return tdHolder.cloneNode(true);
  };

  // const shrinkTodoView = (e) => {
  //   const todoDescription = document.querySelector('.todo-description');
  //   todoDescription.style.visibility = 'hidden';
  //  // const expandButton = document.querySelector('.expand-todo-button');
  //  // expandButton.style.visibility = 'visible';
  //   //expandButton.disabled = false;

  //   e.target.style.visibility = 'hidden';
  //   e.target.disabled = true;
  //   updateEventHandlers();
  // };
  // const expandTodoView = (e) => {
  //   const todoDescription = document.querySelector('.todo-description');
  //   console.log(todoDescription);
  //   todoDescription.style.visibility = 'visible';
  //   const shrinkButton = document.querySelector('.shrink-todo-button');
  //   shrinkButton.style.visibility = 'visible';
  //   shrinkButton.disabled = false;

  //   e.target.style.visibiformatlity = 'hidden';
  //   e.target.disabled = true;
  //   updateEventHandlers();
  // };

  const updateEventHandlers = () => {
    const editButtons = document.querySelectorAll('.edit-todo-button');
    const deleteButtons = document.querySelectorAll('.delete-todo-button');
    //const expandButtons = document.querySelectorAll('.expand-todo-button');
   // const shrinkButtons = document.querySelectorAll('.shrink-todo-button');
    deleteButtons.forEach((button) =>
      button.addEventListener('click', controller.deleteTodo)
    );
    editButtons.forEach((button) =>
      button.addEventListener('click', editTodoView)
    );
    // expandButtons.forEach((button) => {
    //   button.addEventListener('click', expandTodoView);
    // });
    // shrinkButtons.forEach((button) => {
    //   button.addEventListener('click', shrinkTodoView);
    // });
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
    addTodoViewButton.textContent = 'Add To-Do';
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
