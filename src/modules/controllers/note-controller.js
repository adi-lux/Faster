const NoteController = (givenModel) => {
  const model = givenModel;

  const getNoteName = (e) => e.target.parentElement.children[0].textContent;

  const updateModel = () => {
    model.updateObserver('Note', model);
  };
  const addNote = (e) => {
    e.preventDefault();
    const properties = [e.target.form[0].value, e.target.form[1].value];
    if (e.target.form[0].value.length === 0 || e.target.form[1].value.length === 0) {
      return
    }
    model.addTool('Note', properties);
    updateModel();
  };
  const editNote = (e) => {
    const properties = [e.target.form[0].value, e.target.form[1].value];
    const noteName = e.target.form[3].value;
    if (e.target.form[0].value.length === 0 || e.target.form[1].value.length === 0) {
      return
    }
    model.editTool('Note', noteName, properties);
    updateModel();
  };
  const deleteNote = (e) => {
    const noteName = getNoteName(e);
    model.deleteTool('Note', noteName);
    updateModel();
  };

  return {
    get model() {
      return model;
    },
    addNote,
    editNote,
    deleteNote,
  };
};
export default NoteController;
