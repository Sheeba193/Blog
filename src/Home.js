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


    const [name, setName] = useState('kerubo');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id); // filter out the blog with the specified id
    //     setBlogs(newBlogs);
    // };

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
        
    }, []);  // only re-run the effect if blogs changes 

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs:" /> } // only render the BlogList component if blogs is not null
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'kerubo')} title="Kerubo's Blogs:" /> // passing filtered blogs as props to the component */}

            {/* <button onClick={() => setName('sheba')}>change name</button>
            <p>{name}</p> */}




        </div>
    );         
 
}
export default Home;