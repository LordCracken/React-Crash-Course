import {useState} from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({isPosting, onStopPosting}) {
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
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onAuthorChange={authorChangeHandler} onBodyChange={bodyChangeHandler} onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
