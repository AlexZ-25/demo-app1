import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  const extraerPosts = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    setPosts(data);
    // console.log(posts);
  };

  useEffect(() => {
    extraerPosts();
  }, []);

  return (
    <>
      <header>
        <h1>Posts</h1>
      </header>
      <main>
        <article>
          <button onClick={extraerPosts}>Extraer posts</button>
        </article>
        <article>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>Title: {post.title}</h2>
                <p>Body: {post.body}</p>
                <NavLink to={`/post/${post.id}`} className="btn btn-success">
                  Navegar al post
                </NavLink>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </>
  );
};

export default PostsPage;
