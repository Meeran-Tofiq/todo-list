function loadPage() {
    const content = document.createElement('div');
    content.classList.add('content')

    // Main containers
    const header = document.createElement('header');
    const sidebar = document.createElement('div');
    const main = document.createElement('div');

    // attributes
    sidebar.classList.add('sidebar');
    main.classList.add('main');

    // Header Children
    const logo = document.createElement('div');

    // attributes
    logo.classList.add('logo');
    
    // Sidebar Children
    const defaultList = document.createElement('div');
    const inbox = document.createElement('span');
    const today = document.createElement('span');
    const week = document.createElement('span');

    const projectDiv = document.createElement('div'); 
    const projectList = document.createElement('ul');
    const addProject = document.createElement('button');

    defaultList.append(inbox, today, week);
    projectList.append(addProject);
    projectDiv.append(projectList);

    // attributes
    defaultList.classList.add('deafult-list');
    inbox.setAttribute('id', 'inbox');
    today.setAttribute('id', 'today');
    week.setAttribute('id', 'week');
    projectDiv.classList.add('projects');

    // Main children
    const taskDiv = document.createElement('div');
    const taskHeader = document.createElement('h2');
    const taskList = document.createElement('div');

    taskDiv.append(taskHeader, taskList);

    // attributes
    taskDiv.classList.add('tasks-container');
    taskList.classList.add('task-list');

    // Appending children
    header.append(logo);
    sidebar.append(defaultList, projectDiv);
    main.append(taskDiv);

    content.append(header, sidebar, main);
    document.body.append(content);
    console.log("ASDFGHJKLKJHGFDSDFGHJKJHGFDSDFGHJK")
}

export default loadPage;