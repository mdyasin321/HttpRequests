import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state={
        posts:[],
        postsId:null,
        error:false
        // ans_item:{}
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
              
             const post=response.data.slice(0,4);
             console.log(post);
             const updatedPosts=post.map((element)=>{
                return {
                    ...element,
                    // here it is the copy of element object 
                    author:'Yasin'
                }
             })
            this.setState({
                posts:   updatedPosts
            })


        }).catch((error)=>{
            this.setState({
                error:true
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

        let post=<p  style={{textAlign:'center'}}>Something Went WRONG</p>
    if(this.state.error===false){
         post= this.state.posts.map((element)=>{
            return (
                <Post id={element.id} key={element.id} title={element.title} auth={element.author}
                clicked={this.clickHandler}
                ></Post>
            )
        })

    }
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