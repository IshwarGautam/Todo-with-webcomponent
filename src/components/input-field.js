const template = document.createElement("template");
template.innerHTML = `
<style>
input{
  width: 50%;
  height: 30px;
  border-radius:10px;
}
</style>

<input type="text" id="name" placeholder = "Type your Todo" class="user-input"/>
`;

export class userInput extends HTMLElement {
  constructor() {
    super();
    //shadow dom
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('user-input', userInput);
