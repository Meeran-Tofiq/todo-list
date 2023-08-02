import "./all.min";
import loadPage from "./load_page";
import {setupDOMActiveProject, setupDefaultProjects, setupProjectCreationButton} from './projects.dom';
import tasksFactory from "./tasks";
import {setupTaskCreationButton} from "./tasks.dom";
import './styles.css';
import { loadProjects } from "./storage";

loadPage();

setupDefaultProjects();
setupDOMActiveProject();
setupProjectCreationButton();
setupTaskCreationButton();