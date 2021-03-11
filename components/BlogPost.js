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
                    description: meta.description,
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
                <header className="mx-auto text-center">
                    <h1 className="text-3xl font-semibold">{meta.title}</h1>
                    <p className="mb-7 text-gray-500">
                        <time>{meta.showDate}</time>
                    </p>
                </header>
                <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                    {children}
                </article>
            </div>
        </Layout>
    );
}
