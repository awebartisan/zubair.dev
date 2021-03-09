function importAll(r) {
    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, ''),
        module: r(fileName),
    }));
}

export const posts = importAll(
    require.context('./pages/blog/', true, /\.mdx$/),
);
