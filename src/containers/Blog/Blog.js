import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state={
        posts:[],
        postsId:null
        // ans_item:{}
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
              
             const post=response.data.slice(0,4);
             const updatedPosts=post.map((element)=>{
                return {
                    ...element,
                    author:'Yasin'
                }
             })
            this.setState({
                posts:   updatedPosts
            })
        })
    }

    
    // clickHandler=(id)=>{
    //     const post=[...this.state.posts];
      

    //     let item={}
    //     for(let v=0 ; v<post.length; v++){

    //         item=post[v];
    //         if(item.id===id){
           
          
    //           break;
    //         }

    //     }

    //     this.setState({
    //         ans_item:item
    //     })

    // }

    clickHandler=(id)=>{
         this.setState({
            postsId:id
         })
    }
    render () {

        const post= this.state.posts.map((element)=>{
            return (
                <Post id={element.id} key={element.id} title={element.title} auth={element.author}
                clicked={this.clickHandler}></Post>
            )
        })
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    {/* <FullPost title={this.state.ans_item.title} /> */}
                      <FullPost id={this.state.postsId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;