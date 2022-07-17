import ItemContainer from "./item-container";
import Project from "./project";
import Note from "./note";
import ToDo from "./to-do";

// Create A Container of All Projects.
const Model = () => {
  const toolTypes = ["Note", "ToDo"];
  const projectList = ItemContainer("Project");
  let curProjIndex = 0; // index of the currentProject
  const addProject = (projectName = `Project ${projectList.getLength()}`) => {
    projectList.addItem(Project(projectName, toolTypes));
  };
  const deleteProject = (projectIndex) => {
    projectList.removeItem(projectIndex);
  };
  const getCurrentProject = () => {
    return projectList.itemList[curProjIndex];
  };
  const switchProject = (name) => {
    return projectList.getItemByName(name)
  };
  const addTool = (toolType, parameters) => {
    // get container for tool type in current project
    let newTool
    if (toolType == "Note") {
        newTool = Note(parameters)
    } else if (toolType == "ToDo") {
        newTool = ToDo(parameters)
    }
    const curProject = projectList.itemList[curProjIndex];
    curProject.addItem(toolType, newTool);
  };

  const removeTool = () => {};
  const editTool = () => {};
  return {
    addProject,
    deleteProject,
    getCurrentProject,
    switchProject,
    addTool,
    removeTool,
    editTool,
  };
};

export default Model;
