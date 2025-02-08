import {getAllPosts, getAllUsers} from "@/services/api.service";


export const PostComponent = async () => {

    const post =  await getAllPosts();

    return (
        <div>
            {
                post.map((post)=>
                    <div key={post.id}>{post.id} {post.body}</div>)
            }
        </div>
    );
};