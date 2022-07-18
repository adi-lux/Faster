import ItemContainer from "./models/item-container";
import Project from "./models/project";
import Note from "./models/note";
import ToDo from "./models/to-do";

// Create A Container of All Projects.
const Model = () => {
  const toolTypes = ["Note", "ToDo"];
  const projectList = ItemContainer("Project");
  let curProjIndex = 0; // index of the currentProject
  let projCounter = 0;
  const getCurrentProject = () => projectList.itemList[curProjIndex]; //y

  const addProject = (projectName = `Project ${projCounter}`) => {
    //y
    projectList.addItem(Project(projectName, toolTypes));
    projCounter++;
  };

  const getTypeNameList = (type) => {
    //y
    const curr = getCurrentProject();
    return curr.getTypeNameList(type);
  };

  const getProjectByName = (projectName) => {
    //y
    return projectList.getItemByName(projectName);
  };

  const getProjectIndexByName = (projectName) => {
    //y
    return projectList.getItemIndexByName(projectName);
  };
  const deleteProject = (projectName) => {
    //y
    const projIndex = getProjectIndexByName(projectName);
    projectList.removeItem(projIndex);
  };

  const editProjectName = (originalName, newProjectName) => {
    //y
    const editProj = getProjectByName(originalName);
    editProj.name = newProjectName;
  };

  const switchProject = (name) => {
    //y
    curProjIndex = projectList.getItemIndexByName(name);
  };

  const addTool = (toolType, parameters) => {
    //y
    // get container for tool type in current project
    let newTool;
    if (toolType === "Note") {
      newTool = Note(parameters);
    } else if (toolType === "ToDo") {
      newTool = ToDo(parameters);
    }
    const curProject = projectList.itemList[curProjIndex];
    curProject.addItem(toolType, newTool);
  };

  const deleteTool = (toolType, name) => {
    //y
    const curProj = getCurrentProject();
    curProj.deleteItem(toolType, name);
  };

  const editTool = (toolType, name, parameters) => {
    //y
    const curProj = getCurrentProject();
    curProj.editItem(toolType, name, parameters);
  };

  return {
    get projects() {
      //y
      return projectList.itemList;
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
  };
};

export default Model;
