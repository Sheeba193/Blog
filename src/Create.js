import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState(''); //useState hook to create a state variable called title and a function called setTitle to update it. The initial value of title is an empty string.
    const [body, setBody] = useState('');//useState hook to create a state variable called body and a function called setBody to update it. The initial value of body is an empty string.
    const [author, setAuthor] = useState('sheba'); //useState hook to create a state variable called author and a function called setAuthor to update it. The initial value of author is 'sheba'.
    return ( 
        <div className="create">
            <h2> Create a new blog</h2>
            <form>
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
                <button> Add Blog</button>
                
                <p>{title} </p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>      
     );
}
 
export default Create;