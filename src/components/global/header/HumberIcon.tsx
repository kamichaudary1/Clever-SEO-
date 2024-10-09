// Define the props type for Nav component
interface NavProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}

export default function HumberIcon( { isMenuOpen, setIsMenuOpen }: NavProps) {

    // Toggle the mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="md:hidden absolute right-5 top-5 z-10">
            <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Toggle Navigation"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
            >
                {/* Hamburger Icon */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
                </svg>
            </button>
        </div>
    )
}
