
import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import LinkButton from './link-button'
import Link from 'next/link'


function Footer() {
  return (
    <footer className='flex flex-col lg items-around justify-between p-2'>
      
      <div className='flex justify-between p-2 lg:gap-20'>
          <div className='flex flex-col lg:flex-row items-around justify-between p-2 lg:w-[366px]'>
              <div className='h-full w-fu text-start flex flex-col items-start justify-between'>
                <Image src='/logo.png' alt='logo' width={330} height={100} />
                <p className='max-w-[340px] mt-5 mb-10 text-sm'>
                  Optieva is a management consultancy firm based out of Washington. We believe in putting 
                  your organization at the heart of our mission. Our cutting-edge consulting experience is 
                  designed to cater to your unique needs and challenges in the digital age.
                </p>

                <h2 className='font-bold'>
                  Get the latest ESG news of your industry
                </h2>
                <span className='flex flex-row gap-0 items-center justify-center'> 
                  <Input type='email' placeholder='Enter your email' className='w-full rounded-r-none' />
                    <Button className='bg-primary text-white p-2 rounded-md rounded-l-none'>
                      Subscribe
                    </Button>
                </span>
              </div>
          </div>

          <div className='grid grid-cols-5 justify-between items-start w-full -mr-10'>
            {footerItems.map((footerItem, index) => (
              <div key={index} className='flex flex-col items-start justify-start gap-y-2'> 
                <h3 className='font-bold'>{footerItem.title}</h3>
                  {footerItem.items.map((item, index) => (
                      <Link href={item.link} key={index} className='hover:text-gray-400 hover:underline text-gray-400/80'>
                        {item.itemTitle}
                      </Link>
                  ))}
              </div>
            ))}


          </div>

        </div>

      <div className='flex items-center justify-between p-2 text-center w-screen'>
        <p className='text-sm'>
          © 2021 Optieva. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

type FooterItem = {
  title: string
  items: {
    itemTitle: string
    link: string
  }[]
}

const footerItems: FooterItem[] = [
  {
    title: 'About Us',
    items: [
      {
        itemTitle: 'Our Story',
        link: '/our-story'
      },
      {
        itemTitle: 'Our Team',
        link: '/our-team'
      },
      {
        itemTitle: 'Careers',
        link: '/careers'
      },
      {
        itemTitle: 'Contact Us',
        link: '/contact-us'
      }
    ]
  },
  {
    title: 'Services',
    items: [
      {
        itemTitle: 'ESG Consulting',
        link: '/esg-consulting'
      },
      {
        itemTitle: 'ESG Index',
        link: '/esg-index'
      },
      {
        itemTitle: 'ESG Certification',
        link: '/esg-certification'
      },
      {
        itemTitle: 'ESG Rating',
        link: '/esg-rating'
      }
    ]
  },
  {
    title: 'Resources',
    items: [
      {
        itemTitle: 'ESG Reports',
        link: '/esg-reports'
      },
      {
        itemTitle: 'ESG News',
        link: '/esg-news'
      },
      {
        itemTitle: 'ESG Case Studies',
        link: '/esg-case-studies'
      },
      {
        itemTitle: 'ESG Webinars',
        link: '/esg-webinars'
      }
    ]
  },
  {
    title: 'Legal',
    items: [
      {
        itemTitle: 'Privacy Policy',
        link: '/privacy-policy'
      },
      {
        itemTitle: 'Terms of Service',
        link: '/terms-of-service'
      },
      {
        itemTitle: 'Cookie Policy',
        link: '/cookie-policy'
      },
      {
        itemTitle: 'Disclaimer',
        link: '/disclaimer'
      }
    ]
  },
  {
    title: "Important Links",
    items: [
      {
        itemTitle: 'Blog',
        link: '/blog'
      },
      {
        itemTitle: 'FAQ',
        link: '/faq'
      },
      {
        itemTitle: 'Support',
        link: '/support'
      },
      {
        itemTitle: 'Sitemap',
        link: '/sitemap'
      }
    ]
  }
]