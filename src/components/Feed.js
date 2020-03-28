import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import FeedImage from './pokeball.png'

export default class Feed extends Component {

    state = {
        posts : []
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then((response) => {
                console.log(response)
                this.setState({
                    posts: response.data.slice(0,10)
                })
            })
    }
    
    
    render() {

        const {posts} = this.state

        const ImageStyle = {
            "position": "absolute",
            "top": "20px",
            "left": "-100px",
            "opacity": '0.6',
        }

        const postStyle = {
            "overflow" : "hidden",
            "padding-left" : "80px"
        }

        const postsList = posts.length ? (
            posts.map((post) => {
                return (
                    <div className="post card" style={postStyle} key={post.id}>
                        <img style={ImageStyle} src={FeedImage} alt="Feed" />
                        <div className="card-content">
                            <Link to={"/Motivation/" + post.id}>
                                <span className="card-title blue-grey-text darken-4"><b>{post.title}</b></span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div>No Posts Yet!! </div>
        )

        return (
            <div className="container">
                <h4 className="center">Feeds</h4>
                {postsList} 
            </div>
        )
    }
}
