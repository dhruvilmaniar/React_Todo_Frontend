import React, { Component } from 'react'
import axios from 'axios'

export default class IndId extends Component {
    
    state = {
        post: null,
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.post_id)
            .then((response) => {
                this.setState({
                    post: response.data,
                })
            })

    }
    
    
    render() {

        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">
                Loading Posts....
            </div>
        )

        return (
            <div className="container"> 
                {post}
            </div>
        )
    }
}
