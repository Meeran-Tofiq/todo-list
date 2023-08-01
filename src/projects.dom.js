import projectsFactory from "./projects";

let activeProject;

function setupDOMActiveProject() {
    const taskHeader = document.querySelector('.main').firstChild.firstChild;
    document.querySelector('.sidebar').addEventListener('click', () => {
        taskHeader.innerText = activeProject.getName();
    });
}

function setupDefaultProjects() {
    let inbox, today, week;

    setupProject(inbox, 'Inbox', '#inbox');
    setupProject(today, 'Today', '#today');
    setupProject(week, 'This Week', '#week');
}

function setupProject(proj, name, id) {
    proj = projectsFactory();
    proj.setName(name);

    document.querySelector(id).addEventListener('click', () => {
        activeProject = proj;
    });
}

export {setupDOMActiveProject, setupDefaultProjects};