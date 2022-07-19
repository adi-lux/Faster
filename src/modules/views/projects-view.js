function ProjectsView() {
  const observerName = "Project";

  const buildView = (projectList) => {
    const newList = document.createElement("div");
    newList.className = "project-list";
    projectList.forEach((project) => {
      const newName = document.createElement("h2");
      newName.className = "project-title";
      newName.textContent = project.name;
      newList.appendChild(newName);
    });
    return newList.cloneNode(true);
  };

  const updateView = (model) => {
    const projectNames = model.projects;
    const projView = document.querySelector("div.project-list");
    const newProjView = buildView(projectNames);
    const sideBar = document.querySelector("div.sidebar");
    sideBar.replaceChild(projView, newProjView);
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
