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

export async function deletePost(postId) {
  try {
    const response = await fetch(postsURL + "/" + `${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert(`Post with id: ${postId} deleted!`);
    } else {
      throw new Error("Failed to delete post");
    }
  } catch (error) {
    console.error("Error deleting post:", error.message);
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
      user.posts.forEach((post) => {
        const card = new Card({
          id: `${post.id}`,
          name: `${user.name}`,
          username: `${user.username}`,
          header: `${post.title}`,
          content: `${post.body}`,
        });
        card.render();
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });
