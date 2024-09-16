'use client';

import ThemeToggle from '@/app/ui/theme-toggle';

import {
    ChartBarIcon,
    ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'États des services', href: 'https://stats.uptimerobot.com/3Ao7tMWcUq', icon: ChartBarIcon, target: "newTab" },
    { name: 'Changelog du site', href: '/changelog', icon: ArrowPathRoundedSquareIcon },
];

export default function ToolLinks() {
 
  return (
    <div className="flex justify-center align-center gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            target={link.target ? link.target : ''}
            rel={link.target ? "noopener noreferrer" : ""}
            key={link.name}
            href={link.href}
            title={link.name}
            className={'flex h-[44px] rounded-full p-3 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800 md:flex-none md:justify-start md:p-2 md:px-3 transition-all duration-400'}
          >
            <LinkIcon className="w-5" />
          </a>
        );
      })}
      <ThemeToggle />
    </div>
  );
}
