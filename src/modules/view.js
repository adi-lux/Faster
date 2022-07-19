import ProjectsView from './views/projects-view';
import TodoView from './views/todo-view';
import NotesView from './views/notes-view';

const View = (controller) => {
  // Updates view from the model.
  const { model } = controller;
  // VIEW UPDATERS
  const projView = ProjectsView(controller.projectController);
  const notesView = NotesView(controller.noteController);
  const todoView = TodoView(controller.todoController);
  model.addObservers([projView, todoView, notesView]);
  model.updateObservers(controller.model);
};

export default View;
