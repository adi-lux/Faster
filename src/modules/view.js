import ProjectsView from "./views/projects-view";
import TodoView from "./views/todo-view"
import NotesView from "./views/notes-view";


const View = (controller) => {
  // Updates view from the model.

  // VIEW UPDATERS
  const projView = ProjectsView(controller.projectController)
  const notesView = NotesView(controller.noteController)
  console.log(notesView);
  const todoView = TodoView(controller.todoController)
  controller.model.addObservers([projView, todoView, notesView])
};

export default View;
