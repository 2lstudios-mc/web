import DefaultErrorPage from 'next/error';

export default function ErrorPage({ error }) {
    return <DefaultErrorPage statusCode={error} />
}