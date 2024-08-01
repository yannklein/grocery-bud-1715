import { Application } from '@hotwired/stimulus';
// import here
import AddItemController from "./controllers/add_item_controller.js";
import RemoveItemController from "./controllers/remove_item_controller.js";

window.Stimulus = Application.start()
// register here
window.Stimulus.register("add-item", AddItemController);
window.Stimulus.register("remove-item", RemoveItemController);

// ///////////
// Pseudocode
// ///////////


// Add item
// ///////////

// put a data-controller in the html tag
// create action for add item in the add button
// define the add method in the controller
// target the input
// target the list
// create a list item & insert into the list

// Remove item
// ///////////

// put a data-controller in the html tag
// create action for remove item in the remove button
// define the delete method in the controller
// remove the item






