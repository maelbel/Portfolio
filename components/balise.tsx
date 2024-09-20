"use client";

interface BaliseProps {
    href: string;
    title: string;
    icon: string;
}

export default function Balise({ href, title, icon }: BaliseProps) {
  
    return (
        <a href={href} title={title} className='flex justify-center items-center gap-2 p-2 border border-gray-500 text-gray-500 hover:border-gray-900 hover:text-gray-900 dark:border-gray-400 dark:text-gray-400 dark:hover:border-gray-50 dark:hover:text-gray-50 rounded w-fit transition-all duration-500' rel="noopener noreferrer">
            <svg height="20" width="20">
                <use href={`/stack.svg#${icon}`} className="fill-gray-900 dark:fill-gray-50"></use>
            </svg>
            <span className='text-sm'>{title}</span>
        </a>
    );
}