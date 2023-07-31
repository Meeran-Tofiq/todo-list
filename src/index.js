import tasksFactory from "./tasks";

console.log('development');

const t = tasksFactory();

t.setTitle("Clean Shower");
t.setDescription("I have to clean up my shower.");
t.setPriority(5);
console.log(t);