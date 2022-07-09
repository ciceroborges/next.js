 // select the div element with 'app' id
 const app = document.getElementById("app");
 
 // header component
 function Header() {
    return (<h1>Develop. Preview. Ship. 🚀</h1>)
 }

 // homepage component
 function HomePage() {
    return (
        <>
            <Header/>
            <span>HomePage</span>
        </>
    )
 }

 // render elements
 ReactDOM.render(<HomePage/>, app);