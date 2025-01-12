import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex items-center gap-[60px]">
            <img src="/assets/images/logos/logo.svg" className="flex shrink-0" alt="logo" />
            <ul className="flex items-center gap-10">
                <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                    <Link to="/manager">Home</Link>
                </li>
                <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                    <Link to="#">Features</Link>
                </li>
                <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                    <Link to="#">Testimonials</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;