import {getAllUsers} from "@/services/api.service";


export const UserComponent = async () => {

    const user =  await getAllUsers();

    return (
        <div>
            {
                user.map((user)=>
                    <div key={user.id}>{user.id} {user.name}</div>)
            }
        </div>
    );
};