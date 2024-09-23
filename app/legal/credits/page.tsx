import Title from '@/components/title';
import Balise from '@/components/balise';

export default function Page() {
  
    return (
        <main className="relative">
            <section id="changelog">
                <div className="relative">
                    <div className="container flex flex-col px-5 py-28 mx-auto max-w-screen-lg">
                        <Title title='Crédits'/>
                        <span className='text-semibold text-gray-800 dark:text-gray-200'>Dernières modifications: 21 septembre 2024</span>
                        <div className='pt-20' id="stack-technique">
                            <a href='#stack-technique' className='text-xl font-semibold'>Stack Technique</a>
                            <div className='flex gap-4 mt-5'>
                                <Balise title="Typescript" href="" icon="typescript"/>
                                <Balise title="Next" href="" icon="next"/>
                                <Balise title="TailwindCSS" href="" icon="tailwind"/>
                            </div>
                        </div>
                        <div className='pt-20' id="conception">
                            <a href='#conception' className='text-xl font-semibold'>Conception</a>
                            <p className='py-5'>
                                Pour concevoir et développer mon portfolio, je me suis beaucoup inspiré du portfolio de <a href="https://mscholz.dev/" className='text-black dark:text-white font-semibold underline' target='_blank' rel='noopener noreferrer'>Morgan Scholz</a> mais également de son template <a href="https://astro-sphere-demo.vercel.app/" className='text-black dark:text-white font-semibold underline' target='_blank' rel='noopener noreferrer'>Astro Sphere</a> développé par Mark Horn. 
                            </p>
                        </div>
                        <div className='pt-20' id="icones">
                            <a href='#icones' className='text-xl font-semibold'>Icônes</a>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'><a href="https://heroicons.com/" className='text-black dark:text-white font-semibold underline' target='_blank' rel='noopener noreferrer'>Heroicons</a> pour toutes les icônes fonctionnelles</li>
                                <li className='mb-2'><a href="https://devicon.dev/" className='text-black dark:text-white font-semibold underline' target='_blank' rel='noopener noreferrer'>Devicon</a> pour les icônes des outils et technologies</li>
                            </ul>
                        </div>
                        <div className='pt-20' id="serveurs">
                            <a href='#serveurs' className='text-xl font-semibold'>Serveurs</a>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'><a href="https://vercel.com/" className='text-black dark:text-white font-semibold underline' target='_blank' rel='noopener noreferrer'>Vercel</a> pour la mise en ligne de mes sites en Javascript et Typescript</li>
                                <li className='mb-2'><a href="https://render.com/" className='text-black dark:text-white font-semibold underline' target='_blank' rel='noopener noreferrer'>Render</a> pour la mise en ligne de mes sites en NodeJS</li>
                                <li className='mb-2'><a href="https://www.alwaysdata.com/" className='text-black dark:text-white font-semibold underline' target='_blank' rel='noopener noreferrer'>AlwaysData</a> pour la mise en ligne de mes sites en PHP</li>
                                <li className='mb-2'><a href="https://www.ovhcloud.com/" className='text-black dark:text-white font-semibold underline' target='_blank' rel='noopener noreferrer'>OVH</a> pour la gestion de mes noms de domaine</li>
                                <li className='mb-2'><a href="https://uptimerobot.com/" className='text-black dark:text-white font-semibold underline' target='_blank' rel='noopener noreferrer'>UptimeRobot</a> pour le monitoring des status de l&apos;ensemble de mes sites et APIs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}