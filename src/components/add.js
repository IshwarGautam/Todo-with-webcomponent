const template = document.createElement("template");
template.innerHTML = `
<style>
  button{
    width: 100px;
    font-size: 20px;
    cursor:pointer;
    border-radius:10px;
    margin-top:5px;
  }
</style>

<div class = "add-btn">
  <button id = "add">Add</button>
</div>
`

export class addBtn extends HTMLElement {
  constructor() {
    super();
    //shadow dom
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  } 
}

window.customElements.define('add-btn', addBtn);
