import ProjectsView from './views/projects-view';
import TodoView from './views/todos-view';
import NotesView from './views/notes-view';

const View = (givenController) => {
  const controller = givenController;
  const { model } = givenController;
  const projView = ProjectsView(controller.projectController);
  const notesView = NotesView(controller.noteController);
  const todoView = TodoView(controller.todoController);
  model.addObservers([projView, todoView, notesView]);
  model.updateObservers(controller.model);
};

export default View;
