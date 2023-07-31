import "./all.min";
import tasksFactory from "./tasks";
import loadPage from "./load_page";
import './styles.css';

console.log('development');

const t = tasksFactory();

t.setTitle("Clean Shower");
t.setDescription("I have to clean up my shower.");
t.setPriority(5);
console.log(t);

loadPage();