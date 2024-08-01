import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "list"]

  connect() {
    // TODO: console.log something!\
    console.log("logging the add");
  }
  addItem(event) {
    event.preventDefault();
    console.log(this.inputTarget.value);
    this.listTarget.insertAdjacentHTML(
      "beforeend", 
      `<li data-controller="remove-item" class="list-group-item d-flex gap-3 align-items-center">
        <div>${this.inputTarget.value}</div>
        <button data-action="click->remove-item#deleteItem" type="submit" class="btn btn-sm btn-light">❌ Remove</button>
      </li>`
    );
  }
}