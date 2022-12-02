import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

 state={
    loadedPosts:{}
 }

   componentDidUpdate(){

    // Steps to avoid infinite requests:-
    if(this.props.id){
        if(this.state.loadedPosts==null || ( this.state.loadedPosts!==null  &&    this.props.id!==this.state.loadedPosts.id)){

            // here each time componentdidupdate is executing because each time state is changing and request is going to server, 
            // so in order to stop multiple request , we give a condition that if loaded post is null then send the request, otherwise
            // if loadedpost is not null , then I want to see that we are not requesting for the data for the same id , which is already in loaded 
            // post


            // here I am getting post of a particular userid
            axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id).then((response)=>{
        this.setState({
              loadedPosts:response.data
    }) 
    })
        }
    }
    
   }


   deletePostHandler=()=>{

    axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id).then((response)=>{
        console.log(response);
    })

   }


    render () {
        let post = <p>Please select a Post!</p>;

        if(this.props.id){

            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPosts.title}</h1>
                    <p>{this.state.loadedPosts.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );

        }
        // post = (
        //     <div className="FullPost">
        //         <h1>{this.props.title}</h1>
        //         <p>Content</p>
        //         <div className="Edit">
        //             <button className="Delete">Delete</button>
        //         </div>
        //     </div>

        // );
        return post;
    }
}

export default FullPost;