import Model from "./modules/model";
import "./style.scss";

const main = () => {
  const newModel = Model();
  newModel.addProject("APples");
  newModel.addProject();
  newModel.addProject("Apple");
  newModel.deleteProject("APples");
  newModel.addTool("ToDo", ["Apple", "Dog", "Fire", "Force"]);
  const tnList = newModel.getTypeNameList("ToDo");
  newModel.switchProject("Apple");
  console.log(newModel.getCurrentProject());
  newModel.addTool("ToDo", ["Fire", "Alps", "Norse", "Dorgs"]);
  const tnListTwo = newModel.getTypeNameList("ToDo");
  console.log(tnListTwo);
  newModel.editProjectName("Apple", "Dairy");
  newModel.editTool("ToDo", "Fire", ["Zoinks!", "Scoobs", "Man", "George"]);
  console.log(newModel.getTypeNameList("ToDo"));

  console.log(newModel.projects);
};

main();
// Todos
// Projects
// View / UI
// Button interacts with tools
// Projects implement notes and to-dos
// Notes are any text (REMEMBER TO SANITIZE)
// To dos are title,  due date, color/importance
// Expanding & Deleting To Dos
// Storing To Do Lists on Local Storage
