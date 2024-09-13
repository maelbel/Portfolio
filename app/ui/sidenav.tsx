import SocialMediaLinks from '@/app/ui/social-media-links';
import NavLinks from '@/app/ui/nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex grow flex-row space-x-2 bg-gray-900 text-gray-50 py-5 md:flex-col md:space-x-0 md:space-y-2">
        <div className="mb-5">
            <div className="flex flex-col justify-center items-center text-center">
                <Image
                    src="/photo.png"
                    width={150}
                    height={100}
                    priority={true} 
                    className='scale-x-[-1] rounded-full border-4 border-gray-50'
                    alt="Photo de Mael Belliard"
                />
                <h1 className='text-2xl font-bold py-3'>Mael Belliard</h1>
            </div>
            <SocialMediaLinks />
        </div>
        <NavLinks />
      </div>
    </div>
  );
}
