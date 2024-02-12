import Link from "next/link";



const DetailPage = async ({ params }) => {
     console.log(params.postid);

     const res = await fetch(`http://localhost:5000/posts/${params.postid}`)
     const post = await res.json();
     console.log(post);

     return (
          <div>
               <div key={post.id} className="card flex  bg-gray-400 shadow-xl">
                    <div className="card-body">
                         <h2 className="card-title">{post.title}</h2>
                         <p>{post.description}</p>
                         <p>{post.likes_count}</p>
                         <div className="card-actions justify-end">
                              <Link href={`/posts`}>
                                   <button className="btn btn-primary">Back</button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DetailPage;