import Model from "./modules/model";
import ViewController from "./modules/view-controller"
import "./style.scss";

const main = () => {
  const model = Model();
  const viewController = ViewController(model)
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
