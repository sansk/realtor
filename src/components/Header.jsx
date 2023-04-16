import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assests/logo650x200.png';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const pathMatchRoute = route => {
        if(route === location.pathname) return true;
    };
    return (
        <div className="header border-b-4 border-b-gray-100 bg-white z-10 sticky">
            <header className="flex flex-col sm:flex-row sm:justify-between items-center w-full md:w-5/6 m-auto">
                <img src={Logo} className="logo cursor-pointer h-12 sm:h-20" onClick={() => navigate('/')} alt="Realtor Logo" />
                <div className="nav">
                    <ul className="w-72 h-20 flex justify-end items-center font-sans font-semibold">
                        <li className={`p-6 cursor-pointer hover:bg-sky-600 hover:font-bold hover:text-white 
                                        ${pathMatchRoute('/') && "border-b-4 border-b-sky-600"}`}
                            onClick={() => navigate('/')}>Home</li>
                        <li className={`p-6 cursor-pointer hover:bg-sky-600 hover:font-bold hover:text-white 
                                        ${pathMatchRoute('/offers') && "border-b-4 border-b-sky-600"}`}
                            onClick={() => navigate('/offers')}>Offers</li>
                        <li className={`p-6 cursor-pointer hover:bg-sky-600 hover:font-bold hover:text-white 
                                        ${pathMatchRoute('/sign-in') && "border-b-4 border-b-sky-600"}`}
                            onClick={() => navigate('/sign-in')}>Sign In</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
