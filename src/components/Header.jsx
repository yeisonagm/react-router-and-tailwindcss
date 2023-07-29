import { Link } from "react-router-dom";


export default function Header() {
    return (
        <nav className="bg-slate-700 text-white py-4 flex items-center px-4 sm:px-8">
            <ul className="grow">
                <li>
                    <Link to={'/'} className="flex gap-3 items-center">
                        <img src="/design.png" alt="logo" />
                        <span className="hidden text-lg sm:  font-bold sm:block ">
                            Design styles
                        </span>
                    </Link>
                </li>
            </ul>

            <ul className="flex justify-center items-center gap-5 md:gap-8 text-lg">
                <li>
                    <Link to={'/'}
                        className="hover:border-b hover:text-gray-200">Home</Link>
                </li>
                <li>
                    <Link to={'/Colors'} className="hover:border-b hover:text-gray-200">Colors</Link>
                </li>
                <li>
                    <Link to={'/Buttons'} className="hover:border-b hover:text-gray-200">Buttons</Link>
                </li>
            </ul>
        </nav>
    );
}