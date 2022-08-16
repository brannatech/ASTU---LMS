import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  fetchPosts,
} from "./counterSlice";
const Counter = () => {
  const countval = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const resetAll = () => dispatch(reset());
  const posts = useSelector(fetchPosts)
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", padding: 30 }}>
        <h1 stayle={{ padding: 10 }}>{countval}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
        <button onClick={resetAll}>Reset</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", padding: 30 }}>
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Counter;
