import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

interface LinkButtonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

function LinkButton(
    {children, href, className}: LinkButtonProps
) {
  return (
    <Link href={href}>
        <Button className={className} variant={'link'}>
            {children}
        </Button>
    </Link>
  )
}

export default LinkButton