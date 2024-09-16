"use client";

import Image from 'next/image';

interface TechnoProps {
    title: string;
    source: string;
}

export default function Techno({ title, source }: TechnoProps) {
  
    return (
        <span title={title} className='flex justify-center items-center gap-2 p-1 border bg-gray-50 border-gray-400 text-gray-400 rounded-full w-fit' rel="noopener noreferrer">
            <Image src={`/projects/technologies/${source}-logo.png`} alt={title} title={title} width={20} height={20} className='rounded-full' />
        </span>
    );
}