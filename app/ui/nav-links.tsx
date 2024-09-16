'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Bienvenue', href: '/'},
  { name: 'Parcours', href: '#resume'},
  { name: 'Projets', href: '#projects'},
];

export default function NavLinks() {

    const pathname = usePathname();
    
    return (
        <nav className='flex justify-center items-center px-3'>
            {links.map((link) => {
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                    'flex justify-center items-center py-3 px-5 text-md text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 md:p-2 md:px-3',
                    {
                        'text-gray-900 dark:text-gray-50 font-bold': pathname === link.href,
                    },
                    )}
                >
                    <span>{link.name}</span>
                </Link>
                );
            })}
        </nav>
    );
}
