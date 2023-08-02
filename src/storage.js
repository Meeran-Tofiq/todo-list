import { _allProjects, projectsFactory } from "./projects";
import { tasksFactory } from "./tasks";
import { createNewProjectElement } from "./projects.dom";
import { showActiveProjectTasks } from "./tasks.dom";

function storeProjects() {
    let names = [];
    let tasks = [];
    
    _allProjects.forEach(proj => {
        names.push(proj.getName());
        
        let taskList = [];
        let taskInfo = [];
        
        if(proj.getTasks().length > 0) {
            proj.getTasks().forEach(task => {
                taskInfo.push(task.getTitle());
                taskInfo.push(task.getDescription());
                taskInfo.push(JSON.stringify(task.getDueDate()));
                taskInfo.push(task.getPriority());
                taskList.push(JSON.stringify(taskInfo));
            })
        }
        tasks.push(JSON.stringify(taskList));
    });
    localStorage.setItem('projNames', JSON.stringify(names));
    localStorage.setItem('projTasks', JSON.stringify(tasks));
}

function loadProjects() {
    const names = JSON.parse(localStorage.getItem('projNames'));
    const tasks = JSON.parse(localStorage.getItem('projTasks'));
    
    if(names.length > 3) {
        for (let i = 3; i < names.length; i++) {
            const projectName = names[i];
            const project = projectsFactory();
            project.setName(projectName);
            storeProjects();
            const li = createNewProjectElement(project);
            const projectsList = document.querySelector('.projects').lastChild;
            projectsList.insertBefore(li, projectsList.lastChild);
        }
    }
    
    for (let index = 0; index < tasks.length; index++) {
        let taskList = tasks[index];
        
        taskList = JSON.parse(taskList);
        if(taskList.length > 0) {
            taskList.forEach(taskInfo => {
                taskInfo = JSON.parse(taskInfo);
                let task = tasksFactory({}, 
                    taskInfo[0],
                    taskInfo[1],
                    new Date(JSON.parse(taskInfo[2])),
                    taskInfo[3]);
                _allProjects[index].addTask(task);
            })
        }
    }
    showActiveProjectTasks();
}
    
export { storeProjects, loadProjects };