// Model for a To-Do

const ToDo = ([
  newTitle = "",
  newDescription = "",
  newDueDate = "",
  newPriority = 0,
]) => {
  let title = newTitle; //Placeholder will be in HTML
  let description = newDescription; //Placeholder will be in HTML
  let dueDate = newDueDate; // will implement a time library later.
  let priority = newPriority; // maybe an ENUM that represents variables by priority

  return {
    get title() {},
    set title(givenTitle) {},
    get description() {},
    set description(givenTitle) {},
    get dueDate() {},
    set dueDate(givenDate) {},
    get priority() {},
    set priority(givenPriority) {},
  };
};

export default ToDo;
