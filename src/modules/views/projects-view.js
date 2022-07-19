
function ProjectsView(projectController) {
  const controller = projectController;
  const observerName = 'Project';

  

  const getParentNote = (e) => e.target.parentElement;
  const getNoteContents = (e, index) => getParentNote(e).children[index].textContent;


  const editProjectView = (e) => {
    e.preventDefault()
    const editProjectName = getNoteContents(e, 0);
    const projectWindow = document.createElement('div');
    projectWindow.className = 'edit-proj-window';
    const projForm = document.createElement('form');

    const projName = document.createElement('input');
    projName.type = 'text';
    projName.value = editProjectName;

    const hiddenOriginal = document.createElement('input');
    hiddenOriginal.type = 'hidden';
    hiddenOriginal.value = editProjectName;



    projName.addEventListener('keydown', controller.editProjectName);
    projForm.appendChild(projName);
    projForm.appendChild(hiddenOriginal);
    projectWindow.appendChild(projForm);
    getParentNote(e).replaceChildren(projForm);
  };

  const addNewProjectView = (e) => {
    const newProj = controller.addProject()



  }

  const updateEventHandlers = () => {
    const switchProjects = document.querySelectorAll('.project-heading');
    switchProjects.forEach((project) => project.addEventListener('click', controller.switchProject));
    switchProjects.forEach((project) => project.addEventListener('contextmenu', editProjectView))
    const deleteProjects = document.querySelectorAll('.delete-project-button');
    deleteProjects.forEach((project) => {
      project.addEventListener('click', controller.deleteProject);
    });
  };

  const buildView = (projectList) => {
    const newProjectList = document.createElement('div');
    newProjectList.className = 'project-list';
    projectList.forEach((projectName) => {
      const newList = document.createElement('div');
      newList.className = 'project-title';
      const newName = document.createElement('h3');
      newName.className = 'project-heading';
      newName.textContent = projectName;
      const deleteProjectButton = document.createElement('p');
      deleteProjectButton.textContent = 'X';
      deleteProjectButton.className = 'delete-project-button';
      newList.appendChild(newName);
      newList.appendChild(deleteProjectButton);
      newProjectList.appendChild(newList);
    });
    return newProjectList.cloneNode(true);
  };

  const updateView = (model) => {
    const projectNames = model.names;
    const projView = document.querySelectorAll('.add-project-button, .project-list, .project-title');
    projView.forEach((node) => {
      node.remove();
    });
    const newProjView = buildView(projectNames);
    const sideBar = document.querySelector('.sidebar');
    sideBar.appendChild(newProjView);

    const addProjectButton = document.createElement('button')
    addProjectButton.textContent = "Add Project"
    addProjectButton.className = "add-project-button"
    addProjectButton.addEventListener("click", addNewProjectView)
    sideBar.appendChild(addProjectButton)
    updateEventHandlers();
    const currentNameHeader = document.querySelector('.show-name');
    currentNameHeader.textContent = model.getCurrentProjectName()
    
  };

  return {
    get observerName() {
      return observerName;
    },
    buildView,
    updateView,
  };
}

export default ProjectsView;
