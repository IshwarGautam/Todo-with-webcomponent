import { addBtn } from "./add.js";
import { userInput } from "./input-field.js";

class TodoApp extends HTMLElement{
  constructor(){
    super();

    this.addBtn = new addBtn();
    this.userInput = new userInput();
  
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(this.userInput);
    this.shadowRoot.appendChild(this.addBtn);
  }

  addData(){
    // Get name from input text field
    let name = this.userInput.shadowRoot.getElementById('name').value;
    
    // check if the text field is empty or not
    if (name === ''){
      // display message
      alert('Please fill data');
      return;
    }
    else{

      let li = document.createElement('li');
      li.textContent = name; //Get user input

      // Styling list element
      li.style.listStyle = "none";
      li.style.width = "50%";
      li.style.color = "maroon";
      li.style.marginBottom = "5px";
      li.style.border = "1px dashed black";

      let a = document.createElement('a');

      a.textContent = "X"; //create remove icon
      a.href = "javascript:void(0)";

      a.style.float = "right";
      a.style.textDecoration = "none";

      a.addEventListener("click", () => {
        this.shadowRoot.removeChild(li);
      });
      
      li.appendChild(a);

      let pos = this.shadowRoot.firstElementChild; //get the position of first element child

      if (pos === null){
        this.shadowRoot.appendChild(li); // when first list will be added
      }
      else{
        this.shadowRoot.insertBefore(li, pos); // insert new list (TODO) at the top
      }
    }
    this.userInput.shadowRoot.getElementById('name').value = ""; // remove the user input when the button is clicked 

  }

  connectedCallback() {
    this.addBtn.addEventListener("click", () => this.addData());
  }
}
window.customElements.define('todo-app', TodoApp);
