import React, { Component } from 'react'
import { connect } from 'react-redux'

class IndId extends Component {
    
        
    
    render() {

        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
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

const mapStateToProps = (state, ownProps) => {
    console.log(state.posts)
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find((post) => post.id === parseInt(id))
    }
}


export default connect(mapStateToProps)(IndId)