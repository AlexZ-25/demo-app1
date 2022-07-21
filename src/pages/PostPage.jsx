import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { idPost } = useParams();
  const [post, setPost] = useState({});

  const extraerPost = async () => {
    const resultado = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    const data = await resultado.json();
    setPost(data);
  };

  useEffect(() => {
    extraerPost();
  }, [idPost]);

  return (
    <>
      <header>
        <title>Pagina del post individual</title>
      </header>
      <main>
        <ul>
          <li key={post.id}>
            <h2>Title: {post.title}</h2>
            <p>Body: {post.body}</p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default PostPage;
