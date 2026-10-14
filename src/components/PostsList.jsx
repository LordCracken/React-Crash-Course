import {useState} from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      <NewPost onAuthorChange={authorChangeHandler} onBodyChange={bodyChangeHandler} />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
