import Post from "./Post"

const Posts = ({posts}) => {
 return(
    <div>
        <h3>POSTS</h3>
        {posts && posts.map(post => (
           <Post 
           title={post.title}
           completed={post.completed}
           key={post.id}
           /> 
        ))}  
    </div>
 )
}

export default Posts