//GET POST PUT PATCH DELETE
//https://jsonplaceholder.typicode.com/posts

import React, { useEffect, useState } from "react";

const ApiComponent = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response
        .json()
        .then((data) => setPosts(data))
        .catch((error) => setError(error.message))
    );
  }, []);

  const addPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, userId: 1, id: posts.length + 1 }),
    })
      .then((response) => response.json())
      .then((newPost) => {
        setPosts([...posts, newPost]);
        setTitle("");
        setBody("");
      })
      .catch((error) => console.log("Error", error));
  };

  //console.log("POST", posts);

  if (error) return <div>Error loading posts: {error}</div>;

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h1 style={styles.headers}>Create Post</h1>
        <input
          style={styles.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          style={styles.textarea}
          placeholder="Type the body here"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button style={styles.button} onClick={addPost}>
          Add new post
        </button>
      </div>

      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={styles.post}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiComponent;

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#e5edeeff",
    // fontFamily: "san-serif",
  },

  post: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0, 0.2)",
    width: "70%",
    backgroundColor: "#fff",
  },

  form: {
    backgroundColor: "#fff",
    padding: "20px",
    marginBottom: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    maxWidth: "500px",
  },
  heading: {
    marginBottom: "15px",
    color: "#333",
  },
  input: {
    width: "90%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "90%",
    padding: "10px",
    fontSize: "16px",
    height: "100px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "vertical",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0077cc",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
