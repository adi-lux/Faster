const NoteController = (givenModel) => {
  const model = givenModel;
  
  const getParentNote = (e) => {
    return e.target.parentElement
  }
  const getNoteName = (e) => {
    return e.target.parentElement.children[0].textContent
  }

  const update = () => {
    model.updateObserver("Note", model)
  }
  const addNote = (e) => {
    e.preventDefault();
    const properties = [e.target.form[0].value, e.target.form[1].value]
    model.addTool("Note", properties)
    update()
  }
  const editNote = (e) => {

    const properties = [e.target.form[0].value, e.target.form[1].value]
    const noteName = e.target.form[3].value
    model.editTool("Note", noteName, properties)
    model.updateObserver("Note", model)
    update()
  }
  const deleteNote = (e) => {

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
