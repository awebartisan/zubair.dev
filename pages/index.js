import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Zubair Mohsin</title>
      </Head>
      <div class='container px-10'>
        <div className='mb-2'>
          <div className='pt-8 lg:pt-12 prose'>
            <h1 className='text-3xl'>Zubair Mohsin</h1>
          </div>
        </div>
        <div className='w-1/2'>
          <ul className='flex uppercase space-x-6'>
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
        <div className='py-8'>
          <div className='prose'>
            <h2>Who am I?</h2>
            <p>
              Hello I am{" "}
              <Link href='https://twitter.com/zubairmohsin33'>
                <a className='no-underline'>@zubairmohsin</a>
              </Link>
              {", "}a Full Stack Web Developer.
            </p>
            <p>
              Started my career in 2016 at a startup, worked with CodeIgniter
              and WordPress projects, which I didn't enjoy much. In beginning of
              2017 I was introduced to <strong>Laravel</strong> and had my{" "}
              <em>Aha!</em> moment.
            </p>
            <p>
              Since then I only looked forward to do more things with Laravel.
            </p>
            <p>
              Another thing that gets me excited is{" "}
              <strong>Shopify App Development</strong>. Built several Shopify
              apps and few of them were also published on Shopify App Store.
              Shopify REST API is a piece of art and joy to work with.
            </p>
            <p>
              I also enjoy working with servers. Recently I switched to Laravel
              Forge for server management to save time, before that I used to
              provision my servers with all the required services and deploying
              apps.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
