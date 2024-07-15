import React,{useState, useEffect} from 'react'

import axios from 'axios'

function FetchUseEffectButtonClick() {
    const [post, setPost] = useState({});

    const [id,setId] = useState(1);

    const [idFromButton, setIdFromButton ] = useState(1)


    const handleButtonClick = () =>{
        setIdFromButton(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res =>{
            console.log(res);
            setPost(res.data);
        })
        .catch(err =>{
            console.log(err)
        })
    },[idFromButton])

  return (
    <div>
        FetchUseEffect<br></br>

        <input type='text' value={id} 
        onChange={e => setId(e.target.value)}></input>
        <button type='button' onClick={handleButtonClick}>fetch post</button>
        <h2>{post.title}</h2>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default FetchUseEffectButtonClick