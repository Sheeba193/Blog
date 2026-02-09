import { useState } from 'react';
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

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'kerubo', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'sheba', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'kerubo', id: 3 }
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs:" /> // passing props to the component
            <BlogList blogs={blogs.filter(blog => blog.author === 'kerubo')} title="Kerubo's Blogs:" /> // passing filtered blogs as props to the component
        </div>
    );         
 
}
export default Home;