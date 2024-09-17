"use client";

interface StackProps {
    size: string;
    icons: Array<string>;
}

export default function Stack({ size, icons }: StackProps) {
  
    return (
        <>
        {icons.map((icon) => {
            return (
            <svg height={size} width={size} key={icon} className="me-2">
                <use href={`/stack.svg#${icon}`} className="fill-gray-900 dark:fill-gray-50"></use>
            </svg>
            );
        })}
        </>
    );
}