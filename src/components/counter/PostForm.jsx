import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "./counterSlice";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (title && content) {
      dispatch(addPosts(title, content));
    }
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <input type="text" value={title} onChange={handleTitleChange} />
      <input type="text" value={content} onChange={handleContentChange} />
      <button onClick={handleSubmit}>Add post</button>
    </div>
  );
};

export default PostForm;
