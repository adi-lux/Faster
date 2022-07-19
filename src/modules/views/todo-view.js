function TodoView() {

  const observerName = "ToDo";


  const buildView = (givenTodoList) => {
    const newTodoView = document.createElement("div");
    newTodoView.className = "todo-view";
    givenTodoList.forEach((todo) => {
      const [todoName, todoDescription, todoDueDate, todoPriority] =
        todo.parameters;
      const tdHolder = document.createElement("div");
      tdHolder.className = "todo";

      const tdNameHeader = document.createElement("h3");
      tdNameHeader.textContent = todoName;
      tdHolder.appendChild(tdNameHeader);

      const tdDescription = document.createElement("p");
      tdDescription.textContent = todoDescription;
      tdHolder.appendChild(tdDescription);

      const tdDueDate = document.createElement("p");
      tdDueDate.textContent = todoDueDate;
      tdHolder.appendChild(tdDueDate);

      const tdPriority = document.createElement("p");
      tdPriority.textContent = todoPriority;
      tdHolder.appendChild(tdPriority);

      newTodoView.appendChild(tdHolder);
    });
    return newTodoView.cloneNode(true);
  };

  const updateView = (model) => {
    const todoContainer = model.getTypeNameList("ToDo");
    const todoList = todoContainer.itemList;
    const newTodoView = buildView(todoList);
    const todoView = document.querySelector("div.todo-view");
    const contentSide = document.querySelector("div.content-side");
    contentSide.replaceChild(todoView, newTodoView);
  };

  return { get observerName() {return observerName},buildView, updateView };
}

export default TodoView;
