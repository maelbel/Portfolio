import Typing from '@/components/typing';
import Title from '@/components/title';
import Project from '@/components/project';
import Stack from '@/components/stack';
import Balise from '@/components/balise';
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
              <a rel="noopener noreferrer" href="#projects" className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50 hover:bg-blue-500 transition-all duration-400">Explorer mes projets</a>
              <a rel="noopener noreferrer" href="#resume" className="px-8 py-3 text-lg font-semibold rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-400">Découvrir mon parcours</a>
              <a rel="noopener noreferrer" href="#about" className="px-8 py-3 text-lg font-semibold rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-400">En savoir plus</a>
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
      <section id="projects">
        <div className='container flex flex-col px-5 pt-28 mx-auto max-w-screen-lg'>
          <div className='flex justify-between items-end'>
            <Title title='Mes récents projets' />
            {/* <a href="/projects" className='mb-2 me-4'>Explorer</a> */}
          </div>
          <div className='p-2 mb-4'>
            <Project title="Portfolio" description="Développement de mon portfolio" date="SEPTEMBRE 2024" link="https://maelbelliard.dev/">
              <Stack size="25" icons={["typescript", "next", "tailwind"]} />
            </Project>
            <Project title="Edusign" description="Site de gestion numérique des présences avec signatures" date="AOUT 2024 - SEPTEMBRE 2024" link="https://edusign.maelbelliard.dev/">
              <Stack size="25" icons={["php", "bootstrap", "jquery", "mysql"]} />
            </Project>
            <Project title="COSMOS" description="Site multilingue sur l'espace" date="AVRIL 2021" link="https://cosmos.maelbelliard.dev/">
              <Stack size="25" icons={["nodejs", "express", "mongodb"]} />
            </Project>
            <Project title="Le mystère de Corte" description="Jeu Intéractif Full Motion Vidéo" date="2019 - 2024" link="https://github.com/maelbel/le-mystere-de-corte">
              <Stack size="25" icons={["electron"]} />
            </Project>
          </div>
        </div>
      </section>
      <section id="stack">
        <div className='container flex flex-col px-5 pt-28 mx-auto max-w-screen-lg'>
          <div className='flex justify-between items-end'>
            <Title title='Ma stack technique' />
          </div>
          <div className='p-2 mb-4'>
            <div className='mt-5'>
              <p className='text-md font-semibold'>Je développe avec</p>
              <div className='flex items-center gap-2 py-3'>
                <Balise title="HTML" icon="html" href="https://html.spec.whatwg.org/multipage/"/>
                <Balise title="Javascript" icon="javascript" href="https://developer.mozilla.org/fr/docs/Web/JavaScript"/>
                <Balise title="Typescript" icon="typescript" href="https://www.typescriptlang.org/"/>
                <Balise title="PHP" icon="php" href="https://www.php.net/"/>
              </div>
            </div>
            <div className='mt-5'>
              <p className='text-md font-semibold'>Je construit grâce à</p>
              <div className='flex items-center gap-2 py-3'>
                <Balise title="NodeJS" icon="nodejs" href="https://nodejs.org/"/>
                <Balise title="Next" icon="next" href="https://nextjs.org/"/>
                <Balise title="React" icon="react" href="https://fr.react.dev/"/>
              </div>
            </div>
            <div className='mt-5'>
              <p className='text-md font-semibold'>J&apos;habille avec</p>
              <div className='flex items-center gap-2 py-3'>
                <Balise title="CSS" icon="css" href="https://www.w3.org/Style/CSS/"/>
                <Balise title="Bootstrap" icon="bootstrap" href="https://getbootstrap.com/"/>
                <Balise title="TailwindCSS" icon="tailwind" href="https://tailwindcss.com/"/>
              </div>
            </div>
            <div className='mt-5'>
              <p className='text-md font-semibold'>Je stock en utilisant</p>
              <div className='flex items-center gap-2 py-3'>
                <Balise title="MySQL" icon="mysql" href="https://www.mysql.com/fr/"/>
                <Balise title="PostGreSQL" icon="postgresql" href="https://www.postgresql.org/"/>
                <Balise title="MongoDB" icon="mongodb" href="https://www.mongodb.com/"/>
              </div>
            </div>
            <div className='mt-5'>
              <p className='text-md font-semibold'>Je mets mes projets en ligne via</p>
              <div className='flex items-center gap-2 py-3'>
                <Balise title="Vercel" icon="vercel" href="https://vercel.com/"/>
                <Balise title="AlwaysData" icon="alwaysdata" href="https://www.alwaysdata.com/"/>
                <Balise title="Render" icon="render" href="https://render.com/"/>
                <Balise title="OVH" icon="ovh" href="https://www.ovhcloud.com/fr/"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
