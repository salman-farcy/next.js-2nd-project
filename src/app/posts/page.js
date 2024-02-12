import React from 'react';

const page = async () => {

     const res = await fetch("http://localhost:5000/posts", {
          cache: "no-store",
     });
     const posts = await res.json();

     // console.log(posts);


     return (
          <div>
               <h1>Total Post: {posts.length} </h1>
               <div className="flex gap-3">
                    {
                         posts.map(post => <div key={post.id} className="card flex  bg-gray-400 shadow-xl">
                              <div className="card-body">
                                   <h2 className="card-title">{post.title}</h2>
                                   <p>{post.description}</p>
                                   <div className="card-actions justify-end">
                                       <p>{post.likes_count}</p>
                                   </div>
                              </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default page;