'use client';

import { useTheme } from '@/context/ThemeContext';

import {
    MoonIcon,
    SunIcon,
} from '@heroicons/react/24/outline';

const ThemeToggle = () => {

	const { theme, toggleTheme } = useTheme();

	return (
		<button 
            title='Basculer entre le thème sombre et clair'
            className="relative flex justify-center items-center h-[44px] rounded-full p-3 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800 md:flex-none md:justify-start md:p-2 md:px-3 transition-all duration-400" 
            onClick={toggleTheme}>
            	<SunIcon className='block dark:hidden w-5' />
            	<MoonIcon className='hidden dark:block w-5'/>
				<span className='sr-only'>{theme}</span>
        </button>
	);
};

export default ThemeToggle;