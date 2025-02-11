import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UsersLayout metadata'
}

type Props = {children: React.ReactNode}
const CarsLayout =
    ({children}: Props) => {
        return (
            <div>
                {children}
            </div>
        );
    };

export default CarsLayout;