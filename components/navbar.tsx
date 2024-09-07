"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { navLinks } from "@/data"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <NavigationMenu className="sticky top-0 px-1 bg-white/50 z-50 bg-opacity-30 backdrop-blur-lg">
      <span>
        <Link className="text-3xl font-bold text-primary hover:bg-yellow-50" href={'/'}>
          <Image src="/logo.png" width={200} height={40} alt="logo" className="hover:z-20"/>
        </Link>
      </span>
      <span className="flex gap-3 py-2 px-1 text-xs ">
        {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <Button variant="ghost">
                {link.title}
              </Button>
            </Link>
        ))}
         <Link href="/sign-in">
          <Button className="text-white"> 
            Free ESG Score
          </Button>
        </Link>
      </span>
       
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
