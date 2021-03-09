import { Post } from '../../components/Post';
import { posts } from '../../allPosts';
import Layout from '../../components/Layout';

export default function Index() {
    return (
        <Layout title="Blog | Zubair Mohsin">
            {posts.map((post) => (
                <Post key={post.link} post={post} />
            ))}
        </Layout>
    );
}
