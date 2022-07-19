const TodoController = (givenModel) => {
    const model = givenModel
    const addTodo = () => {}
    const editTodo = () => {}
    const deleteTodo = () => {}
    const addTodoButton = () => {}
    const expandTodo = () => {}
    return {
        get model() {
          return model;
        },
        addTodo,
        editTodo,
        deleteTodo,
        addTodoButton,
        expandTodo
      };
} 
export default TodoController