import { _allProjects } from "./projects";
import { _allTasks } from "./tasks";
import { createNewProjectElement } from "./projects.dom";
import { showActiveProjectTasks } from "./tasks.dom";

function storeProjects() {
    // localStorage.setItem('_allProject', _allProjects);
}

function storeTasks() {
    // localStorage.setItem('_allTasks', _allTasks);
}

function loadProjects() {
    const allProj = Array.from(localStorage.getItem('_allProjects'));
    _allProjects = allProj;

    _allProjects.forEach(proj => {
        createNewProjectElement(proj);
    });
}

export { storeProjects, storeTasks, loadProjects };