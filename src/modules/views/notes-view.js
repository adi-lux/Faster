function NotesView(noteController) {
  const controller = noteController;

  const observerName = 'Note';

  const getParentNote = (e) => e.target.parentElement;
  const getNoteContents = (e, index) => getParentNote(e).children[index].textContent;
  const addNoteView = (e) => {
    e.target.disabled = true;
    const noteWindow = document.createElement('div');
    noteWindow.className = 'add-note-window';
    const noteForm = document.createElement('form');

    const noteName = document.createElement('input');
    noteName.type = 'text';
    noteName.className = 'input-note-name'
    noteName.required = true;

    const noteContent = document.createElement('textarea');
    noteContent.className = 'input-note-content'
    noteContent.required = true;
   
    const noteButton = document.createElement('input');
    noteButton.type = 'button';
    noteButton.value = 'Add';
    noteButton.className = 'input-note-button'

    noteButton.addEventListener('click', controller.addNote);
    noteForm.appendChild(noteName);
    noteForm.appendChild(noteContent);
    noteForm.appendChild(noteButton);
    noteWindow.appendChild(noteForm);

    const container = document.querySelector('.note-view');
    container.appendChild(noteWindow);
  };

  const editNoteView = (e) => {
    const editNoteName = getNoteContents(e, 0);
    const editNoteContent = getNoteContents(e, 1);
    const noteWindow = document.createElement('div');
    noteWindow.className = 'edit-note-window';
    const noteForm = document.createElement('form');

    const noteName = document.createElement('input');
    noteName.type = 'text';
    noteName.value = editNoteName;
    noteName.className = 'edit-note-name';

    const noteContent = document.createElement('textarea');
    noteContent.value = editNoteContent;
    noteContent.className = 'edit-note-content';

    const noteButton = document.createElement('input');
    noteButton.type = 'button';
    noteButton.value = 'edit';
    noteButton.className = 'true-edit-button';

    const hiddenOriginal = document.createElement('input');
    hiddenOriginal.type = 'hidden';
    hiddenOriginal.value = editNoteName;

    noteButton.addEventListener('click', controller.editNote);
    noteForm.appendChild(noteName);
    noteForm.appendChild(noteContent);
    noteForm.appendChild(noteButton);
    noteForm.appendChild(hiddenOriginal);
    noteWindow.appendChild(noteForm);
    getParentNote(e).replaceChildren(noteForm);
  };

  const updateEventHandlers = () => {
    const editButtons = document.querySelectorAll('.edit-note-button');
    const deleteButtons = document.querySelectorAll('.delete-note-button');
    deleteButtons.forEach((button) => button.addEventListener('click', controller.deleteNote));
    editButtons.forEach((button) => button.addEventListener('click', editNoteView));
    const taskButton = document.querySelector('button.add-note-button');
    taskButton.addEventListener('click', addNoteView);
  };

  const buildView = (givenNoteList) => {
    const newNoteView = document.createElement('div');
    newNoteView.className = 'note-view';
    givenNoteList.forEach((note) => {
      const [noteName, noteContent] = note.parameters;
      const noteHolder = document.createElement('form');
      noteHolder.className = 'note';

      const noteNameHeader = document.createElement('h3');
      noteNameHeader.textContent = noteName;

      const noteNameContent = document.createElement('p');
      noteNameContent.textContent = noteContent;

      const editButton = document.createElement('input');
      editButton.type = 'button';
      editButton.className = 'edit-note-button';
      editButton.value = 'edit';

      const deleteButton = document.createElement('input');
      deleteButton.value = 'delete';
      deleteButton.type = 'button';
      deleteButton.className = 'delete-note-button';

      noteHolder.appendChild(noteNameHeader);
      noteHolder.appendChild(noteNameContent);
      noteHolder.appendChild(editButton);
      noteHolder.appendChild(deleteButton);
      newNoteView.appendChild(noteHolder);
    });

    const addNoteViewButton = document.createElement('button');
    addNoteViewButton.className = 'add-note-button';
    addNoteViewButton.textContent = 'Add Note';
    newNoteView.appendChild(addNoteViewButton);
    return newNoteView.cloneNode(true);
  };

  const updateView = (model) => {
    const noteContainer = model.getTypeNameList('Note');
    const noteList = noteContainer.itemList;
    const noteView = document.querySelectorAll('.note, .add-note-window');
    noteView.forEach((node) => {
      node.remove();
    });
    const newNoteView = buildView(noteList);
    const contentSide = document.querySelector('div.note-view');
    const contentView = document.querySelector('.content-side');
    contentView.replaceChild(newNoteView, contentSide);
    updateEventHandlers();
  };

  updateEventHandlers();

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
