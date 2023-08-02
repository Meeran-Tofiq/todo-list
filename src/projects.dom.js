import {projectsFactory} from "./projects";

let activeProject;

function setupDOMActiveProject() {
    const taskHeader = document.querySelector('.main').firstChild.firstChild;
    document.querySelector('.sidebar').addEventListener('click', () => {
        taskHeader.innerText = activeProject.getName();
    });
}

function setupDefaultProjects() {
    const inbox = setupDefaultProject('Inbox', '#inbox');
    const today = setupDefaultProject('Today', '#today');
    const week = setupDefaultProject('This Week', '#week');

    activeProject = inbox;
}

function setupDefaultProject(name, id) {
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
    projectsList.insertBefore(popup, projectsList.lastChild);

    addBtn.addEventListener('click', () => {
        popup.remove();
        const newProj = createProject(nameBox.value);
        const newProjElement = createNewProjectElement(newProj);
        projectsList.insertBefore(newProjElement, projectsList.lastChild);
    });

    cancelBtn.addEventListener('click', () => {
        projectsList.firstChild.remove();
    });
}

function createProject(name) {
    const proj = projectsFactory();
    proj.setName(name);
    return proj;
}

function createNewProjectElement(proj) {
    const newProjElement = document.createElement('li');
    newProjElement.setAttribute('id', proj.getName().toLowerCase());
    newProjElement.innerHTML = `<i class="fa-solid fa-list-check"></i> ${proj.getName()}`;

    newProjElement.addEventListener('click', () => {
        activeProject = proj;
    });

    return newProjElement;
}

export {activeProject, setupDOMActiveProject, setupDefaultProjects, setupProjectCreationButton};