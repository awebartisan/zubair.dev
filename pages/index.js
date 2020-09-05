import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Zubair Mohsin</title>
      </Head>
      <div className='mx-auto mb-2'>
        <div className='pt-8 lg:pt-12'>
          <h1 className='text-3xl text-center text-accent-1'>Zubair Mohsin</h1>
        </div>
      </div>
      <div className='w-1/2 px-6 md:px-16 lg:px-32 mx-auto'>
        <ul className='flex justify-between uppercase'>
          <li>
            <Link href='/blog'>
              <a className='text-gray-600'>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a className='text-gray-600'>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className='text-gray-600'>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
