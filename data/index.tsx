import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { GitBranchIcon,} from "lucide-react";


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

