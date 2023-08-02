const _allTasks = [];

function tasksFactory(obj = {}) {
    let title = '';
    let description = '';
    const today = new Date();
    let dueDate = new Date();
    dueDate.setDate(today.getDate() + 1);
    let priority = 0;

    const getTitle = () => {
        return title;
    };

    const getDescription = () => {
        return description;
    };

    const getDueDate = () => {
        return dueDate;
    };

    const getPriority = () => {
        return priority;
    };
    
    const setTitle = (t) => {
        title = t;
    };
    
    const setDescription = (d) => {
        description = d;
    };
    
    const setDueDate = (dd) => {
        dueDate = dd;
    };
    
    const setPriority = (p) => {
        priority = p;
    }

    obj = Object.assign(obj, {
        getTitle, 
        getDescription,
        getDueDate,
        getPriority,
        setTitle,
        setDescription,
        setDueDate,
        setPriority
    });

    _allTasks.push(obj);
    
    return obj;
}

export {_allTasks, tasksFactory};