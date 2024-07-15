import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchUseEffect() {

    const [post, setPost] = useState({});

    const [id,setId] = useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res);
            setPost(res.data);
        })
        .catch(err =>{
            console.log(err)
        })
    },[id])

  return (
    <div>
        FetchUseEffect<br></br>

        <input type='text' value={id} 
        onChange={e => setId(e.target.value)}></input>
        <h2>{post.title}</h2>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default FetchUseEffect