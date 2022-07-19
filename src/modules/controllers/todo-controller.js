const TodoController = (givenModel) => {
  const model = givenModel;

  const getTodoName = (e) => e.target.parentElement.children[0].textContent;

  const update = () => {
    model.updateObserver('ToDo', model);
  };
  const addTodo = (e) => {
    e.preventDefault();
    const properties = [
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[2].value,
      e.target.form[3].value,
    ];
    model.addTool('ToDo', properties);
    update();
  };
  const editTodo = (e) => {
    const properties = [
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[2].value,
      e.target.form[3].value,
    ];
    const todoName = e.target.form[5].value;
    model.editTool('ToDo', todoName, properties);
    update();
  };
  const deleteTodo = (e) => {
    const todoName = getTodoName(e);
    model.deleteTool('ToDo', todoName);
    update();
  };
  const expandTodo = () => {

  };
  return {
    get model() {
      return model;
    },
    addTodo,
    editTodo,
    deleteTodo,
    expandTodo,
  };
};
export default TodoController;
