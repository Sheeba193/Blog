import { useState, useEffect } from 'react';

const useFetch =(url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); // to track the loading state of the data
    const [error, setError] = useState(null); // to track any errors that may occur while fetching the data

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log(res);
                    if (!res.ok) { // check if the response is not ok (status code is not in the range of 200-299)
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false); // set isPending to false once the data has been fetched
                    setError(null); // set error to null once the data has been fetched successfully
                })
                .catch(err => {
                    setError(err.message); // set the error message if there was an error fetching the data
                    setIsPending(false); // set isPending to false if there was an error fetching the data
                });
            }, 1000); // simulate a delay of 1 second before fetching the data
        
    }, [url]);

    return { data, isPending, error }; // return the data, isPending, and error state variables as an object so that they can be used in the component that calls this custom hook

};

export default useFetch;
