
import BaseElement from '../../base';
import styles from './card.css'


class Card extends BaseElement {
  constructor() {
    super();
    this.setStyles(styles)
  }
  
  render () {
    const wrapper = document.createElement("div");
    wrapper.className = 'card'
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h3.textContent = this.getAttribute("data-title");
    p.textContent = this.getAttribute("data-body");
    const image = this.getAttribute("data-image");
    if(image) {
      const img = document.createElement('img')
      img.src = image
      img.className = 'card-image'
      wrapper.append(img)
    }
    const button = this.getAttribute("data-button");
    if(button) {
      const btn = document.createElement('button')
      btn.textContent = button
      h3.append(btn)
    }
    wrapper.append(h3, p);
    return wrapper
  }
}

customElements.define("v-card", Card);
