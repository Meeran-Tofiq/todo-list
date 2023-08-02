import { activeProject } from "./projects.dom";
import tasksFactory from "./tasks";
import { format } from "date-fns";

function setupTaskCreationButton() {
    document.querySelector('#add-task').addEventListener('click', createNewTaskPopup);
    document.querySelector('.sidebar').addEventListener('click', showActiveProjectTasks);
}

function createNewTaskPopup() {
    const tasksList = document.querySelector('.tasks-container').lastChild;
    const popup = document.createElement('li');
    popup.setAttribute('id', 'add-task-popup');
    const form = document.createElement('form');
    const nameBox = document.createElement('input');
    const dateBox = document.createElement('input');

    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    dateBox.setAttribute('type', 'date');
    addBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('type', 'button');
    addBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    cancelBtn.innerHTML = '<i class="fa-solid fa-x"></i>';

    form.append(nameBox);
    form.append(dateBox);
    form.append(addBtn, cancelBtn);
    popup.append(form);
    tasksList.prepend(popup);

    addBtn.addEventListener('click', () => {
        tasksList.firstChild.remove(); 
        const newTaskID = nameBox.value.toLowerCase();
        const newTaskName = nameBox.value;
        const newTaskDate = dateBox.value;

        const newTaskElement = createNewTaskElement(newTaskName, newTaskID, newTaskDate);
        tasksList.insertBefore(newTaskElement, tasksList.lastChild);
        const newTask = setupTask(nameBox.value, `#${newTaskID}`);
        activeProject.addTask(newTask);
    });

    cancelBtn.addEventListener('click', () => {
        tasksList.firstChild.remove();
    });
}

function createNewTaskElement(name, id, date) {
    const newTaskElement = document.createElement('li');
    newTaskElement.setAttribute('id', id);
    let d = new Date();
    d.setDate(d.getDate() + 1);

    const nameSpan = document.createElement('span');
    const dateSpan = document.createElement('span');

    nameSpan.innerText = name;
    dateSpan.innerText = (date === '' ? format(d, 'dd-MM-yyyy') : date);
    
    newTaskElement.append(nameSpan, dateSpan);

    return newTaskElement;
}

function setupTask(title, id) {
    const task = tasksFactory();
    task.setTitle(title);

    document.querySelector(id).addEventListener('click', () => {
        console.log('Buhahahahahaha');
    });

    return task;
}

function showActiveProjectTasks() {
    const tasksList = document.querySelector('.tasks-container').lastChild;

    Array.from(tasksList.childNodes).forEach(element => {
        if(element.id !== 'add-task') {
            element.remove();
        }
    });

    const tasks = activeProject.getTasks();

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        
        const newTaskElement = createNewTaskElement(task.getTitle(), task.getTitle().toLowerCase());
        tasksList.insertBefore(newTaskElement, tasksList.lastChild);
    }
}

export default setupTaskCreationButton;