import { activeProject } from "./projects.dom";
import tasksFactory from "./tasks";

function setupTaskCreationButton() {
    document.querySelector('#add-task').addEventListener('click', createNewTaskPopup);
}

function createNewTaskPopup() {
    const tasksList = document.querySelector('.tasks-container').lastChild;
    const popup = document.createElement('li');
    popup.setAttribute('id', 'add-task-popup');
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
    tasksList.prepend(popup);

    addBtn.addEventListener('click', () => {
        tasksList.firstChild.remove(); 
        const newTaskID = nameBox.value.toLocaleLowerCase();
        const newTaskName = nameBox.value;
        const newTaskElement = createNewTask(newTaskName, newTaskID);
        tasksList.insertBefore(newTaskElement, tasksList.lastChild);
        const newTask = setupTask(nameBox.value, `#${newTaskID}`);
    });

    cancelBtn.addEventListener('click', () => {
        tasksList.firstChild.remove();
    });
}

function createNewTask(id, name) {
    const newTaskElement = document.createElement('li');
    newTaskElement.setAttribute('id', id);
    newTaskElement.innerHTML = `<i class="fa-solid fa-list-check"></i> ${name}`;

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

export default setupTaskCreationButton;