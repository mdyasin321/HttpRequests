import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post"  onClick={()=>{props.clicked(props.id)}}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.auth}</div>
        </div>
    </article>
);

export default post;