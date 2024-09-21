"use client";

interface TagsProps {
    titles: Array<string>;
}

export default function Tags({ titles }: TagsProps) {
  
    return (
        <div className='flex flex-wrap gap-2'>
        {titles.map((title) => {
            return (
                <span key={title} title={title} className='text-sm px-2 py-1 bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50 rounded transition-all duration-500 whitespace-nowrap'>
                    {title}
                </span>
            );
        })}
        </div>
    );
}