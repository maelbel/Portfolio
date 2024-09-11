import Typing from '@/app/ui/typing';
import Balise from '@/app/ui/balise';

export default function Page() {
  return (
    <main>
      <div className='fixed top-5 right-5'>
        <a className="font-semibold rounded-full p-3 bg-gray-900 text-gray-50 hover:bg-blue-600" href="/CV_Alternance.pdf" >
          Download CV
        </a>
      </div>
      <section id="home">
        <div className="container h-screen flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
          <div className="flex flex-col justify-center items-center p-6 text-center rounded-sm">
            <h1 className="text-2xl font-extrabold text-center">Salut, je suis Mael Belliard</h1>
            <h1 className="text-5xl font-semibold dark:text-blue-600" >Développeur <Typing /></h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Activement à la recherche d&apos;une alternance en tant que développeur full-stack 
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#projects" className="px-8 py-3 text-lg font-semibold rounded bg-gray-900 text-gray-50 hover:bg-blue-600">Mes projets</a>
              <a rel="noopener noreferrer" href="#contact" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 hover:border-blue-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className='h-screen'>
      <h1 className=''>About</h1>
        <div>Développeur passionné, je crée des solutions web innovantes pour simplifier la gestion numérique et améliorer l&apos;expérience utilisateur.</div>
        <Balise source="nextjs" title="Next" href="https://nextjs.org/" />
      </section>
      <section id="resume" className='h-screen'>
        
      </section>
      <section id="projects" className='h-screen'>
        
      </section>
      <section id="contact" className='h-screen'>
        
      </section>
    </main>
  );
}
