import { Post } from '../../components/Post';
import { posts } from '../../allPosts';
import Layout from '../../components/Layout';

export default function Index() {
    const sortedPostsByDate = posts.sort((p1, p2) =>
        p2.module.meta.date > p1.module.meta.date ? 1 : -1,
    );
    return (
        <Layout title="Blog | Zubair Mohsin">
            {sortedPostsByDate.map((post) => (
                <Post key={post.link} post={post} />
            ))}
        </Layout>
    );
}
