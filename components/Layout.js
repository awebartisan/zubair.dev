import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children, title }) {
    const router = useRouter();
    const isProduction = process.env.NODE_ENV === 'production';
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>{title}</title>
                {isProduction && (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(){
                                    var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call","trackForm","trackClick"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/w.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
                                })("woopra");

                                woopra.config({
                                    domain: 'zubairmohsin.dev'
                                });
                                woopra.track();
                            `,
                        }}
                    ></script>
                )}
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
            <div className="container mx-auto px-4">{children}</div>
        </>
    );
}
