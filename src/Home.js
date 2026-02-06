const Home = () => {

    const handleClick = () => {
        console.log('Hello, you clicked me!');
    };

    const handleClickAgain = (name) => {
        console.log('Hello ' + name );
    };
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}> click Me</button>
            <button onClick={() => handleClickAgain('Kerubo')}>Click me again</button>
        </div>
     );
}
 
export default Home;