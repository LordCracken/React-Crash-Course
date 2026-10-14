import {Outlet} from "react-router";

import PostsList from "../components/PostsList";

function Posts() {
  return (
    <>
      <Outlet/>
      <main>
        <PostsList/>
      </main>
    </>
  )
}

export default Posts;
