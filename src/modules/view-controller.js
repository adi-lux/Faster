const ViewController = (model) => {
    // When you click on a button ((defined by instantiator)), it calls a Menu Opener.
    // When you save the information in that button, it calls a model updater.
    // Then, you save it with the view updater.

    // MODEL UPDATERS

    const getSaveFields = (e) => {}
    const deleteTask = (type, name) => {}
    const saveTask = (type, parameters) => {} // saves to model upon click


    // MENU OPENERS

    const addTask = () => {} // add task menu
    const editTask = () => {}
    const addNote = () => {} // add note menu
    const editNote = () => {}
    const addProject = () => {} //adds Project Menu
    const editProject = () => {} //edits Project Menu 


    // INSTANTIATORS : Define the Event handlers.

    
    const taskForm = () => {
        const formholder = document.createElement("div")
        const savebutton = document.createElement("button")
        savebutton.addEventListener( "click", updateNotes)

    }
    const addTaskButton = () => {
        const taskButton = document.querySelector("button.add-note-button")
        taskButton.addEventListener("click", (e) => {
            console.log(`wow`);
            
        })
        
    }
    addTaskButton()

};
export default ViewController;
