import React, {FC} from 'react';
type Props = {
    params: { id: string;}
}
const UserPage: FC<Props> = async ({params}) => {

    const {id} = await params;

    return (
        <div>
            User page content {id}
            </div>
    );
};

export default UserPage;