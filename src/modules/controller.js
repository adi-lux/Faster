import NoteController from "./controllers/note-controller";
import ProjectController from "./controllers/project-controller";
import TodoController from "./controllers/todo-controller";

const Controller = (givenModel) => {
  // When you click on a button ((defined by instantiator)), it calls a Menu Opener.
  // When you save the information in that button, it calls a model updater.
  // Then, you save it with the view updater.
  const model = givenModel;
  const noteController = NoteController(model)
  const todoController = TodoController(model)
  const projectController = ProjectController(model)


  return {
    get model() {
      return model;
    },
    get noteController() {
      return noteController
    },
    get todoController() {
      return todoController
    },
    get projectController() {
      return projectController
    },
  };
};
export default Controller;
