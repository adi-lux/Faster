const View = (controller) => {
  // Updates view from the model.

  // VIEW UPDATERS

  const updateNotes = () => {
    const noteContainer = model.getTypeNameList(notes);
    const noteList = noteContainer.itemList;
    const noteListDOM = document.querySelector("div.note-view");
    noteList.forEach((note) => {
      [noteName, noteContent] = note.parameters;
      const item = document.createElement("div");
      item.className = "note";
      const noteNameHeader = document.createElement("h3");
      noteNameHeader.textContent = noteName;
      const noteNameContent = document.createElement("p");
      noteNameContent.textContent = noteContent;
      item.appendChild(noteNameHeader);
      item.appendChild(noteNameContent);
      noteListDOM.appendChild(item);
    });
  };

  const updateProjects = () => {
    const projectNames = model.names;
  };

  const updateToDos = () => {};
  const updateView = (model) => {
    updatePartialView("Project");
    updatePartialView("Note");
    updatePartialView("ToDo");
    //    getTypeNameList("ToDo") and getTypeNameList("Note") and .names
    // get : projects, and current project's todos and notes
    // parse: each individual list into HTML code.
    // display: inject each list with HTML.
    // updatePartialView -> update either project, notes, or todos
  };
};

export default View;
