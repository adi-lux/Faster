const ProjectController = (givenModel) => {
  const model = givenModel;
  const addProject = () => {};
  const editProjectName = () => {};
  const deleteProject = () => {};
  const addProjectButton = () => {};

  return {
    get model() {
      return model;
    },
    addProject,
    editProjectName,
    deleteProject,
    addProjectButton,
  };
};
export default ProjectController;
