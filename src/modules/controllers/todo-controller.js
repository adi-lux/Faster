import format from 'date-fns/format'


const TodoController = (givenModel) => {
  const model = givenModel;

  const getTodoName = (e) => e.target.parentElement.children[0].textContent;

  const valiDate = (date) => {
    try {
      format(new Date(date), 'MM/dd/yyyy');
      
      return true;
      
    }
    catch {
      return false;
    }
  } 
  const updateModel = () => {
    model.updateObserver('ToDo', model);
  };
  const addTodo = (e) => {
    e.preventDefault();
    if (valiDate(e.target.form[2].value) === false) {

      return;
    }
    console.log('passed');
    const properties = [
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[2].value,
      e.target.form[3].value,
    ];
    model.addTool('ToDo', properties);
    updateModel();
  };
  const editTodo = (e) => {
    if (!valiDate(e.target.form[2].value)) {
      console.log('what');
      return;
    }
    const properties = [
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[2].value,
      e.target.form[3].value,
    ];
    const todoName = e.target.form[5].value;
    model.editTool('ToDo', todoName, properties);
    updateModel();
  };
  const deleteTodo = (e) => {
    const todoName = getTodoName(e);
    model.deleteTool('ToDo', todoName);
    updateModel();
  };
  return {
    get model() {
      return model;
    },
    addTodo,
    editTodo,
    deleteTodo,
  };
};
export default TodoController;
