import Link from "next/link";

// Define the props type for Nav component
interface NavProps {
    isMenuOpen: boolean;
}

// Define the type for each navigation link
interface NavLink {
    href: string;
    label: string;
}

// Define the navigation links as an array of NavLink objects
const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
];

export default function Nav( { isMenuOpen }: NavProps ) {
  return (
    <nav
      className={`${
        isMenuOpen ? "block" : "hidden"
      } absolute left-0 top-16 z-10 bg-black p-3 md:bg-transparent md:static max-w-md w-full md:flex md:justify-between md:items-center transition-all`}
    >
      {navLinks.map((link) => (
        <Link 
          key={link.href} 
          href={link.href}
          className="flex w-full md:w-auto text-white md:text-black text-xl md:text-[14px] xl:text-xl px-2 py-2 md:p-0 
          hover:text-[#5DA389] font-medium transition-colors duration-300"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
