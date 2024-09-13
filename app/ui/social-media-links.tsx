'use client';

import {
    PhoneIcon,
    EnvelopeIcon,
    ChatBubbleLeftEllipsisIcon,
    FolderIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Phone', href: 'https://api.whatsapp.com/send?phone=330602736787', icon: PhoneIcon },
    { name: 'Mail', href: 'mailto:mael.belliard@laposte.net?subject=Prise de contact', icon: EnvelopeIcon },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mael-belliard/', icon: ChatBubbleLeftEllipsisIcon },
    { name: 'GitHub', href: 'https://github.com/maelbel', icon: FolderIcon, },
];

export default function NavLinks() {
 
  return (
    <div className="flex justify-center align-center gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
            href={link.href}
            className={'flex h-[35px] bg-gray-800 rounded-full p-3 text-xs font-medium hover:bg-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'}
          >
            <LinkIcon className="w-5" />
          </a>
        );
      })}
    </div>
  );
}
