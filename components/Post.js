import Link from 'next/link';

export const Post = ({ post }) => {
    const {
        link,
        module: { meta },
    } = post;

    return (
        <article className="mb-10">
            <Link href={'/blog' + link}>
                <a>
                    <h2 className="text-xl font-semibold">{meta.title}</h2>
                </a>
            </Link>
            <p className="mb-7 text-gray-500">
                <time dateTime="2021-03-03">{meta.showDate}</time>
            </p>
            <p className="mb-7">{meta.description}</p>
            <Link href={'/blog' + link}>
                <a>Read more &rarr;</a>
            </Link>
        </article>
    );
};
