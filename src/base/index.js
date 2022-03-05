import styles from "./styles.css";

export default class BaseElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.innerHTML = styles;
    this.shadowRoot.append(style);
  }

  setStyles(styleStr) {
    const style = document.createElement('style')
    style.innerHTML = styleStr
    this.shadowRoot.append(style)
  }

  connectedCallback() {
    if(!this.render) {
      throw new Error("BaseElement: render method missing!")
    }
    const root = this.render()
    this.shadowRoot.append(root)
  }

  
}
