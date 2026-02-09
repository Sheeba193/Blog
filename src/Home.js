import { useState, useEffect, use } from 'react';
import BlogList from './BlogList';

const Home = () => {

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

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true); // to track the loading state of the data
    const [error, setError] = useState(null); // to track any errors that may occur while fetching the data

    // const [name, setName] = useState('kerubo');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id); // filter out the blog with the specified id
    //     setBlogs(newBlogs);
    // };

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    console.log(res);
                    if (!res.ok) { // check if the response is not ok (status code is not in the range of 200-299)
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false); // set isPending to false once the data has been fetched
                    setError(null); // set error to null once the data has been fetched successfully
                })
                .catch(err => {
                    setError(err.message); // set the error message if there was an error fetching the data
                    setIsPending(false); // set isPending to false if there was an error fetching the data
                });
            }, 1000); // simulate a delay of 1 second before fetching the data
        
    }, []);  // only re-run the effect if blogs changes 

    return (
        <div className="home">
            {error && <div>{error}</div>} {/* render the error message if there was an error fetching the data */   }
            {isPending && <div>Loading...</div>} {/* render a loading message while the data is being fetched */    }
            {blogs && <BlogList blogs={blogs} title="All Blogs:" /> } // only render the BlogList component if blogs is not null
            
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'kerubo')} title="Kerubo's Blogs:" /> // passing filtered blogs as props to the component */}{/* <button onClick={() => setName('sheba')}>change name</button><p>{name}</p> */}

        </div>
    );         
 
}
export default Home;