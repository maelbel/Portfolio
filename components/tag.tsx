"use client";

interface TagProps {
    title: string;
}

export default function Tag({ title }: TagProps) {
  
    return (
        <span title={title} className='text-sm px-2 py-1 me-2 bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50 rounded transition-all duration-500' rel="noopener noreferrer">
            {title}
        </span>
    );
}