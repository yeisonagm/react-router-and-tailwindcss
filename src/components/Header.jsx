import { Link } from "react-router-dom";


export default function Header() {
    return (
        <nav className="bg-gray-800 text-white">
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/Colors'}>Colors</Link>
                </li>
                <li>
                    <Link to={'/Buttons'}>Buttons</Link>
                </li>
            </ul>
        </nav>
    );
}