import '@/app/ui/global.css';
import SideNav from '@/app/ui/sidenav';
import { opensans } from '@/app/ui/fonts';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${opensans.className}  antialiased bg-gray-50`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-80">
            <SideNav />
          </div>
          <div className="flex-grow md:overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}