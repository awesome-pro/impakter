import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { GitBranchIcon,} from "lucide-react";
import { LatestCardProps } from "@/components/latest-card";
import { CompanyCardProps } from "@/components/company-card";


export interface NavLink{
    title: string;
    href: string;
    icon?: React.ReactNode;
}

export const navLinks: NavLink[] = [
    {
        title: "Top Susutainable Compnaies",
        href: "/companies/top",
    },
    {
        title: "ESG Software",
        href: "/esg-software",
    },
    {
        title: "About Us",
        href: "/about",
    },
    {
        title: "About Us",
        href: "/about",
    },
]

export const latestNews: LatestCardProps[] = [
    {
        title: "Sustainable Companies",
        description: "Top 10 Sustainable Companies in 2021",
        image: "https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        date: "August 12, 2021",
        linkTitle: "Read More",
        link: "/news/sustainable-companies",
    },
    {
        title: "ESG Software",
        description: "Top 10 ESG Software in 2021",
        image: "https://images.pexels.com/photos/8633368/pexels-photo-8633368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        date: "August 12, 2021",
        linkTitle: "Read More",
        link: "/news/esg-software",
    },
    {
        title: "Sustainable Companies",
        description: "Top 10 Sustainable Companies in 2021",
        image: "https://images.pexels.com/photos/8633368/pexels-photo-8633368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        date: "August 12, 2021",
        linkTitle: "Read More",
        link: "/news/sustainable-companies",
    },
    {
        title: "ESG Software",
        description: "Top 10 ESG Software in 2021",
        image: "https://images.pexels.com/photos/8633368/pexels-photo-8633368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        date: "August 12, 2021",
        linkTitle: "Read More",
        link: "/news/esg-software",
    },
]

export const companyCards: CompanyCardProps[] = [
    {
        companyName: "Apple",
        companyESGScore: 80,
        logoUrl: "https://images.pexels.com/photos/8633368/pexels-photo-8633368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        companyName: "Microsoft",
        companyESGScore: 70,
        logoUrl: "https://images.pexels.com/photos/8633368/pexels-photo-8633368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        companyName: "Google",
        companyESGScore: 60,
        logoUrl: "https://images.pexels.com/photos/8633368/pexels-photo-8633368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        companyName: "Amazon",
        companyESGScore: 50,
        logoUrl: "https://images.pexels.com/photos/8633368/pexels-photo-8633368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        companyName: "Facebook",
        companyESGScore: 40,
        logoUrl: "https://images.pexels.com/photos/8633368/pexels-photo-8633368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        companyName: "Tesla",
        companyESGScore: 30,
        logoUrl: "https://images.pexels.com/photos/8633368/pexels-photo-8633368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
]


export type FooterIcon = {
    icon: React.ReactNode;
    link: string;
}

export const footerIcons: FooterIcon[] = [
   {
         icon: <TwitterLogoIcon />,
         link: 'https://twitter.com/your-twitter'
   },
   {
        icon: <LinkedInLogoIcon />,
        link: 'https://linkedin.com/your-linkedin'
   },
   {
      icon: <GitBranchIcon />,
     link: "https://github.com/awesome-pro"
   },
]


