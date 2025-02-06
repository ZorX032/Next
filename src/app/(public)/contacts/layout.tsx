import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contacts layout metadata'
}

type Props = {children: React.ReactNode}
const ContactsLayout =
({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ContactsLayout;