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
    const logoText = document.createElement('h1');

    logo.append(logoText);

    // attributes
    logo.classList.add('logo');
    
    // Sidebar Children
    const defaultList = document.createElement('div');
    const inbox = document.createElement('span');
    const today = document.createElement('span');
    const week = document.createElement('span');

    const projectDiv = document.createElement('div'); 
    const projectList = document.createElement('ul');
    const addProject = document.createElement('li');

    defaultList.append(inbox, today, week);
    projectList.append(addProject);
    projectDiv.append(projectList);

    // attributes
    defaultList.classList.add('default-list');
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

    // Text and HTML Content
    logoText.innerText = 'TooDoo';

    inbox.innerHTML = '<i class="fa-solid fa-inbox"></i> Inbox';
    today.innerHTML = '<i class="fa-solid fa-arrow-down"></i> Today';
    week.innerHTML = '<i class="fa-solid fa-calendar-days"></i> This Week';

    projectDiv.innerHTML = '<i class="fa-solid fa-diagram-project"></i> Projects' + projectDiv.innerHTML;
    addProject.innerHTML = '<i class="fa-solid fa-plus"></i> New';

    taskHeader.innerText = 'Inbox';
}

export default loadPage;