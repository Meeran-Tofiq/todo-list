let _allTasks = [];

function tasksFactory(obj = {},
    _title = '',
    _description = '',
    _dueDate = new Date(),
    _priority = 0) {

    let title = _title;
    let description = _description;
    let dueDate = _dueDate;
    let priority = _priority;
    
    if (dueDate == new Date()) {
        const today = new Date();
        dueDate.setDate(today.getDate() + 1);
    }

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

    return Object.assign(obj, {
        getTitle, 
        getDescription,
        getDueDate,
        getPriority,
        setTitle,
        setDescription,
        setDueDate,
        setPriority
    });
}

export {_allTasks, tasksFactory};