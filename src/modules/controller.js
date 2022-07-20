import NoteController from './controllers/note-controller';
import ProjectController from './controllers/project-controller';
import TodoController from './controllers/todo-controller';

const Controller = (givenModel) => {
  const model = givenModel;
  const noteController = NoteController(model);
  const todoController = TodoController(model);
  const projectController = ProjectController(model);

  return {
    get model() {
      return model;
    },
    get noteController() {
      return noteController;
    },
    get todoController() {
      return todoController;
    },
    get projectController() {
      return projectController;
    },
  };
};
export default Controller;
