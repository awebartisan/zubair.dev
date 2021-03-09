import Layout from './Layout';
import { NextSeo } from 'next-seo';

export default function BlogPost({ children, meta }) {
    return (
        <Layout>
            <NextSeo
                title={`${meta.title} | Blog | Zubair Mohsin`}
                description={meta.description}
                canonical={meta.canonical}
                openGraph={{
                    url: meta.url,
                    title: meta.title,
                    description: meta.title,
                    site_name: 'Zubair Mohsin -  Blog',
                    images: [
                        {
                            url:
                                'https://og-image-gcojn5iwm-zubairmohsin.vercel.app/' +
                                encodeURI(meta.title),
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
            <div className="post mb-8">
                <h2 className="text-3xl font-semibold">{meta.title}</h2>
                <p className="mb-7 text-gray-500">
                    <time>{meta.date}</time>
                </p>
                <article className="prose">{children}</article>
            </div>
        </Layout>
    );
}
