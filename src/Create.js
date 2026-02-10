import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState(''); //useState hook to create a state variable called title and a function called setTitle to update it. The initial value of title is an empty string.
    const [body, setBody] = useState('');//useState hook to create a state variable called body and a function called setBody to update it. The initial value of body is an empty string.
    const [author, setAuthor] = useState('sheba'); //useState hook to create a state variable called author and a function called setAuthor to update it. The initial value of author is 'sheba'.
    const [isPending, setIsPending] = useState(false); //useState hook to create a state variable called isPending and a function called setIsPending to update it. The initial value of isPending is false.

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents the default behavior of the form submission, which is to refresh the page.
        const blog = { title, body, author }; //creates a new object called blog that contains the current values of title, body, and author.
        setIsPending(true);

        fetch('http://localhost:8000/blogs', { //fetch function to send a POST request to the server at the specified URL ('http://localhost:8000/blogs').
            method: 'POST', //specifies that we want to send a POST request to the server.
            headers: { "Content-Type": "application/json" }, //specifies that the data we are sending is in JSON format.    
            body: JSON.stringify(blog) //converts the blog object into a JSON string and sends it as the body of the request.
        }).then(() => {
            console.log('new blog added'); //logs a message to the console when the request is complete.
            setIsPending(false); //sets isPending to false when the request is complete.
        });
    };
    
    return ( 
        <div className="create">
            <h2> Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} //allows us to update the title state as the user types in the input field
                />
                <label> Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>    
                <label > Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="sheba"> sheba</option>
                    <option value="kerubo">kerubo</option>
                    <option value="lucy">lucy</option>
                    <option value="mario">mario</option>
                </select>
                {!isPending && <button> Add Blog</button>}
                {isPending && <button disabled> Adding new blog</button>}
                
                {/* <p style={{fontSize: '40px', fontWeight: 'bold', color: 'blue', padding: '10px'}}>{title} </p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>      
     );
};
 
export default Create;