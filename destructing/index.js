// * Theoretical Question

// ? Explain in your own words how you understand what destructuring is and why it is needed.

// Destructing makes code more readable: By using destructuring, you can assign multiple values to variables in a single line of code, which improves code readability and reduces repetition.

// Provides concise extraction: Destructuring allows you to extract specific values from arrays or objects without the need for explicit indexing or property access. This makes code more expressive and easier to understand.

// Enables default values: Destructuring allows you to assign default values to variables if the extracted value is undefined or missing. This provides a convenient way to handle optional or default values without additional conditional checks.

// ! All tasks must be completed using the destructuring syntax.

// * Task 1

// ? Two companies have decided to merge, and they need to combine their customer databases.

// ? You have two arrays of strings, each containing customer surnames. Create a new array based on these arrays, which will be the combination of the two arrays without any duplicate surnames.

const clients1 = [
  "Gilbert",
  "Salvatore",
  "Pierce",
  "Summers",
  "Forbes",
  "Donovan",
  "Bennett",
];
const clients2 = ["Pierce", "Zaltzman", "Salvatore", "Michaelson"];

const combinedClients = [...new Set([...clients1, ...clients2])];

console.log(combinedClients);

// * Task 2

// ? You have an array called characters which consists of objects. Each object describes a character.
// ? Create an array charactersShortInfo based on it, which consists of objects with only 3 fields - name, surname, and age.

const characters = [
  {
    name: "Elena",
    lastName: "Gilbert",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Caroline",
    lastName: "Forbes",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Alaric",
    lastName: "Saltzman",
    age: 31,
    gender: "man",
    status: "human",
  },
  {
    name: "Damon",
    lastName: "Salvatore",
    age: 156,
    gender: "man",
    status: "vampire",
  },
  {
    name: "Rebekah",
    lastName: "Mikaelson",
    age: 1089,
    gender: "woman",
    status: "vampire",
  },
  {
    name: "Klaus",
    lastName: "Mikaelson",
    age: 1093,
    gender: "man",
    status: "vampire",
  },
];

const charactersShortInfo = characters.map(({ name, lastName, age }) => ({
  name,
  surname: lastName,
  age,
}));

console.log(charactersShortInfo);

// * Task 3

// ? We have an object user:

const user1 = {
  name: "John",
  years: 30,
};

// ? Write a destructuring assignment that:

// ? assigns the property name to a variable name
// ? assigns the property years to a variable age
// ? assigns the property isAdmin to a variable isAdmin with a default value of false if the property doesn't exist in the object
// ? Display the variables on the screen.

const { name, years: age, isAdmin = false } = user1;

console.log(name, age, isAdmin);

// * Task 4

// ? The detective agency has been collecting information about the possible identity of Satoshi Nakamoto for several years. All the information collected in a specific year is stored in a separate object. There are three such objects - satoshi2018, satoshi2019, satoshi2020.

// ? To create a complete profile, you need to combine the data from these three objects into one object called fullProfile.

// ? Please note that some fields may be repeated in the objects. In such cases, the resulting object should retain the value obtained from the latest year (for example, the value from 2020 takes priority over 2019).

// ? Write code that creates a complete dossier about the possible person Satoshi Nakamoto. You are not allowed to modify the satoshi2018, satoshi2019, satoshi2020 objects.

const satoshi2020 = {
  name: "Nick",
  surname: "Sabo",
  age: 51,
  country: "Japan",
  birth: "1979-08-21",
  location: {
    lat: 38.869422,
    lng: 139.876632,
  },
};

const satoshi2019 = {
  name: "Dorian",
  surname: "Nakamoto",
  age: 44,
  hidden: true,
  country: "USA",
  wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  browser: "Chrome",
};

const satoshi2018 = {
  name: "Satoshi",
  surname: "Nakamoto",
  technology: "Bitcoin",
  country: "Japan",
  browser: "Tor",
  birth: "1975-04-05",
};

const fullProfile = { ...satoshi2018, ...satoshi2019, ...satoshi2020 };

console.log(fullProfile);

// * Task 5

// ? You are given an array of books. You need to add one more book to it without modifying the existing array (the result should be a new array).

const books = [
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    name: "Lord of the rings",
    author: "J.R.R. Tolkien",
  },
  {
    name: "The witcher",
    author: "Andrzej Sapkowski",
  },
];

const bookToAdd = {
  name: "Game of thrones",
  author: "George R. R. Martin",
};

const newBooks = [...books, bookToAdd];

console.log(newBooks);

// * Task 6

// ? Given the object employee. Add properties age and salary to it without modifying the original object (a new object should be created with all the necessary properties). Print the new object to the console.

const employee = {
  name: "Vitalii",
  surname: "Klichko",
};

const newEmployee = { ...employee, age: 30, salary: 5000 };

console.log(newEmployee);

// * Task 7

// ? Complete the code so that it works correctly

const array = ["value", () => "showValue"];
const [value, showValue] = array;

alert(value); // should output 'value'
alert(showValue()); // should output 'showValue'
