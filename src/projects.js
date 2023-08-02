let _allProjects = [];

function projectsFactory(obj = {}) {
    let name = 'New Project';
    const tasks = [];

    const getName = () => {
        return name;
    };

    const getTasks = () => {
        return tasks;
    };

    const setName = (_name) => {
        name = _name;
    };

    const addTask = (task) => {
        tasks.push(task);
    };

    const removeTask = (task) => {
        const index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
        }
    }

    obj = Object.assign(obj, {
        getName,
        getTasks,
        setName,
        addTask,
        removeTask
    });

    _allProjects.push(obj);
    
    return obj;
}

export  { _allProjects, projectsFactory };