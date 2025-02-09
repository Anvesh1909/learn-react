import React, { useState , useEffect }  from 'react'

import axios from 'axios'

function DataFetching1() {

    const [loading,setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post,setPost] = useState({});

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response =>{
            setLoading(false);
            setPost(response.data)
            setError('');
        })
        .catch(error =>{
            setLoading(false);
            setPost({});
            setError('somthing went wronge');
        });
    },[])


    return (
        <div>
            DataFetching1<br></br>
            {loading ? 'loading...' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetching1