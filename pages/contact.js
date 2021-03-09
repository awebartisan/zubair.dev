import Layout from '../components/Layout';

export default function Contact() {
    return (
        <Layout title="Contact | Zubair Mohsin">
            <div className="prose py-8">
                <ul>
                    <li>
                        Shoot me an email at{' '}
                        <a href="mailto:zubairmohsin33@gmail.com">
                            zubairmohsin33@gmail.com
                        </a>
                    </li>
                    <li>
                        Send me a DM on Twitter at{' '}
                        <a href="https://twitter.com/Zubairmohsin33">
                            @Zubairmohsin33
                        </a>
                    </li>
                </ul>
            </div>
        </Layout>
    );
}
