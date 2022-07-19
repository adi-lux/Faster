function NotesView(noteController) {
  const controller = noteController;

  const observerName = "Note";

  const addNoteView = () => {
    const noteWindow = document.createElement("div");
    noteWindow.className = "add-note-window";
    const noteForm = document.createElement("form");
    //const noteNameLabel = document.createElement("label")
    const noteName = document.createElement("input");
    noteName.type = "text";
    //const noteContentLabel = document.createElement("label")
    const noteContent = document.createElement("input");
    noteContent.type = "textarea";
    const noteButton = document.createElement("input");
    noteButton.type = "button";

    noteButton.addEventListener("click", controller.addNote);
    noteForm.appendChild(noteName);
    noteForm.appendChild(noteContent);
    noteForm.appendChild(noteButton);
    noteWindow.appendChild(noteForm);

    const container = document.querySelector(".note-view");
    container.appendChild(noteWindow);
  };

  const editNoteView = () => {
    
  }
  const updateEventHandlers = () => {
      
    const editButtons = document.querySelectorAll(".edit-note-button")
    const deleteButtons = document.querySelectorAll(".delete-note-button") 
    deleteButtons.forEach(button => button.addEventListener("click", controller.deleteNote))
    editButtons.forEach(button => button.addEventListener("click", controller.editNote))
  };
  const buildView = (givenNoteList) => {
    const newNoteView = document.createElement("div");
    newNoteView.className = "note-view";
    givenNoteList.forEach((note) => {
      const [noteName, noteContent] = note.parameters;
      const noteHolder = document.createElement("div");
      noteHolder.className = "note";
      const noteNameHeader = document.createElement("h3");
      noteNameHeader.textContent = noteName;
      const noteNameContent = document.createElement("p");
      noteNameContent.textContent = noteContent;
      const editButton = document.createElement("input");
      editButton.type = "button"
      editButton.className = "edit-note-button"
      editButton.value = "edit";
      
      const deleteButton = document.createElement("input");
      deleteButton.value = "delete";
      editButton.type = "button"
      deleteButton.className = "delete-note-button"

      //buton for
      noteHolder.appendChild(noteNameHeader);
      noteHolder.appendChild(noteNameContent);
      noteHolder.appendChild(editButton);
      noteHolder.appendChild(deleteButton);
      newNoteView.appendChild(noteHolder);
    });
    return newNoteView.cloneNode(true);
  };

  const updateView = (model) => {
    const noteContainer = model.getTypeNameList("Note");
    const noteList = noteContainer.itemList;
    const noteView = document.querySelectorAll(".note, .add-note-window");
    noteView.forEach((node) => {
      node.remove();
    });
    const newNoteView = buildView(noteList);
    const contentSide = document.querySelector("div.todo-view");
    contentSide.appendChild(newNoteView);
    updateEventHandlers()

  };

  const instantiate = () => {
    const taskButton = document.querySelector("button.add-note-button");
    taskButton.addEventListener("click", addNoteView);
  };

  instantiate();

  return {
    get observerName() {
      return observerName;
    },
    get controller() {
      return controller;
    },
    buildView,
    updateView,
  };

}
export default NotesView;
