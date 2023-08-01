import projectsFactory from "./projects";

let activeProject;

function setupDOMActiveProject() {
    const taskHeader = document.querySelector('.main').firstChild.firstChild;
    document.querySelector('.sidebar').addEventListener('click', () => {
        taskHeader.innerText = activeProject.getName();
    });
}

function setupDefaultProjects() {
    const inbox = setupProject('Inbox', '#inbox');
    const today = setupProject('Today', '#today');
    const week = setupProject('This Week', '#week');

    activeProject = inbox;
}

function setupProject(name, id) {
    const proj = projectsFactory();
    proj.setName(name);

    document.querySelector(id).addEventListener('click', () => {
        activeProject = proj;
    });

    return proj;
}

function setupProjectCreationButton() {
    const newProjButton = document.querySelector('.projects').querySelector('.add');

    newProjButton.addEventListener('click', () => {
        openAddProjectPopup(newProjButton);
    });
}

function openAddProjectPopup(newProjButton) {
    const projectsList = document.querySelector('.projects').lastChild;
    const popup = document.createElement('li');
    popup.setAttribute('id', 'add-project-popup');
    const form = document.createElement('form');
    const nameBox = document.createElement('input');

    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    addBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('type', 'button');
    addBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    cancelBtn.innerHTML = '<i class="fa-solid fa-x"></i>';

    form.append(nameBox);
    form.append(addBtn, cancelBtn);
    popup.append(form);
    projectsList.prepend(popup);

    addBtn.addEventListener('click', () => {
        projectsList.firstChild.remove(); 
        const newProjID = nameBox.value.toLocaleLowerCase();
        const newProjElement = createNewProject(newProjID);
        projectsList.insertBefore(newProjElement, projectsList.lastChild);
        const newProj = setupProject(nameBox.value, `#${newProjID}`);
    });

    cancelBtn.addEventListener('click', () => {
        projectsList.firstChild.remove();
    });
}

function createNewProject(id) {
    const newProjElement = document.createElement('li');
    newProjElement.setAttribute('id', id);
    newProjElement.innerHTML = '<i class="fa-solid fa-list-check"></i> '
    newProjElement.innerText += id;

    return newProjElement;
}

export {activeProject, setupDOMActiveProject, setupDefaultProjects, setupProjectCreationButton};