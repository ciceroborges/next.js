import { useState } from 'react';
 
 // header component
 function Header(props) {
    const { title } = props;

    return (<h1>{title}. 🚀</h1>)
 }

 // homepage component
 export default function HomePage() {
    const [likes, setLikes] = useState(0);

    const names = ['Adas Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    function handleClick() {
        setLikes(likes + 1)
    }

    return (
        <>
            <Header title="React 💙"/>
            <ul> 
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </>
    )
 }