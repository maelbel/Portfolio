"use client";

interface BaliseProps {
    href: string;
    title: string;
    icon: string;
}

export default function Balise({ href, title, icon }: BaliseProps) {
  
    return (
        <a href={href} title={title} className='flex justify-center items-center gap-2 p-2 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 hover:dark:bg-gray-800 rounded w-fit transition-all duration-500' rel="noopener noreferrer">
            <svg height="20" width="20">
                <use href={`/stack.svg#${icon}`} className="fill-gray-900 dark:fill-gray-50"></use>
            </svg>
            <span className='text-sm'>{title}</span>
        </a>
    );
}