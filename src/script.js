 // select the div element with 'app' id
 const app = document.getElementById("app");
 
 // header component
 function Header(props) {
    const { title } = props;

    return (<h1>{title}. 🚀</h1>)
 }

 // homepage component
 function HomePage() {
    const [likes, setLikes] = React.useState(0);

    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

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

 // render elements
 ReactDOM.render(<HomePage/>, app);