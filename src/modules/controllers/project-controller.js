const ProjectController = (givenModel) => {
  const model = givenModel;
  const update = () => {
    model.updateObserver('Project', model);
  };
  const addProject = () => {
    const newProject = model.addProject();
    update();
    return newProject;
  };
  const editProjectName = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newName = e.target.form[0].value;
      const oldName = e.target.form[1].value;
      model.editProjectName(oldName, newName);
      update();
    }
  };
  const deleteProject = (e) => {
    model.deleteProject(e.target.parentNode.children[0].textContent);
    model.updateObservers(model);
  };
  const switchProject = (e) => {
    model.switchProject(e.target.textContent);
    model.updateObservers(model);
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
