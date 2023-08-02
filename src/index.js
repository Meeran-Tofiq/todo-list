import "./all.min";
import loadPage from "./load_page";
import {setupDOMActiveProject, setupDefaultProjects, setupProjectCreationButton} from './projects.dom';
import tasksFactory from "./tasks";
import setupTaskCreationButton from "./tasks.dom";
import './styles.css';

loadPage();

setupDOMActiveProject();
setupDefaultProjects();
setupProjectCreationButton();
setupTaskCreationButton();