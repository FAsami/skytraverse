import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMoneyCheckAlt,
  FaMapMarkedAlt
} from 'react-icons/fa'
import { MdOutlineGavel, MdPrivacyTip } from 'react-icons/md'
import { IconType } from 'react-icons'
import { GetBrandQuery } from '@/types/gql/graphql'

export interface SocialLink {
  href: string
  icon: IconType
  label: string
}

export interface FooterLink {
  href?: string
  icon?: IconType
  text: string
}

export interface FooterSection {
  header: string
  links: FooterLink[]
}

const social: SocialLink[] = [
  { href: 'https://www.facebook.com', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://www.twitter.com', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://www.instagram.com', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com', icon: FaLinkedin, label: 'LinkedIn' }
]

const data: { [key: string]: FooterSection } = {
  contact: {
    header: 'Contact Us',
    links: [
      { icon: FaMapMarkedAlt, text: '221B Baker Street, London.' },
      { icon: FaPhone, text: '+88 01291222' },
      {
        icon: FaEnvelope,
        text: 'info@foysal.dev',
        href: 'mailto:info@foysal.dev'
      }
    ]
  },
  important: {
    header: 'Important Links',
    links: [
      { href: '/flights', text: 'Flights' },
      { href: '/about-us', text: 'About Us' },
      { href: '/contact', text: 'Contact' }
    ]
  },
  policy: {
    header: 'Policy',
    links: [
      { href: '/terms', icon: MdOutlineGavel, text: 'Terms and Conditions' },
      { href: '/privacy-policy', icon: MdPrivacyTip, text: 'Privacy Policy' },
      { href: '/refund-policy', icon: FaMoneyCheckAlt, text: 'Refund Policy' }
    ]
  }
}

const Footer = ({ brand }: { brand: GetBrandQuery['brand'][0] | null }) => {
  return (
    <footer className="pt-10 border-t">
      <div className="max-w-screen-xl mx-auto px-3 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center mb-6">
              <Link href="/">
                <div className="h-24 flex items-center justify-center">
                  <Image
                    alt={brand?.title || 'Brand name'}
                    height={400}
                    width={400}
                    className="h-full w-full"
                    src={brand?.logo.default}
                  />
                </div>
              </Link>
            </div>
            <div className="flex space-x-4">
              {social.map(({ href, icon: Icon, label }) => (
                <Link key={label} href={href} aria-label={label}>
                  <Icon
                    className="text-gray-700 hover:text-blue-500"
                    size={24}
                  />
                </Link>
              ))}
              <div id="captcha-badge"></div>
            </div>
          </div>
          {Object.entries(data).map(([key, { header, links }]) => (
            <div
              key={key}
              className="flex flex-col items-center md:items-start mb-6 md:mb-0"
            >
              <h2 className="text-gray-700 text-base font-semibold mb-5">
                {header}
              </h2>
              <div className="space-y-3">
                {links.map(({ href, icon: Icon, text }) => (
                  <div
                    key={text || href}
                    className="flex items-center text-gray-700 space-x-2"
                  >
                    {Icon && <Icon size={14} />}
                    {href ? (
                      <Link
                        href={href}
                        className="ml-1 text-sm hover:text-blue-500 transition-all hover:border-b hover:border-b-blue-500"
                      >
                        {text}
                      </Link>
                    ) : (
                      <span className="ml-1 text-sm">{text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-gray-700 border-t py-4 ">
        Copyright &copy;{new Date().getFullYear()}{' '}
        <Link
          href="https://www.foysal.dev/"
          className="text-primary-500 border-b border-b-primary-500 font-semibold"
        >
          foysal.dev
        </Link>
      </div>
    </footer>
  )
}

export { Footer }
