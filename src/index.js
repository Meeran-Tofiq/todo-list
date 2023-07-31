import tasksFactory from "./tasks";
import loadPage from "./load_page";

console.log('development');

const t = tasksFactory();

t.setTitle("Clean Shower");
t.setDescription("I have to clean up my shower.");
t.setPriority(5);
console.log(t);

loadPage();