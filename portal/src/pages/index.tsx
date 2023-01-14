import Head from 'next/head';
import { Inter } from '@next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [data, setData] = useState<{ message: string } | null>(null);

    const getEcho = () => {
        fetch('/api/echo')
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            });
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <button onClick={getEcho}>echo</button>
                {data && <p>{data.message}</p>}
            </div>
        </>
    );
}
