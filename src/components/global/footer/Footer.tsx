import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

interface NavLink {
  href: string;
  label: string;
}

interface SocialMediaLink extends NavLink {
  icon: JSX.Element;
}

const quickLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faqs", label: "Blog" },
  { href: "/Support", label: "Support" },
];

const legalLinks: NavLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

const socialMediaLinks: SocialMediaLink[] = [
  { href: "https://facebook.com", label: "Facebook", icon: <FaFacebook /> },
  { href: "https://twitter.com", label: "Twitter", icon: <FaTwitter /> },
  { href: "https://instagram.com", label: "Instagram", icon: <FaInstagram /> },
  { href: "https://linkedin.com", label: "LinkedIn", icon: <FaLinkedin /> },
];

export default function Footer() {
  return (
    <footer className='w-full pt-14 pb-5 bg-[#363636] text-white'>
      <div className='px-4 xl:px-0 xl:max-w-7xl mx-auto flex gap-y-5 flex-col lg:flex-row lg:justify-between lg:items-center '>
        <div className='flex flex-col max-w-[542px] w-full'>
          <Link href='#' className='text-customGray md:text-white text-[34px] font-extrabold pb-0 md:pb-5'>CleverSEO</Link>
          <span className='text-[14px] text-customGray md:text-white font-normal'>Elevate Your Content, Optimize Your Success</span>
          <p className=' text-customGray md:text-white text-[14px] font-normal pt-9'>
            Your ultimate partner in creating high-quality, SEO-optimized content effortlessly. We harness the power of AI to elevate your writing and boost your 
            online visibility.
          </p>
        </div>
        <div className='flex flex-wrap gap-y-3 justify-between mx-3 md:mx-0 max-w-[562px] w-full'>
          <ul className='w-[93%] md:w-[80px] border-t border-customGray pt-5 px-4 pb-5 md:pb-0 md:px-0'>
            <li className='font-semibold text-customGray md:text-white text-[14px] pb-4 md:pb-3'>Quick Links</li>
            {quickLinks.map(item => (
              <li key={item.label}>
                <Link
                  className='text-[14px] text-customGray md:text-white font-normal pb-1 hover:text-[#5DA389]' 
                  href={item.href}>{item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='w-[93%] md:w-32 border-t border-customGray pt-5 px-4 pb-5 md:pb-0 md:px-0'>
            <li className='font-semibold text-customGray md:text-white text-[14px] pb-4 md:pb-3'>Connect With Us</li>
            {socialMediaLinks.map(item => (
              <li key={item.label}>
                <Link 
                  className='flex items-center space-x-2 text-[14px] font-normal pb-1'
                  href={item.href} target="_blank" rel="noopener noreferrer"
                >
                  {item.icon} {/* Icon */}
                  <span className='text-customGray md:text-white hover:text-[#5DA389]'>{item.label}</span> {/* Label */}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='w-[93%] md:w-32 border-t border-customGray pt-5 px-4 pb-5 md:pb-0 md:px-0'>
            <li className='font-semibold text-customGray md:text-white text-[14px] pb-4 md:pb-3'>Legal</li>
            {legalLinks.map(item => (
              <li key={item.label}>
                <Link
                  className='text-[14px] font-normal text-customGray md:text-white pb-1 hover:text-[#5DA389]' 
                  href={item.href}>{item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className='text-[rgba(181, 181, 181, 1)] text-xs md:text-[15px] pt-11 text-center'>Copyright © 2024 CleverSEO. All Rights Reserved.</p>
    </footer>
  );
}
