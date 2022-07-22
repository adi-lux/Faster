const ProjectController = (givenModel) => {
  const model = givenModel;
  const updateModel = () => {
    model.updateObserver('Project', model);
  };
  const updateModelFull = () => {
    model.updateObservers(model);
  };
  const addProject = () => {
    if (model.names.length > 15) {
      return;
    }
    model.addProject();
    updateModel();
  };
  const editProjectName = (e) => {
    if (e.target.size < 16) {
      e.target.size = e.target.form[0].value.length;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      const newName = e.target.form[0].value;
      const oldName = e.target.form[1].value;
      model.editProjectName(oldName, newName);
      updateModel();
    }
  };
  const deleteProject = (e) => {
    model.deleteProject(e.target.parentNode.children[0].textContent);
    updateModelFull();
  };
  const switchProject = (e) => {
    model.switchProject(e.target.textContent);
    updateModelFull();
  };
  return {
    get model() {
      return model;
    },
    addProject,
    editProjectName,
    deleteProject,
    switchProject,
  };
};
export default ProjectController;
