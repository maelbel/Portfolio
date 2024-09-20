"use client";

interface ProjectProps {
    title: string;
    description: string;
    date: string;
    link: string;
    children: React.ReactNode;
}

export default function Project({ title, description, date, link, children }: ProjectProps) {
  
    return (
        <a href={link} className="flex border border-gray-200 rounded-lg mb-5 dark:border-gray-800 hover:bg-gray-100 hover:dark:bg-gray-800 transition-all duration-400" target='_blank' rel="noopener noreferrer">
            <div className='flex flex-col justify-between p-5 gap-5'>
                <div className="text-sm">{date}</div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-md font-semibold">{title}</h1>
                    <h4 className="text-sm font-light">{description}</h4>
                </div>
                <div className="flex gap-2">{children}</div>
            </div>
            
        </a>
    );
}