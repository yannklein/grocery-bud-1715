import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // TODO: console.log something!
    console.log("logging the remove");

  }
  deleteItem() {
    this.element.remove()
  } 
}

