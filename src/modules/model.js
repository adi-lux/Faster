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
  let initializing = true;

  const addObservers = (views) => {
    views.forEach((observer) => {
      observers.push(observer);
    });
  };

  function updateObservers(model) {
    // updateStorage();
    observers.forEach((observer) => {
      observer.updateView(model);
    });
  }

  const updateObserver = (givenObserverName, model) => {
    // updateStorage();

    const index = observers.findIndex(
      (observer) => observer.observerName === givenObserverName
    );
    observers[index].updateView(model);
  };


  const switchProject = (name) => {
    curProjIndex = projectList.getItemIndexByName(name);
    localStorage.setItem('originalName', name)
  };


  const getCurrentProject = () =>
  {
    try {
      console.log([projectList]);
      return projectList.itemList[curProjIndex];

    }
    catch {
      return projectList.itemList[0];
    }
  } 
  const getCurrentProjectName = () =>  {
      return  projectList.itemNameList[curProjIndex]
  }

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

  const getProjectByName = (projectName) =>
    projectList.getItemByName(projectName);

  const getProjectIndexByName = (projectName) =>
    projectList.getItemIndexByName(projectName);

  const deleteProjectStorage = (givenProjName) => {
    const projToDoList = JSON.parse(
      localStorage.getItem(`${givenProjName}-ToDoList`)
    );
    const projNoteList = JSON.parse(
      localStorage.getItem(`${givenProjName}-NoteList`)
    );
    if (projToDoList) {
      projToDoList.forEach((todoName) => {
        localStorage.removeItem(`${givenProjName}-ToDoList-${todoName}`);
      });
    }
    if (projNoteList) {
      projNoteList.forEach((noteName) => {
        localStorage.removeItem(`${givenProjName}-ToDoList-${noteName}`);
      });
    }

    localStorage.removeItem(`${givenProjName}-ToDoList`);
    localStorage.removeItem(`${givenProjName}-NoteList`);
  };
  const deleteProject = (projectName) => {
    const projIndex = getProjectIndexByName(projectName);
    projectList.removeItem(projIndex);
    deleteProjectStorage(projectName);
    localStorage.removeItem(projectName);
    if (curProjIndex === projIndex) {
      curProjIndex = 0;
    }
    if (projectList.length === 0) {
      projCounter = 0;
      curProjIndex = 0;
      addProject();
    }
  };

  

  const updateStorageList = (project, type) => {
    const newItemNameList =
      getProjectByName(project).getTypeNameList(type).itemNameList;
    console.log(newItemNameList);
    localStorage.setItem(
      `${project}-${type}List`,
      JSON.stringify(newItemNameList)
    );
  };

  const editProjectStorage = (originalName, newProjectName) => {
    const projToDoList = JSON.parse(
      localStorage.getItem(`${originalName}-ToDoList`)
    );
    const projNoteList = JSON.parse(
      localStorage.getItem(`${originalName}-NoteList`)
    );

    if (projToDoList) {
      projToDoList.forEach((todoName) => {
        localStorage.setItem(`${newProjectName}-ToDoList-${todoName}`, projToDoList);
      });
    }
    if (projNoteList) {
      projNoteList.forEach((noteName) => {
        localStorage.setItem(`${newProjectName}-NoteList-${noteName}`, projNoteList);
      });
    }

    localStorage.removeItem(`${originalName}-ToDoList`);
    localStorage.removeItem(`${originalName}-NoteList`);
  }
  const editProjectName = (originalName, newProjectName) => {
    updateStorage()
    if (getCurrentProjectName() === originalName) {
    }

    editProjectStorage(originalName, newProjectName)
    const editProj = getProjectByName(originalName);
    editProj.name = newProjectName;
    switchProject(newProjectName)


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
    updateStorageList(getCurrentProjectName(), toolType);
    if (!initializing) {
      updateStorage()
    }
  };

  const deleteTool = (toolType, name) => {
    const curProj = getCurrentProject();
    curProj.deleteItem(toolType, name);
    updateStorageList(getCurrentProjectName(), toolType);
    if (!initializing) {
      updateStorage()
    }
  };

  const editTool = (toolType, name, parameters) => {
    const curProj = getCurrentProject();
    curProj.editItem(toolType, name, parameters);
    updateStorageList(getCurrentProjectName(), toolType);
    if (!initializing) {
      updateStorage()
    }
  };

  const updateStorage = () => {
    const originalProjectName = getCurrentProjectName(); // 0
    const fullProjectList = JSON.parse(localStorage.getItem('projectList'));
    localStorage.setItem('originalName', originalProjectName)
    if (fullProjectList) {
      fullProjectList.forEach((projectName) => {
        switchProject(projectName);

        const todoPropertyList = JSON.parse(
          localStorage.getItem(`${projectName}-ToDoList`)
        );

        console.log(
          JSON.parse(localStorage.getItem(`${projectName}-ToDoList`))
        );

        const notePropertyList = JSON.parse(
          localStorage.getItem(`${projectName}-NoteList`)
        );
        console.log(
          JSON.parse(localStorage.getItem(`${projectName}-ToDoList`))
        );

        if (todoPropertyList) {
          console.log('prop', todoPropertyList);
          const todoList =
            getProjectByName(projectName).getTypeNameList('ToDo');
          todoPropertyList.forEach((ToDo) => {
            const newToDo = todoList.getItemByName(ToDo);
            localStorage.setItem(
              `${projectName}-ToDoList-${ToDo}`,
              JSON.stringify(newToDo)
            );
          });
        }

        if (notePropertyList) {
          const noteList =
            getProjectByName(projectName).getTypeNameList('Note');
          notePropertyList.forEach((Note) => {
            const newNote = noteList.getItemByName(Note);
            localStorage.setItem(
              `${projectName}-NoteList-${Note}`,
              JSON.stringify(newNote)
            );
          });
        }
      });
      switchProject(originalProjectName);
    }
  };
  const clearStorage = () => {
    localStorage.clear();
  };

  const populateStorage = () => {
    initializing = true;
    const originalCurrentName = localStorage.getItem('originalName')
    const currentProjectList = JSON.parse(localStorage.getItem('projectList'));
    if (currentProjectList) {
      currentProjectList.forEach((projectName) => {
        addProject(projectName);
        switchProject(projectName);
        const currentTodoNameList = JSON.parse(
          localStorage.getItem(`${projectName}-ToDoList`)
        );
        console.log(
          JSON.parse(localStorage.getItem(`${projectName}-ToDoList`))
        );
        if (currentTodoNameList) {
          currentTodoNameList.forEach((todoName) => {
            const currentTodo = JSON.parse(
              localStorage.getItem(`${projectName}-ToDoList-${todoName}`)
            );
            console.log(currentTodo);
            addTool('ToDo', [
              currentTodo.name,
              currentTodo.description,
              currentTodo.dueDate,
              currentTodo.priority,
            ]);
          });
        }
        const currentNoteNameList = JSON.parse(
          localStorage.getItem(`${projectName}-NoteList`)
        );
        if (currentNoteNameList) {
          currentNoteNameList.forEach((noteName) => {
            const currentNote = JSON.parse(
              localStorage.getItem(`${projectName}-NoteList-${noteName}`)
            );
            addTool('Note', [currentNote.name, currentNote.textContent]);
          });
        }
      });
      switchProject(originalCurrentName);
    } else {
      addProject();
    }
    initializing = false;
  };

  populateStorage();

  return {
    get projects() {
      return projectList.itemList;
    },
    get names() {
      const projects = projectList.itemList;
      const projNames = projects.map((project) => project.name);
      localStorage.setItem('projectList', JSON.stringify(projNames));
      return projNames;
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
