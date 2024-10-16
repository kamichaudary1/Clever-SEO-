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
          <Link href='#' className='text-[34px] font-extrabold pb-[19px]'>CleverSEO</Link>
          <span className='text-[14px] font-normal'>Elevate Your Content, Optimize Your Success</span>
          <p className='text-[14px] font-normal pt-9'>
            Your ultimate partner in creating high-quality, SEO-optimized content effortlessly. We harness the power of AI to elevate your writing and boost your 
            online visibility.
          </p>
        </div>
        <div className='flex flex-wrap gap-y-3 justify-between max-w-[562px] w-full'>
          <ul className='text-[14px] w-[80px]'>
            <li className='font-semibold text-[14px] pb-3'>Quick Links</li>
            {quickLinks.map(item => (
              <li key={item.label}>
                <Link
                  className='text-[14px] font-normal pb-1 hover:text-[#5DA389]' 
                  href={item.href}>{item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='text-[14px] w-32'>
            <li className='font-semibold text-[14px] pb-3'>Connect With Us</li>
            {socialMediaLinks.map(item => (
              <li key={item.label}>
                <Link 
                  className='flex items-center space-x-2 text-[14px] font-normal pb-1'
                  href={item.href} target="_blank" rel="noopener noreferrer"
                >
                  {item.icon} {/* Icon */}
                  <span className=' hover:text-[#5DA389]'>{item.label}</span> {/* Label */}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='text-[14px] w-32'>
            <li className='font-semibold text-[14px] pb-3'>Legal</li>
            {legalLinks.map(item => (
              <li key={item.label}>
                <Link
                  className='text-[14px] font-normal pb-1 hover:text-[#5DA389]' 
                  href={item.href}>{item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className='text-[#959595] pt-11 text-center'>Copyright © 2024 CleverSEO. All Rights Reserved.</p>
    </footer>
  );
}
