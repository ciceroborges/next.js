 // select the div element with 'app' id
 const app = document.getElementById("app");
 
 // header component
 function Header(props) {
    const { title } = props;

    return (<h1>{title}. 🚀</h1>)
 }

 // homepage component
 function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <>
            <Header title="React 💙"/>
            <ul> 
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </>
    )
 }

 // render elements
 ReactDOM.render(<HomePage/>, app);