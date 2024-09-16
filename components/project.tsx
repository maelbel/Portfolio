"use client";

interface ProjectProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export default function Project({ title, description, children }: ProjectProps) {
  
    return (
        <div className="flex flex-col justify-between border border-gray-50 w-80 h-52 p-4 rounded-lg bg-gray-900 text-gray-50">
            <div>
                <h1 className="text-md font-semibold">{title}</h1>
                <h4 className="text-sm font-light italic">{description}</h4>
            </div>
            <div className="flex gap-2">{children}</div>
        </div>
    );
}