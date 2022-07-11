//import { useState } from 'react';
import Link from 'next/link';

// function PostButton(props) {
//   const { name } = props;

//   const [likes, setLikes] = useState(0);
//   const [people, setPeople] = useState([
//     {id: 1, name: 'Joao', idade: 27}, 
//     {id:2, name: 'Cícero', idade: 23}
//   ]);

//   return (
//     <>
//       <ul>
//         {people.map(person => (
//           <li key={person.id}>{person.name} ({person.idade})</li>
//         ))}
//       </ul>
//       <button onClick={() => setLikes(likes + 1)}>
//         {`${name} (${likes})`}
//       </button>
//     </>
//   )
// }

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      {/* <PostButton name="Clicadas"/> */}
    </>
  );
}