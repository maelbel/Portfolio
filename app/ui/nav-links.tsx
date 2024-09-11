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

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/#home', icon: HomeIcon },
  { name: 'About', href: '/#about', icon: UserIcon, },
  { name: 'Resume', href: '/#resume', icon: DocumentTextIcon },
  { name: 'Projects', href: '/#projects', icon: FolderIcon },
  { name: 'Contact', href: '/#contact', icon: EnvelopeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <div className='px-3'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 py-3 px-5 mb-3 text-md font-medium text-gray-400 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
