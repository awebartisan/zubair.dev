import { Post } from '../components/Post';
import { posts } from '../allPosts';
import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';

export default function Index() {
    const sortedPostsByDate = posts.sort((p1, p2) =>
        p2.module.meta.date > p1.module.meta.date ? 1 : -1,
    );

    return (
        <Layout title="Zubair Mohsin">
            <NextSeo
                title="Zubair Mohsin | Blog"
                description="Zubair Mohsin's personal blog about Laravel and Shopify App Development."
                canonical="https://zubair.dev"
                openGraph={{
                    url: "https://zubair.dev",
                    title: "Zubair Mohsin",
                    description: "Zubair Mohsin's personal blog about Laravel and Shopify App Development.",
                    site_name: 'Zubair Mohsin -  Blog',
                    images: [
                        {
                            url:
                                'https://og-image-gcojn5iwm-zubairmohsin.vercel.app/' +
                                encodeURI("Zubair Mohsin - Blog"),
                        },
                    ],
                    locale: 'en',
                }}
                twitter={{
                    cardType: 'summary_large_image',
                    handle: '@Zubairmohsin33',
                    site: 'Zubair Mohsin - Blog',
                }}
            />
            {sortedPostsByDate.map((post) => (
                <Post key={post.link} post={post} />
            ))}
        </Layout>
    );
}
