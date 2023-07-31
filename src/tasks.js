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
    
    const setTitle = function(t) {
        this.title = t;
    };
    
    const setDescription = function(d) {
        this.description = d;
    };
    
    const setDueDate = function(dd) {
        this.dueDate = dd;
    };
    
    const setPriority = function(p) {
        this.priority = p;
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

export default tasksFactory;