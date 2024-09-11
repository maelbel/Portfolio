"use client";

import Image from 'next/image';

export default function Balise(props: object) {
  
    return (
        <a href={props.href} title={props.title} className='flex justify-center items-center gap-2 p-2 border border-gray-400 text-gray-400 hover:border-black hover:text-black rounded w-fit transition-all duration-500' rel="noopener noreferrer">
            <Image src={`/projects/technologies/${props.source}-logo.png`} alt={props.title} width={20} height={20} />
            <span className='text-sm'>{props.title}</span>
        </a>
    );
}