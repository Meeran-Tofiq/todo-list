import "./all.min";
import loadPage from "./load_page";
loadPage();
import tasksFactory from "./tasks";
import './styles.css';

console.log('development');

const t = tasksFactory();

t.setTitle("Clean Shower");
t.setDescription("I have to clean up my shower.");
t.setPriority(5);
console.log(t);
