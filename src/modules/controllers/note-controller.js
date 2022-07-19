const NoteController = (givenModel) => {
  const model = givenModel;

  const getNoteName = (e) => {
    return e.target.parentElement.children[0].textContent
  }

  const update = () => {
    model.updateObserver("Note", model)
  }
  const addNote = (e) => {
    // update Model
    // call update on view

    e.preventDefault();
    const properties = [e.target.form[0].value, e.target.form[1].value]
    model.addTool("Note", properties)
    update()
  }
  const editNote = (e) => {
    // update Model
    // call update on view
    const properties = [e.target.form[0].value, e.target.form[1].value]
    const noteName = getNoteName(e)
    model.editTool("Note", noteName, properties)
    model.updateObserver("Note", model)
    update()
  }
  const deleteNote = (e) => {
    // update Model
    // call update on view
    const noteName = getNoteName(e)
    model.deleteTool("Note", noteName)
    update()

  }
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
