import { useState } from 'react';

import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../../components/layout';

function PostButton(props) {
  const { name } = props;

  const [likes, setLikes] = useState(0);
  const [people, setPeople] = useState([
    {id: 1, name: 'Joao', idade: 27}, 
    {id:2, name: 'Cícero', idade: 23}
  ]);

  return (
    <>
      <ul>
        {people.map(person => (
          <li key={person.id}>{person.name} ({person.idade})</li>
        ))}
      </ul>
      <button onClick={() => setLikes(likes + 1)}>
        {`${name} (${likes})`}
      </button>
    </>
  )
}

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
              console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        <h1>First Post</h1>
        <Image
          src="/images/profile.jpeg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <PostButton name="Clicadas"/>
      </Layout>
    </>
  );
}