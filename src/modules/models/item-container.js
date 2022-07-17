// You can contain ONE type of object (notes, to-dos, etc)
const ItemContainer = (kind) => {
  const itemType = kind;
  let itemList = [];

  const addItem = (itemToAdd) => {
    console.log(`${itemToAdd} added`);
    itemList.push(itemToAdd);
  };

  const removeItem = (removeIndex) => {
    console.log(`${removeIndex} index item removed.`);
    itemList.splice(removeIndex, 1);
  };

  const getItemByName = (name) => {
    const itemIndex = itemList.findIndex((item) => {
      return item.name === name;
    });
    return itemList[itemIndex];
  };

  const getLength = () => {
    return itemList.length;
  };

  return {
    get itemList() {
      return itemList;
    },
    get itemType() {
      return itemType;
    },
    addItem,
    removeItem,
    getLength,
    getItem,
  };
};

export default ItemContainer;
