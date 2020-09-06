import Link from "next/link";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout title='About'>
      <div className='py-8'>
        <div className='prose mb-8'>
          <h2>Who am I?</h2>
          <p>
            Hello I am{" "}
            <Link href='https://twitter.com/zubairmohsin33'>
              <a className='underline'>@zubairmohsin</a>
            </Link>
            {", "}a Full Stack Web Developer.
          </p>
          <p>
            Started my career in 2016 at a startup, worked with CodeIgniter and
            WordPress projects, which I didn't enjoy much. In beginning of 2017
            I was introduced to <strong>Laravel</strong> and had my{" "}
            <em>Aha!</em> moment.
          </p>
          <p>
            Since then I only looked forward to do more things with{" "}
            <strong>Laravel</strong>.
          </p>
          <p>
            Another thing that gets me excited is{" "}
            <strong>Shopify App Development</strong>. Built several Shopify apps
            and few of them were also published on Shopify App Store. Shopify
            REST API is a piece of art and joy to work with.
          </p>
          <p>
            I also enjoy working with servers. Recently I switched to Laravel
            Forge for server management to save time, before that I used to
            provision my servers with all the required services and deploying
            apps.
          </p>
        </div>
        <div className='prose'>
          <h2>Online Presence:</h2>
          <ul className='flex space-x-4 list-none'>
            <li>
              <a target='_blank' href='https://github.com/awebartisan'>
                GitHub
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://stackoverflow.com/users/4401299/awebartisan'>
                Stackoverflow
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://dev.to/zubairmohsin33'>
                DEV
              </a>
            </li>
            <li>
              <a target='_blank' href='https://twitter.com/Zubairmohsin33'>
                Twitter
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/zubair-mohsin/'>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
