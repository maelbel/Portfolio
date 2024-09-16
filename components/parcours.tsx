"use client";

interface ParcoursProps {
    title: string;
    lieu: string;
    date: string;
    children: React.ReactNode;
}

export default function Parcours({ title, lieu, date, children }: ParcoursProps) {
  
    return (
        <div className="flex flex-col justify-between py-4">
            <h4 className="text-sm font-light italic">{date}</h4>
            <h1 className="text-md font-bold">{title}</h1>
            <h4 className="text-sm font-light font-semibold italic">{lieu}</h4>
            <div className="flex mt-2">{children}</div>
        </div>
    );

}