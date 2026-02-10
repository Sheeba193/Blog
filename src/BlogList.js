import { Link } from 'react-router-dom';

const BlogList = (props) => {
    const blogs =props.blogs;
    const title = props.title;

    return ( 
        <div className="blog-list">
           <h2>{title}</h2>
           {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>  {/* Using Link to navigate to the blog details page with the blog ID in the URL */}    
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    
                    {/* <button onClick={() => props.handleDelete(blog.id)}>Delete blog</button> */}
                </div>
            ))} 
        </div>
     );
}
 
export default BlogList;