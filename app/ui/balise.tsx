"use client";

import Image from 'next/image';

interface BaliseProps {
    href: string;
    title: string;
    source: string;
}

export default function Balise({ href, title, source }: BaliseProps) {
  
    return (
        <a href={href} title={title} className='flex justify-center items-center gap-2 p-2 border border-gray-400 text-gray-400 hover:border-black hover:text-black rounded w-fit transition-all duration-500' rel="noopener noreferrer">
            <Image src={`/projects/technologies/${source}-logo.png`} alt={title} width={20} height={20} />
            <span className='text-sm'>{title}</span>
        </a>
    );
}