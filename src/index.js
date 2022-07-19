import Model from "./modules/model";
import Controller from "./modules/controller"
import View from "./modules/view"
import "./style.scss";

const main = () => {
  const model = Model();
  const controller = Controller(model)
  const view = View(controller)
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
