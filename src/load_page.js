function loadPage() {
    const content = document.createElement('div');
    content.classList.add('content')

    // Main containers
    const header = document.createElement('header');
    const sidebar = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('footer');

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
    
    addProject.innerHTML = '<i class="fa-solid fa-plus"></i> New';

    defaultList.append(inbox, today, week);
    projectList.append(addProject);
    projectDiv.append(projectList);

    // attributes
    defaultList.classList.add('default-list');
    inbox.setAttribute('id', 'inbox');
    inbox.classList.add('project');
    today.setAttribute('id', 'today');
    today.classList.add('project');
    week.setAttribute('id', 'week');
    week.classList.add('project');
    addProject.classList.add('add');
    projectDiv.classList.add('projects');

    // Main children
    const taskDiv = document.createElement('div');
    const taskHeader = document.createElement('h2');
    const taskList = document.createElement('ul');
    const addTask = document.createElement('li');

    addTask.innerHTML = '<i class="fa-solid fa-plus"></i> New';

    taskList.append(addTask);
    taskDiv.append(taskHeader, taskList);

    // attributes
    taskDiv.classList.add('tasks-container');
    taskList.classList.add('task-list');
    addTask.setAttribute('id', 'add-task');

    // Footer
    footer.innerHTML = '<p>Copyright © Meeran Tofiq</p> <a href="https://github.com/Meeran-Tofiq/"><i class="fa-brands fa-github"></i></a>';

    // Appending children
    header.append(logo);
    sidebar.append(defaultList, projectDiv);
    main.append(taskDiv);

    content.append(header, sidebar, main, footer);
    document.body.append(content);

    // Text and HTML Content
    logoText.innerText = 'TooDoo';

    inbox.innerHTML = '<i class="fa-solid fa-inbox"></i> Inbox';
    today.innerHTML = '<i class="fa-solid fa-arrow-down"></i> Today';
    week.innerHTML = '<i class="fa-solid fa-calendar-days"></i> This Week';

    projectDiv.innerHTML = '<span><i class="fa-solid fa-diagram-project"></i> Projects</span>' + projectDiv.innerHTML;

    taskHeader.innerText = 'Inbox';
}

export default loadPage;