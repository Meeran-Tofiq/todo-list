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

    return Object.assign(obj, {
        getName,
        getTasks,
        setName,
        addTask
    });
}

export default projectsFactory;