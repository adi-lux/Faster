const TodoController = (givenModel) => {
  const model = givenModel;
  const update = () => {
    model.updateObserver('ToDo', model);
  };
  const addTodo = () => {};
  const editTodo = () => {};
  const deleteTodo = () => {};
  const addTodoButton = () => {};
  const expandTodo = () => {};
  return {
    get model() {
      return model;
    },
    addTodo,
    editTodo,
    deleteTodo,
    addTodoButton,
    expandTodo,
  };
};
export default TodoController;
