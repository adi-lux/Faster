// Model for a Project -> Projects can hold notes and to-dos
// makes Separate containers for notes and to-dos : will have to do that multilpe times

import ItemContainer from "./item-container";

const Project = (name, typeList) => {
  // A Map of Containers
  projectName = name;
  containerMap = new Map();
  typeList.forEach((type) => {
    console.log(`container ${type}`);
    containerMap.set(type, ItemContainer(type));
  });

  const _getTypeNameList = (type) => {
    return containerMap.get(type);
  };

  const addItem = (type, item) => {
    const typeContainer = _getTypeNameList(type);
    typeContainer.addItem(item);
  };

  const deleteItem = (type, index) => {
    const typeContainer = _getTypeNameList(type);
    typeContainer.deleteItem(index);
  };

  return {
    get projectName() {
      return projectName;
    },
    addItem,
    deleteItem,
  };
};

export default Project;
