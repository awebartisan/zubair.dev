import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>Zubair Mohsin | {title}</title>
      </Head>
      <div className='container px-10'>
        <div className='mb-2'>
          <div className='pt-8 lg:pt-12'>
            <h1 className='text-5xl'>
              <Link href='/'>
                <a>Zubair Mohsin</a>
              </Link>
            </h1>
          </div>
        </div>
        <div className='w-1/2'>
          <ul className='flex uppercase space-x-6'>
            <li>
              <Link href='https://dev.to/zubairmohsin33'>
                <a
                  target='_blank'
                  className={
                    title === "Blog" ? "text-gray-800" : "text-gray-600"
                  }>
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                <a
                  className={
                    title === "Projects" ? "text-gray-800" : "text-gray-600"
                  }>
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a
                  className={
                    title === "Contact" ? "text-gray-800" : "text-gray-600"
                  }>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {children}
      </div>
    </>
  );
}
