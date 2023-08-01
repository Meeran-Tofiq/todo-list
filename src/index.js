import "./all.min";
import loadPage from "./load_page";
import {setupDOMActiveProject, setupDefaultProjects} from './projects.dom';
import tasksFactory from "./tasks";
import './styles.css';

loadPage();

setupDOMActiveProject();
setupDefaultProjects();