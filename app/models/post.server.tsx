const posts = [
  {
    id: 'd1d7d4f8-7ec4-4770-ab11-91c51e1af2f7',
    title: 'Post 1',
    body: 'Recusandae dolore sit odio velit numquam quod eligendi similique. Deleniti sint odio iste deserunt. Ut illo ratione.',
  },
  {
    id: '6734d270-bf0c-4253-8e13-606dd69f3119',
    title: 'Post 2',
    body: 'Occaecati qui iusto blanditiis. Ab incidunt omnis tempore expedita numquam sit ab perspiciatis tenetur. Dolor temporibus minus in sint natus enim corrupti. Qui incidunt eius. Totam minima pariatur est necessitatibus mollitia sequi.',
  },
  {
    id: '2b04caba-9693-4dcb-a039-cd1368f9f72d',
    title: 'Post 3',
    body: 'Possimus aspernatur excepturi et nulla doloribus non assumenda expedita. Aut eos eveniet eveniet quo consequatur voluptates. Similique esse quam incidunt.',
  },
  {
    id: '035c9402-30ae-4272-a5bc-d1f6ab569f89',
    title: 'Post 4',
    body: 'Quo non eos. Iste voluptatum aut dolores culpa et expedita. Et minus nihil blanditiis est laborum eos eaque iure. Debitis aut dolorum nihil possimus esse. Dolor neque quisquam quos distinctio velit ut quisquam magnam ipsam.',
  },
  {
    id: 'eda60fb1-f2f6-4845-aae2-2f8bbfc4c2c5',
    title: 'Post 5',
    body: 'Temporibus tempora qui rerum quia aspernatur voluptate quas. Consequatur cupiditate rem hic et deserunt numquam eum doloribus. Dolores temporibus aut ratione quidem est minus sint eaque eaque. Sunt reprehenderit nihil ab voluptate sit nostrum. Rerum laudantium praesentium labore. Officia repellendus optio possimus quam.',
  },
];

export async function getPosts() {
  return posts;
}

export async function getPostById(id: string | undefined) {
  const index = posts.findIndex((post) => post.id === id);
  return posts[index];
}
