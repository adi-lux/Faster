import ItemContainer from './models/item-container';
import Project from './models/project';
import Note from './models/note';
import ToDo from './models/todo';

function Model() {
  const toolTypes = ['Note', 'ToDo'];
  const projectList = ItemContainer('Project');
  let curProjIndex = 0;
  let projCounter = 0;
  const observers = [];
  const addObservers = (views) => {
    views.forEach((observer) => {
      observers.push(observer);
    });
  };

  function updateObservers(model) {
    observers.forEach((observer) => {
      observer.updateView(model);
    });
  }

  const updateObserver = (givenObserverName, model) => {
    const index = observers.findIndex(
      (observer) => observer.observerName === givenObserverName,
    );
    observers[index].updateView(model);
  };

  const getCurrentProject = () => projectList.itemList[curProjIndex];
  const getCurrentProjectName = () => getCurrentProject().name;

  const addProject = (projectName = `Project ${projCounter}`) => {
    const newProject = Project(projectName, toolTypes);
    projectList.addItem(newProject);
    projCounter += 1;
    return newProject;
  };

  const getTypeNameList = (type) => {
    const curr = getCurrentProject();
    return curr.getTypeNameList(type);
  };

  const getProjectByName = (projectName) => projectList.getItemByName(projectName);

  const getProjectIndexByName = (projectName) => projectList.getItemIndexByName(projectName);

  const deleteProject = (projectName) => {
    const projIndex = getProjectIndexByName(projectName);
    projectList.removeItem(projIndex);
    if (curProjIndex === projIndex) {
      curProjIndex = 0;
    }
    if (projectList.length === 0) {
      projCounter = 0;
      curProjIndex = 0;
      addProject();
    }
  };

  const editProjectName = (originalName, newProjectName) => {
    const editProj = getProjectByName(originalName);
    editProj.name = newProjectName;
  };

  const switchProject = (name) => {
    curProjIndex = projectList.getItemIndexByName(name);
  };

  const addTool = (toolType, parameters) => {
    let newTool;
    if (toolType === 'Note') {
      newTool = Note(parameters);
    } else if (toolType === 'ToDo') {
      newTool = ToDo(parameters);
    }
    const curProject = projectList.itemList[curProjIndex];
    curProject.addItem(toolType, newTool);
  };

  const deleteTool = (toolType, name) => {
    const curProj = getCurrentProject();
    curProj.deleteItem(toolType, name);
  };

  const editTool = (toolType, name, parameters) => {
    const curProj = getCurrentProject();
    curProj.editItem(toolType, name, parameters);
  };

  addProject();
  return {
    get projects() {
      return projectList.itemList;
    },
    get names() {
      const projects = projectList.itemList;
      return projects.map((project) => project.name);
    },
    addProject,
    deleteProject,
    editProjectName,
    getCurrentProject,
    getCurrentProjectName,
    getTypeNameList,
    switchProject,
    addTool,
    deleteTool,
    editTool,
    updateObservers,
    addObservers,
    updateObserver,
  };
}

export default Model;
