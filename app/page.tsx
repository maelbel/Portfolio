import Typing from '@/components/typing';
import Title from '@/components/title';
import Parcours from '@/components/parcours';
import Project from '@/components/project';
import Techno from '@/components/techno';
import Tag from '@/components/tag';
// import Balise from '@/app/ui/balise';
// import Link from 'next/link';
import Contact from '@/components/contact';
import Image from 'next/image';

export default function Page() {

  return (
    <main className='relative'>
      {/* <div className='fixed top-5 right-5'>
        <a className="font-semibold rounded-full p-3 bg-gray-900 text-gray-50 hover:bg-blue-600" href="/CV_Alternance.pdf" download="BELLIARD_Mael_CV.pdf" >
          Télécharger mon CV
        </a>
      </div> */}
      <section id="home">
        <div className="relative h-screen flex flex-col justify-center items-center mx-auto lg:flex-row">
          <div className="flex flex-col justify-center items-center p-6 text-center rounded-sm">
            <h1 className="text-2xl font-extrabold text-center">Salut, je suis Mael Belliard</h1>
            <h1 className="text-5xl font-semibold text-blue-600" >Développeur <Typing /></h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Activement à la recherche d&apos;une alternance en tant que développeur full-stack</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#projects" className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50 hover:bg-gray-900 dark:hover:bg-gray-50 dark:hover:text-blue-600 transition-all duration-400">Explorer mes projets</a>
              <a rel="noopener noreferrer" href="#resume" className="px-8 py-3 text-lg font-semibold rounded bg-gray-900 text-gray-50 hover:bg-blue-600 dark:bg-gray-50 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-gray-50 transition-all duration-400">Découvrir mon parcours</a>
              <a rel="noopener noreferrer" href="#about" className="px-8 py-3 text-lg font-semibold border rounded border-gray-900 text-gray-900 hover:border-blue-600 hover:text-blue-600 dark:text-gray-50 dark:border-gray-50 dark:hover:border-blue-600 dark:hover:text-blue-600 transition-all duration-400">En savoir plus</a>
            </div>
          </div>
          <div className='absolute bottom-0 -z-10'>
            <Image src="/bg-light.svg" alt="background light home" width={1920} height={1080} className='block dark:hidden'/>
            <Image src="/bg-dark.svg" alt="background dark home" width={1920} height={1080}  className='hidden dark:block'/>
          </div>
        </div>
      </section>
      <section id="about">
        <div className='relative'>
          <div className='container flex justify-center px-5 pt-28 pb-52 mx-auto max-w-screen-lg'>
            <div className='w-2/3 text-justify'>
              <Title title='À propos' />
              <p className='my-10'>Je suis développeur full-stack, créateur d&apos;applications, passionné de technologies, étudiant en alternance et explorateur de solutions innovantes.</p>
              <p className='my-10'>J&apos;aime à la fois concevoir et optimiser des solutions numériques. Je suis motivé par des projets techniques qui nécessitent de la recherche autonome et une résolution de problèmes dynamique. Ma véritable passion réside dans la création d&apos;applications performantes, tout en accordant une attention particulière à l&apos;expérience utilisateur, à la performance et à la qualité du code.</p>
              <p className='my-10'>Au cours de ma formation et de mes projets</p>
              <p className='my-10'>J&apos;ai développé des solutions allant de sites vitrines et plateformes e-commerce à des applications d&apos;entreprise complexes, avec un souci constant de livrer un code propre, performant et des interfaces utilisateur agréables.</p>
              <p className='my-10'>Actuellement</p>
              <p className='my-10'>Je cherche une alternance en tant que développeur full-stack, où je me concentrerais sur la planification de solutions innovantes, la conception d&apos;application et le développement avec des technologies comme Next.js, React.js, Node.js, PostgreSQL et MongoDB.</p>
            </div>
            <div className='w-1/3'></div>
            <div className='absolute right-20 bottom-40 -z-20'>
              <Image src="/photo.png" alt="photo-mael" width={725} height={725}/>
            </div>
          </div>
          <div className='absolute bottom-0 -z-10'>
            <Image src="/outline.svg" alt="ligne-bleu" width={1920} height={1080} className='scale-x-[-1]'/>
          </div>
        </div>
      </section>
      <section id="resume">
        <div className='relative'>
          <div className='container flex flex-col px-5 py-28 mx-auto max-w-screen-lg'>
            <Title title='Mon parcours' />
            <div className=''>
              <Parcours title="Master Lead Developer: Data & IA" lieu="En distanciel" date="Octobre 2024 - Juin 2026">
                <Tag title='REACTJS'/><Tag title='REACT NATIVE'/><Tag title='PYTHON'/><Tag title='DJANGO'/><Tag title='POSTGRESQL'/>
              </Parcours>
              <Parcours title="MBA Développeur FullStack" lieu="Lyon" date="Septembre 2023 - Janvier 2024">
                <Tag title='REACTJS'/><Tag title='GRAPHQL'/><Tag title='LARAVEL'/><Tag title='DOCKER'/>
              </Parcours>
              <Parcours title="Art&Styles" lieu="Biguglia, Corse" date="Septembre 2022 - Juin 2023">
              <Tag title='PRESTASHOP'/><Tag title='PHP'/><Tag title='SMARTY'/><Tag title='ODOO'/><Tag title='PYTHON'/><Tag title='XML'/>
              </Parcours>
              <Parcours title="Licence Science Pour l'Ingénieur: parcours Informatique" lieu="Université de Corse, Corte" date="2021 - 2022">
                <Tag title='JAVA'/><Tag title='PHP'/><Tag title='MYSQL'/><Tag title='PYTHON'/><Tag title='C'/>
              </Parcours>
              <Parcours title="DUT Métiers du Multimédia et de l'Internet" lieu="Université de Corse, Corte" date="2019 - 2021">
                <Tag title='HTML'/><Tag title='CSS'/><Tag title='JAVASCRIPT'/><Tag title='PYTHON'/><Tag title='PHP'/>
              </Parcours>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className='container flex flex-col px-5 py-28 mx-auto max-w-screen-lg'>
          <Title title='Mes projets' />
          <div className='flex justify-around items-center'>
            <Project title="Portfolio" description="Développement de mon portfolio">
              <Techno title="Typescript" source="typescript" />
              <Techno title="NextJS" source="nextjs" />
              <Techno title="Tailwind CSS" source="tailwind" />
            </Project>
            <Project title="Edusign" description="Site de gestion numérique des présences avec signatures">
              <Techno title="PHP" source="php" />
              <Techno title="Bootstrap" source="bootstrap" />
              <Techno title="jQuery" source="jquery" />
              <Techno title="MySQL" source="mysql" />
            </Project>
            <Project title="COSMOS" description="Site multilingue sur l'espace">
              <Techno title="NodeJS" source="nodejs" />
              <Techno title="MongoDB" source="mongodb" />
            </Project>
            <Project title="Le mystère de Corte" description="Jeu Intéractif Full Motion Vidéo">
              <Techno title="Electron" source="electron" /> 
            </Project>
          </div>
          {/* <Link href="/projects" className="text-md font-semibold my-3 text-center">Voir tous mes projets <ArrowLongRightIcon width={10} className='inline' /></Link> */}
        </div>
      </section>
      <section id="testimonial">
        <div className='container flex flex-col px-5 py-28 mx-auto max-w-screen-lg'>
          <Title  title="Ils m'ont recommandé" />
        </div>
      </section>
      <section id="contact">
        <div className='container flex flex-col px-5 py-28 mx-auto max-w-screen-lg'>
          <Title title='Contactez-moi' />
          <div className="px-6 lg:px-8">
            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
