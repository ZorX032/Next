import {getAllComments} from "@/services/api.service";


export const CommentComponent = async () => {

    const comment =  await getAllComments();

    return (
        <div>
            {
                comment.map((comment)=>
                    <div key={comment.id}>{comment.id} {comment.body}</div>)
            }
        </div>
    );
};