import { json } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/post.server';
import styles from '~/styles/posts.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

type Posts = Awaited<ReturnType<typeof getPosts>>;

export async function loader() {
  const posts = await getPosts();
  return json<Posts>(posts);
}

export default function PostsRoute() {
  const posts = useLoaderData() as Posts;

  return (
    <div id='posts'>
      <div className='posts-list'>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={post.id} prefetch='intent'>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='posts-detail'>
        <Outlet />
      </div>
    </div>
  );
}
