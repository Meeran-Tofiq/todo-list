function tasksFactory(obj = {}) {
    let title = '';
    let description = '';
    const today = new Date();
    let dueDate = [today.getDay() + 1, today.getMonth, today.getFullYear];
    let priority = 0;
    
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
    
    return Object.assign(obj, {title, 
        description,
        dueDate,
        priority,
        setTitle,
        setDescription,
        setDueDate,
        setPriority
    });
}

export default tasksFactory;