import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>Zubair Mohsin | {title}</title>
            </Head>
            <header className="px-6 sm:px-12 lg:px-16 py-6 mb-12 lg:flex justify-between">
                <h1 className="text-2xl">
                    <Link href="/">
                        <a>Zubair Mohsin</a>
                    </Link>
                </h1>
                <nav>
                    <ul className="flex justify-center lg:justify-end space-x-4">
                        <li>
                            <Link href="https://dev.to/zubairmohsin33">
                                <a
                                    target="_blank"
                                    className={
                                        title === 'Blog'
                                            ? 'text-gray-800'
                                            : 'text-gray-600'
                                    }
                                >
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a
                                    className={
                                        title === 'Projects'
                                            ? 'text-gray-800'
                                            : 'text-gray-600'
                                    }
                                >
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a
                                    className={
                                        title === 'Contact'
                                            ? 'text-gray-800'
                                            : 'text-gray-600'
                                    }
                                >
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="container max-w-2xl mx-auto px-4">{children}</div>
        </>
    );
}
