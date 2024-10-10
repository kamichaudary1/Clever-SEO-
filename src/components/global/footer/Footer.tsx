import Link from 'next/link'
import React from 'react'

interface NavLink {
  href: string;
  label: string;
}

interface SocialMediaLink extends NavLink {
  icon: string;
}

const quickLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faqs", label: "Blog" },
  { href: "/Support", label: "Support" },
  { href: "/contact-us", label: "Contact Us" },
];

const socialMediaLinks: SocialMediaLink[] = [
  { href: "/", label: "Facebook", icon: '' },
  { href: "/", label: "Twitter", icon: '' },
  { href: "/", label: "LinkedIn", icon: '' },
  { href: "/", label: "Instagram", icon: '' },
]

const legalLinks: NavLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
]

export default function Footer() {
  return (
    <footer className='w-full px-8 pt-14 pb-5 bg-[#363636] text-white'>
      <div className='flex gap-y-5 flex-col lg:flex-row lg:justify-between lg:items-end '>
        <div className='flex flex-col max-w-[542px] w-full'>
          <Link href='#' className='text-[30px] font-extrabold pb-[19px]'>CleverSEO</Link>
          <span className='text-[14px] font-normal'>Elevate Your Content, Optimize Your Success</span>
          <p className='text-[14px] font-normal pt-[57px]'>
            Your ultimate partner in creating high-quality, SEO-optimized content effortlessly. We harness the power of AI to elevate your writing and boost your online visibility.
            Quick Links
          </p>
        </div>
        <div className='flex flex-wrap gap-y-3 justify-between max-w-[562px] w-full'>
          <ul className='text-[14px] w-[80px]'>
            <li className='font-semibold'>Quick Links</li>
            {quickLinks.map(item => {
              return <li><Link href={item.href}>{item.label}</Link></li>
            })}
          </ul>
          <ul className='text-[14px] w-[115px]'>
            <li className='font-semibold'>Connect With Us</li>
            {socialMediaLinks.map(item => {
              return <li><Link href={item.href}>{item.label}</Link></li>
            })}
          </ul>
          <ul className='text-[14px] w-[112px]'>
            <li className='font-semibold'>Legal</li>
            {legalLinks.map(item => {
              return <li><Link href={item.href}>{item.label}</Link></li>
            })}
          </ul>
        </div>
      </div>
      <p className='text-[#959595] md:pt-10 md: mt-3 text-center'>Copyright © 2024 CleverSEO. All Rights Reserved.</p>
    </footer>
  )
}
