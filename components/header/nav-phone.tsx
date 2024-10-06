import ToolLinks from '@/components/header/tool-links';
import NavLinks from '@/components/header/nav-links';

export default function NavPhone() {
    return (
      <header className="fixed md:hidden top-0 left-0 w-full h-16 z-50">
        <div className="flex justify-between items-center w-full h-full mx-auto px-5 max-w-screen-lg">
            <a href="/" className='text-xl font-bold'>Mael Belliard</a>
            <label className="relative z-50 cursor-pointer px-3 py-6" htmlFor="mobile-menu">
                <input className="peer hidden" type="checkbox" id="mobile-menu" />
                <div
                    className="relative z-50 block h-[1px] w-7 bg-gray-900 bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-gray-900 dark:before:bg-gray-50 before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-gray-900 dark:after:bg-gray-50 after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"
                >
                </div>
                <div
                    className="fixed top-0 left-0 z-30 h-screen w-screen -translate-y-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-y-0"
                >
                    <nav className="flex flex-col justify-center bg-gray-50 dark:bg-gray-900 items-center h-screen w-screen">
                        <NavLinks />
                        <br/>
                        <ToolLinks />
                    </nav>
                </div>
            </label>
        </div>
      </header>
    );
  }