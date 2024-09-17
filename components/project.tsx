"use client";

import Image from 'next/image';

interface ProjectProps {
    title: string;
    description: string;
    preview: string;
    link: string;
    children: React.ReactNode;
}

export default function Project({ title, description, preview, link, children }: ProjectProps) {
  
    return (
        <a href={link} className="flex border border-gray-200 rounded-lg mb-5 dark:border-gray-800 hover:bg-gray-100 hover:dark:bg-gray-800 transition-all duration-400" target='_blank' rel="noopener noreferrer">
            <Image src={`/projects/previews/${preview}-light.png`} alt={title} width={400} height={200} className='dark:hidden rounded-l-lg'/>
            <Image src={`/projects/previews/${preview}-dark.png`} alt={title} width={400} height={200} className='hidden dark:block rounded-l-lg'/>
            <div className='flex flex-col justify-between p-5'>
                <div>
                    <h1 className="text-md font-semibold">{title}</h1>
                    <h4 className="text-sm font-light italic">{description}</h4>
                </div>
                <div className="flex gap-2">{children}</div>
            </div>
            
        </a>
    );
}