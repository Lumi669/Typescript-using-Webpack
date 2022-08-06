import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

// Project Type

// create an instance, now in UI form shows
new ProjectInput();

//create an instance of active project list, now in UI should shows
new ProjectList("active");
new ProjectList("finished");
