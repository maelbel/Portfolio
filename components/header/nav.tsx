import ToolLinks from '@/components/header/tool-links';
import NavLinks from '@/components/header/nav-links';

export default function Nav() {
  return (
    <header className="hidden md:block md:fixed top-0 w-full h-16 z-10">
      <div className='flex justify-between items-center w-full h-full mx-auto px-5 max-w-screen-lg'>
        <a href="/"><h1 className='text-xl font-bold'>Mael Belliard</h1></a>
        <NavLinks />
        <ToolLinks />
      </div>
    </header>
  );
}
