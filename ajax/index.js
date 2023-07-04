// * Theoretical Question
// ? Explain in your own words what AJAX is and how it is useful in JavaScript development.

// AJAX (Asynchronous JavaScript and XML) is a web development technique that allows JavaScript code to send and retrieve data from a server asynchronously without interfering with the rest of the webpage. It enables dynamic and interactive web applications by updating content on a webpage without requiring a full page reload.

// AJAX is useful in JavaScript development because it allows for smoother and more responsive user experiences. It enables developers to retrieve data from a server in the background without blocking the user interface. This asynchronous communication allows for real-time updates, dynamic content loading, and interactive features, enhancing the overall interactivity and usability of web applications.

function createLoader() {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  return loader;
}

function displayMovies(movies) {
  const moviesContainer = document.getElementById("movies");

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.innerHTML = `<h3>Episode ${movie.episodeId}: ${movie.name}</h3>
                                  <p>${movie.openingCrawl}</p>`;
    moviesContainer.appendChild(movieElement);

    const loader = createLoader();
    movieElement.appendChild(loader);

    // Request to fetch characters
    const charactersPromises = movie.characters.map(async (characterUrl) => {
      const response = await fetch(characterUrl);
      return await response.json();
    });

    Promise.all(charactersPromises).then((characters) => {
      // Remove loader and display characters
      movieElement.removeChild(loader);
      const charactersList = characters
        .map((character) => character.name)
        .join(", ");
      const charactersElement = document.createElement("p");
      charactersElement.textContent = `Characters: ${charactersList}`;
      movieElement.appendChild(charactersElement);
    });
  });
}

//  Request to fetch movies
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    let sortedData = data.sort((a, b) => a.episodeId - b.episodeId);
    displayMovies(sortedData);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData("https://ajax.test-danit.com/api/swapi/films");
