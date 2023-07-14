import { deletePost } from "./index.js";

export default class Card {
  constructor({ id, name, username, header, content }) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.header = header;
    this.content = content;
  }

  render() {
    const cardContainer = document.querySelector("#card-container");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.id = this.id;

    const nameElement = document.createElement("div");
    nameElement.classList.add("card-user");
    nameElement.textContent = this.name;

    const usernameElement = document.createElement("div");
    usernameElement.classList.add("card-username");
    usernameElement.textContent = this.username + "✅";

    const headerElement = document.createElement("div");
    headerElement.classList.add("card-header");
    headerElement.textContent = this.header;

    const contentElement = document.createElement("div");
    contentElement.classList.add("card-content");
    contentElement.textContent = this.content;

    const deleteElement = document.createElement("button");
    deleteElement.classList.add("card-button");
    deleteElement.textContent = "Delete";

    deleteElement.addEventListener("click", () => {
      deletePost(this.id);
      cardElement.remove();
    });

    cardElement.appendChild(nameElement);
    cardElement.appendChild(usernameElement);
    cardElement.appendChild(headerElement);
    cardElement.appendChild(contentElement);
    cardElement.appendChild(deleteElement);

    cardContainer.appendChild(cardElement);
  }
}
