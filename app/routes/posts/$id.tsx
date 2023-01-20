import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { getPostById } from '~/models/post.server';

type Post = Awaited<ReturnType<typeof getPostById>>;

export async function loader({ params }: LoaderArgs) {
  const { id } = params;
  const post = await getPostById(id);
  return json<Post>(post);
}

export default function PostsIndex() {
  const post = useLoaderData() as Post;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
