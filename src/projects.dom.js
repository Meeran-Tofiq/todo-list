import projectsFactory from "./projects";

let activeProject;

function setupDOMActiveProject() {
    const taskHeader = document.querySelector('.main').firstChild.firstChild;
    document.querySelector('.sidebar').addEventListener('click', () => {
        taskHeader.innerText = activeProject.getName();
    });
}

function setupDefaultProjects() {
    const inbox = projectsFactory();
    inbox.setName('Inbox');
    const today = projectsFactory();
    today.setName('Today');
    const week = projectsFactory();
    week.setName('This Week');

    document.querySelector('#inbox').addEventListener('click', () => {
        activeProject = inbox;
    });

    document.querySelector('#today').addEventListener('click', () => {
        activeProject = today;
    });

    document.querySelector('#week').addEventListener('click', () => {
        activeProject = week;
    });
}

export {setupDOMActiveProject, setupDefaultProjects};