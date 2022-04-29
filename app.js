import { LitElement, html, css } from "./lit.all.js";

class BasicElement extends LitElement {
  static get styles() {
    return css`
      @import url("imported-stylesheet.css");

      p {
        background-color: red;
        color: white;
      }
    `;
  }

  render() {
    return html`<p>Hello! I should have a cyan background and black text.</p>`;
  }
}

customElements.define("basic-element", BasicElement);
