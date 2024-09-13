"use client";

import Typing from '@/app/ui/typing';
import Title from '@/app/ui/title';
import Parcours from '@/app/ui/parcours';
import Project from '@/app/ui/project';
import Techno from '@/app/ui/techno';
// import Balise from '@/app/ui/balise';
// import Link from 'next/link';
import Contact from '@/components/contact';

import {
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';

export default function Page() {

  return (
    <main>
      <div className='fixed top-5 right-5'>
        <a className="font-semibold rounded-full p-3 bg-gray-900 text-gray-50 hover:bg-blue-600" href="/CV_Alternance.pdf" download="BELLIARD_Mael_CV.pdf" >
          Télécharger mon CV
        </a>
      </div>
      <section id="home" className='bg-gray-100'>
        <div className="container h-screen flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
          <div className="flex flex-col justify-center items-center p-6 text-center rounded-sm">
            <h1 className="text-2xl font-extrabold text-center">Salut, je suis Mael Belliard</h1>
            <h1 className="text-5xl font-semibold dark:text-blue-600" >Développeur <Typing /></h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Activement à la recherche d&apos;une alternance en tant que développeur full-stack</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#projects" className="px-8 py-3 text-lg font-semibold rounded bg-gray-900 text-gray-50 hover:bg-blue-600">Mes projets</a>
              <a rel="noopener noreferrer" href="#contact" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 hover:border-blue-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className='container flex flex-col p-28 mx-auto sm:py-12 lg:py-18'>
          <Title title='À propos' />
          <div>Développeur passionné, je crée des solutions web innovantes pour simplifier la gestion numérique et améliorer l&apos;expérience utilisateur.</div>
          <div className=''>
            <div className=''></div>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div>Je m&apos;appelle Mael Belliard. J&apos;ai 23 ans et toujours pas toutes mes dents.</div>
        </div>
      </section>
      <section id="resume" className='bg-gray-100'>
        <div className='container flex flex-col p-28 mx-auto sm:py-12 lg:py-18'>
          <Title title='Mon parcours' />
          <div className='flex justify-center items-center'>
            <Parcours title="DUT Métiers du Multimédia et de l'Internet" lieu="Université de Corse, Corte" date="2019-2021"/>
            <ArrowLongRightIcon width={50} />
            <Parcours title="Licence Science Pour l'Ingénieur: parcours Informatique" lieu="Université de Corse, Corte" date="2021-2022"/>
            <ArrowLongRightIcon width={50} />
            <Parcours title="Art&Styles, masalledebain.com" lieu="Biguglia, Corse" date="Septembre 2022 - Juin 2023"/>
            <ArrowLongRightIcon width={50} />
            <Parcours title="MBA Développeur FullStack" lieu="Lyon" date="Septembre 2023 - Janvier 2024"/>
            <ArrowLongRightIcon width={50} />
            <Parcours title="Master Lead Developer: Data & IA" lieu="Distanciel" date="Octobre 2024 - Juin 2026"/>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className='container flex flex-col p-28 mx-auto sm:py-12 lg:py-18'>
          <Title title='Mes gros projets' />
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
      <section id="contact" className='bg-gray-100'>
        <div className='container flex flex-col p-28 mx-auto sm:py-12 lg:py-18'>
          <Title title='Contactez-moi' />
          <div className="px-6 lg:px-8">
            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
