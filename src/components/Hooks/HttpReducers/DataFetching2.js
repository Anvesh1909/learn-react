import React,{ useReducer, useEffect } from 'react'

import axios from 'axios'

const initialState = {
    loading : true,
    error : '',
    post : {},
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
        case 'FETCH_ERROR':
            return {
                loading : false ,
                post : {},
                error : 'somthing went wronge'
            }
        default:
            return null;
    }
}

function DataFetching2() {

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/2`)
        .then(response =>{
            dispatch({type : 'FETCH_SUCCESS', payload : response.data})
        })
        .catch(error =>{
            dispatch({type : 'FETCH_ERROR'})
            
        });
    },[])

    return (
        <div>
            DataFetching2<br></br>
            {state.loading ? 'loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetching2