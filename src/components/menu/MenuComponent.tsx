import Link from "next/link";


const Menu = () => {
    return (
        <ul className="flex space-x-4 bg-gray-800 p-4 text-white">
            <li>
                <Link href='/cars' className="hover:text-blue-400">Cars</Link>
            </li>
            <li>
                <Link href='/create' className="hover:text-blue-400">Create</Link>
            </li>
        </ul>
    );
};

export default Menu;