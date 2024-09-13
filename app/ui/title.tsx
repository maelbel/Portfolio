"use client";

interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
  
    return (
        <div className="mb-6">
            <h1 className="text-3xl font-bold mb-3">{title}</h1>
            <div className="border-b-2 border-blue-600 w-16"></div>
        </div>
    );
}