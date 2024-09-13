"use client";

interface ParcoursProps {
    title: string;
    lieu: string;
    date: string;
}

export default function Parcours({ title, lieu, date }: ParcoursProps) {
  
    return (
        <div className="flex flex-col justify-between border border-gray-50 p-4 rounded-lg w-60 h-40 bg-gray-900 text-gray-50">
            <h1 className="text-md font-semibold">{title}</h1>
            <div className="">
                <h4 className="text-sm font-light italic">{lieu}</h4>
                <h4 className="text-sm font-light italic">{date}</h4>
            </div>
        </div>
    );
}