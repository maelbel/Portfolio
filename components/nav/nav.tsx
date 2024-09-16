import ToolLinks from '@/components/nav/tool-links';
import NavLinks from '@/components/nav/nav-links';

export default function Nav() {
  return (
    <header className="fixed top-0 w-full h-16 z-10">
      <div className='flex justify-between items-center w-full h-full mx-auto px-5 max-w-screen-lg'>
        <h1 className='text-xl font-bold'>Mael Belliard</h1>
        <NavLinks />
        <ToolLinks />
      </div>
    </header>
  );
}
