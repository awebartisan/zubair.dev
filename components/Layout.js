import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children, title }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Head>
            <header className="px-6 sm:px-12 lg:px-16 py-6 mb-12 lg:flex justify-between">
                <h1 className="text-center text-2xl">
                    <Link href="/">
                        <a>Zubair Mohsin</a>
                    </Link>
                </h1>
                <nav>
                    <ul className="flex justify-center lg:justify-end space-x-4">
                        <li>
                            <Link href="/blog">
                                <a
                                    className={
                                        router.pathname.includes('blog') ||
                                        router.pathname === '/'
                                            ? 'text-gray-800'
                                            : 'text-gray-600'
                                    }
                                >
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a
                                    className={
                                        router.pathname === '/about'
                                            ? 'text-gray-800'
                                            : 'text-gray-600'
                                    }
                                >
                                    About
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/zubairmohsin33">
                                <a target="_blank" className="text-gray-600">
                                    Twitter
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="container max-w-3xl mx-auto px-4">{children}</div>
        </>
    );
}
