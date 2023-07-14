export default class Card {
  constructor({ id, header, content, footer }) {
    this.id = id;
    this.header = header;
    this.content = content;
    this.footer = footer;
  }

  render() {
    const cardContainer = document.querySelector("#card-container");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const headerElement = document.createElement("div");
    headerElement.classList.add("card-header");
    headerElement.textContent = this.header;

    const contentElement = document.createElement("div");
    contentElement.classList.add("card-content");
    contentElement.textContent = this.content;

    const footerElement = document.createElement("div");
    footerElement.classList.add("card-footer");
    footerElement.textContent = this.footer;

    cardElement.appendChild(headerElement);
    cardElement.appendChild(contentElement);
    cardElement.appendChild(footerElement);

    cardContainer.appendChild(cardElement);
  }
}
