import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

//     // let name = 'kerubo';
//     const [name, setName] = useState('kerubo');
//     const [age, setAge] = useState(30);
//     const handleClick = () => {
//         setName('sheba');
//         setAge(35);
//     };

//     // const handleClickAgain = (name, e) => {
//     //     console.log('Hello ' + name, e.target);
//     // };
//     return ( 
//         <div className="home">
//             <h2>Home Page</h2>
//             <p>Hello {name}, you're {age} yrs old!</p>
//             <button onClick={handleClick}> click Me</button>
//             {/* <button onClick={(e) => handleClickAgain('Kerubo', e)}> Click me again</button> */}
//         </div>
//      );
// }

    

    // const [name, setName] = useState('kerubo');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id); // filter out the blog with the specified id
    //     setBlogs(newBlogs);
    // };

      // only re-run the effect if blogs changes 

    return (
        <div className="home">
            {error && <div>{error}</div>} {/* render the error message if there was an error fetching the data */   }
            {isPending && <div>Loading...</div>} {/* render a loading message while the data is being fetched */    }
            {blogs && <BlogList blogs={blogs} title="All Blogs:" /> } {/* render the BlogList component and pass the fetched blogs as props if the data was successfully fetched */    }
            
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'kerubo')} title="Kerubo's Blogs:" /> // passing filtered blogs as props to the component */}{/* <button onClick={() => setName('sheba')}>change name</button><p>{name}</p> */}

        </div>
    );         
 
}
export default Home;