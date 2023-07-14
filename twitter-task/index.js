import Card from "./classes.js";

const usersURL = "https://ajax.test-danit.com/api/json/users";
const postsURL = "https://ajax.test-danit.com/api/json/posts";

async function fetchByUrl(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

function bindData(users, posts) {
  const data = users.map((user) => {
    let filteredPosts = posts.filter((post) => post.userId === user.id);
    user.posts = filteredPosts;
    return user;
  });
  return data;
}

const promises = [fetchByUrl(usersURL), fetchByUrl(postsURL)];

async function handlePromises(promises) {
  try {
    const [users, posts] = await Promise.all(promises);
    return { users, posts };
  } catch (error) {
    throw new Error(error.message);
  }
}

handlePromises(promises)
  .then(({ users, posts }) => {
    const data = bindData(users, posts);
    data.forEach((user) => {
      console.log(user);
      user.posts.forEach((post) => {
        const card = new Card({
          header: `${post.title}`,
          content: `${post.body}`,
          footer: `${user.name}`,
        });
        card.render();
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });
