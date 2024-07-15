import React,{useState, useEffect} from 'react'

import axios from 'axios'


function FetchAll() {
    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res =>{
            console.log(res);
            setPosts(res.data);
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

  return (
    <div>
        FetchUseEffect<br></br>

        <ol>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ol>
    </div>

        )
}

export default FetchAll