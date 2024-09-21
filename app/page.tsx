import Typing from '@/components/typing';
import Title from '@/components/title';
import Parcours from '@/components/parcours';
import Project from '@/components/project';
import Tags from '@/components/tags';
import Stack from '@/components/stack';
// import Balise from '@/app/components/balise';
// import Link from 'next/link';

import Image from 'next/image';

export default function Page() {

  return (
    <main className='relative'>
      <section id="home">
        <div className="relative h-screen flex flex-col justify-center items-center mx-auto lg:flex-row">
          <div className="flex flex-col justify-center items-center p-6 text-center rounded-sm">
            <h1 className="text-2xl font-extrabold text-center">Salut, je suis Mael Belliard</h1>
            <h1 className="text-5xl font-semibold text-blue-600" >Développeur <br className='md:hidden'/><Typing /></h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Activement à la recherche d&apos;une alternance en tant que développeur full-stack</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#projects" className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50 hover:bg-gray-900 dark:hover:bg-gray-800 transition-all duration-400">Explorer mes projets</a>
              <a rel="noopener noreferrer" href="#resume" className="px-8 py-3 text-lg font-semibold rounded bg-gray-200 text-gray-900 hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-blue-600 transition-all duration-400">Découvrir mon parcours</a>
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
          <div className='container flex justify-center px-5 pt-28 mx-auto max-w-screen-lg'>
            <div className='text-justify'>
              <Title title='À propos' />
              <p className='my-10'>Je suis <b>développeur full-stack, créateur d&apos;applications, passionné de technologies, étudiant en alternance</b> et <b>explorateur de solutions innovantes.</b></p>
              <p className='my-10'>J&apos;aime à la fois concevoir et optimiser des solutions numériques. Je suis motivé par des projets techniques qui nécessitent de la recherche autonome et une résolution de problèmes dynamique. Ma véritable passion réside dans la création d&apos;applications performantes, tout en accordant une attention particulière à l&apos;expérience utilisateur, à la performance et à la qualité du code.</p>
              <p className='my-10'>Au cours de mon expérience professionnel et de mes projets</p>
              <p className='my-10'>J&apos;ai développé des solutions allant de sites vitrines et plateformes e-commerce à des applications d&apos;entreprise, avec un souci constant de livrer un code propre, performant et des interfaces utilisateur agréables.</p>
              <p className='my-10'>Actuellement</p>
              <p className='my-10'>Je cherche une alternance en tant que développeur full-stack, où je me concentrerais sur la planification de solutions innovantes, la conception d&apos;application et le développement avec des technologies comme Next.js, React.js, Node.js, PostgreSQL et MongoDB.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="resume">
        <div className='relative'>
          <div className='container flex flex-col px-5 pt-28 mx-auto max-w-screen-lg'>
            <Title title='Mon parcours' />
            <div className=''>
              <Parcours title="Master Lead Developer: Data & IA" lieu="En distanciel" date="Octobre 2024 - Juin 2026">
                <Tags titles={['REACTJS', 'REACT NATIVE', 'PYTHON', 'DJANGO', 'POSTGRESQL']}/>
              </Parcours>
              <Parcours title="MBA Développeur FullStack" lieu="Lyon" date="Septembre 2023 - Janvier 2024">
                <Tags titles={['REACTJS', 'GRAPHQL', 'LARAVEL', 'DOCKER', 'POSTGRESQL']}/>
              </Parcours>
              <Parcours title="Art&Styles" lieu="Biguglia, Corse" date="Septembre 2022 - Juin 2023">
                <Tags titles={['PRESTASHOP', 'PHP', 'SMARTY', 'ODOO', 'PYTHON', 'XML']}/>
              </Parcours>
              <Parcours title="Licence Science Pour l'Ingénieur: parcours Informatique" lieu="Université de Corse, Corte" date="2021 - 2022">
                <Tags titles={['JAVA', 'PHP', 'PYTHON', 'MYSQL', 'C', 'ANDROID STUDIO']}/>
              </Parcours>
              <Parcours title="DUT Métiers du Multimédia et de l'Internet" lieu="Université de Corse, Corte" date="2019 - 2021">
                <Tags titles={['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'PHP']}/>
              </Parcours>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className='container flex flex-col px-5 pt-28 mx-auto max-w-screen-lg'>
          <div className='flex justify-between items-end'>
            <Title title='Mes récents projets' />
            {/* <a href="/projects" className='mb-2 me-4'>Explorer</a> */}
          </div>
          <div className='p-2 mb-4'>
            <Project title="Portfolio" description="Développement de mon portfolio" date="SEPTEMBRE 2024" link="https://belliard-portfolio.vercel.app/">
              <Stack size="25" icons={["typescript", "next", "tailwind"]} />
            </Project>
            <Project title="Edusign" description="Site de gestion numérique des présences avec signatures" date="AOUT 2024 - SEPTEMBRE 2024" link="https://github.com/maelbel/Edusign">
              <Stack size="25" icons={["php", "bootstrap", "jquery", "mysql"]} />
            </Project>
            <Project title="COSMOS" description="Site multilingue sur l'espace" date="AVRIL 2021" link="https://github.com/maelbel/WebSite-COSMOS">
              <Stack size="25" icons={["nodejs", "express", "mongodb"]} />
            </Project>
            <Project title="Le mystère de Corte" description="Jeu Intéractif Full Motion Vidéo" date="2019 - 2024" link="https://github.com/maelbel/le-mystere-de-corte">
              <Stack size="25" icons={["electron"]} />
            </Project>
          </div>
        </div>
      </section>
    </main>
  );
}
