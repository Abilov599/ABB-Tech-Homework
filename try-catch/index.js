// Theoretical Question
// Provide a few examples of when it is appropriate to use the try...catch construct in code.

// 1) Division by Zero:

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  } catch (error) {
    console.error(error);
  }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Error: Division by zero is not allowed.

// 2) Async Requests:

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Usage
fetchData("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Task
// Given an array called books.

// Display this array as a list on the screen (using the <ul> tag - the list should be generated using JavaScript).
// There should be a div on the page with id="root", where this list should be added (similar to the task performed in the basic module).
// Before adding an object to the page, it should be checked for correctness (the object should contain all three properties - author, name, price). If any of these properties are missing, an error should be displayed in the console indicating which property is missing in the object.
// Array elements that do not meet the conditions mentioned above should not appear on the page.

const books = [
  {
    author: "Lucy Foley",
    name: "List of Invitees",
    price: 70,
  },
  {
    author: "Susanna Clarke",
    name: "Jonathan Strange & Mr Norrell",
  },
  {
    name: "Design. A Book for Non-Designers.",
    price: 70,
  },
  {
    author: "Alan Moore",
    name: "Neonomicon",
    price: 70,
  },
  {
    author: "Terry Pratchett",
    name: "Moving Pictures",
    price: 40,
  },
  {
    author: "Angus Hyland",
    name: "Cats in Art",
  },
];

function listBooks() {
  const root = document.querySelector("#root");
  const ul = document.createElement("ul");

  books.map((book) => {
    try {
      if (!book.author) {
        throw { property: "author" };
      }
      if (!book.name) {
        throw { property: "name" };
      }
      if (!book.price) {
        throw { property: "price" };
      }
      const li = document.createElement("li");
      li.textContent = `Author: ${book.author}, Name: ${book.name}, Price: ${book.price}`;
      ul.appendChild(li);
    } catch (error) {
      console.error(
        `Error: Missing property '${error.property}' in book object.`
      );
    }
  });

  root.appendChild(ul);
}

listBooks();
