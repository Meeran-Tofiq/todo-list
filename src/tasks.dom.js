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

        const newTask = setupTask(nameBox.value, newTaskDate, `#${newTaskID}`);
        const newTaskElement = createNewTaskElement(newTask);
        tasksList.insertBefore(newTaskElement, tasksList.lastChild);
        activeProject.addTask(newTask);
    });

    cancelBtn.addEventListener('click', () => {
        tasksList.firstChild.remove();
    });
}

function setupTask(title, date, id) {
    const task = tasksFactory();
    task.setTitle(title);
    if(date !== '') {
        task.setDueDate(new Date(date));
    }

    return task;
}

function createNewTaskElement(task) {
    const newTaskElement = document.createElement('li');
    newTaskElement.setAttribute('id', task.getTitle().toLowerCase());

    const nameSpan = document.createElement('span');
    const dateSpan = document.createElement('span');

    nameSpan.innerText = task.getTitle();
    dateSpan.innerText = format(task.getDueDate(), 'dd-MM-yyyy');
    
    newTaskElement.append(nameSpan, dateSpan);

    return newTaskElement;
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
        
        const newTaskElement = createNewTaskElement(task);
        tasksList.insertBefore(newTaskElement, tasksList.lastChild);
    }
}

export default setupTaskCreationButton;