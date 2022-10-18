import { type } from "os";

type PostProps = {
  posts: never[];
};

const Posts = ({ posts }: PostProps) => {
  return (
    <ul className="list">
      {posts.map(
        (post: { id: number; title: string; body: string }, i: number) => (
          <li key={post.id} className="list_item">
            <h2 style={{ margin: "0" }}>
              {i + 1}. {post.title}
            </h2>
            <br />
            <p style={{ margin: "0 0 30px 0" }}>{post.body}</p>
          </li>
        )
      )}
    </ul>
  );
};

export default Posts;
