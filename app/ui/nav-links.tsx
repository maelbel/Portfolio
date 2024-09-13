'use client';

import {
  HomeIcon,
  UserIcon,
  DocumentTextIcon,
  FolderIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import * as React from "react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Accueil', href: '#home', icon: HomeIcon },
  { name: 'À propos', href: '#about', icon: UserIcon, },
  { name: 'Formations', href: '#resume', icon: DocumentTextIcon },
  { name: 'Projets', href: '#projects', icon: FolderIcon },
  { name: 'Contact', href: '#contact', icon: EnvelopeIcon },
];

export default function NavLinks() {

    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
          console.log(window.scrollY);
        };
    
        // just trigger this so that the initial state 
        // is updated as soon as the component is mounted
        // related: https://stackoverflow.com/a/63408216
        handleScroll();
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    return (
        <nav className='navmenu px-3'>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 py-3 px-5 mb-3 text-md font-medium text-gray-400 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                        'text-gray-50': pathname === link.href,
                    },
                    )}
                >
                    <LinkIcon className="w-6" />
                    <p className="hidden md:block">{link.name}</p>
                </Link>
                );
            })}
        </nav>
    );
}
