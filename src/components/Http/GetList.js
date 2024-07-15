import React, { Component } from 'react'

import axios from 'axios'

export class GetList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts : []
      }
    }
    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response => {
            console.log( Response.data)
            this.setState({
                posts: Response.data
            })
        })
        .catch(error =>{
            console.log(error)
        })
    
    }

  render() {
    const {posts} = this.state
    return (
      <div>
        PostList

        {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>) :
            null 
        }
      </div>
    )
  }
}

export default GetList