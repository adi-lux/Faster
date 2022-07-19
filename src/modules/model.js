import ItemContainer from "./models/item-container";
import Project from "./models/project";
import Note from "./models/note";
import ToDo from "./models/todo";

// Create A Container of All Projects.
function Model() {
  const toolTypes = ["Note", "ToDo"];
  const projectList = ItemContainer("Project");
  let curProjIndex = 0; // index of the currentProject
  let projCounter = 0;
  let observers = [];
  const addObservers = (views) => {
    views.forEach( (observer) => {
      observers.push(observer)
    })
  };

  function updateObservers(model) {
    observers.forEach((observer) => {
      observer.updateView(model);
    });
  };

  const updateObserver = (givenObserverName, model) => {
    const index = observers.findIndex(observer => observer.observerName === givenObserverName)
    console.log(model);
    observers[index].updateView(model)
    
  }
  // To Display the Current Project onto the Screen
  const getCurrentProject = () => projectList.itemList[curProjIndex];

  // To Add a project to the tab (do not switch to it.)
  const addProject = (projectName = `Project ${projCounter}`) => {
    projectList.addItem(Project(projectName, toolTypes));
    projCounter++;
  };

  // To Get a list of all x's and y's
  const getTypeNameList = (type) => {
    const curr = getCurrentProject();
    return curr.getTypeNameList(type);
  };

  const getProjectByName = (projectName) => {
    return projectList.getItemByName(projectName);
  };

  const getProjectIndexByName = (projectName) => {
    return projectList.getItemIndexByName(projectName);
  };

  // To delete a project
  const deleteProject = (projectName) => {
    const projIndex = getProjectIndexByName(projectName);
    projectList.removeItem(projIndex);
  };

  // To change any project's name
  const editProjectName = (originalName, newProjectName) => {
    const editProj = getProjectByName(originalName);
    editProj.name = newProjectName;
  };

  // When clicked, switch Project.
  const switchProject = (name) => {
    curProjIndex = projectList.getItemIndexByName(name);
  };

  // To add a new Tool
  const addTool = (toolType, parameters) => {
    let newTool;
    if (toolType === "Note") {
      newTool = Note(parameters);
    } else if (toolType === "ToDo") {
      newTool = ToDo(parameters);
    }
    const curProject = projectList.itemList[curProjIndex];
    curProject.addItem(toolType, newTool);
  };

  // To delete a tool
  const deleteTool = (toolType, name) => {
    console.log(name);
    const curProj = getCurrentProject();
    curProj.deleteItem(toolType, name);
  };

  // To change the contents of a tool
  const editTool = (toolType, name, parameters) => {
    const curProj = getCurrentProject();
    curProj.editItem(toolType, name, parameters);
  };

  addProject(); // initializes the project

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
    getTypeNameList,
    switchProject,
    addTool,
    deleteTool,
    editTool,
    updateObservers,
    addObservers,
    updateObserver
  };
}

export default Model;
