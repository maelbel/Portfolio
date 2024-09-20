import Title from '@/components/title';
import Balise from '@/components/balise';

export default function Page() {
  
    return (
        <main className="relative">
            <section id="changelog">
                <div className="relative">
                    <div className="container flex flex-col px-5 py-28 mx-auto max-w-screen-lg">
                        <Title title='Crédits'/>
                        <span className='text-semibold text-gray-800 dark:text-gray-200'>Dernière modification: 20 septembre 2024</span>
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
                                Pour concevoir et développer ce site, je me suis beaucoup inspiré du portfolio de Morgan Scholz mais également de son template Astro Sphere développé par Mark Horn. 
                            </p>
                        </div>
                        <div className='pt-20' id="icones">
                            <a href='#icones' className='text-xl font-semibold'>Icônes</a>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'>Heroicons pour toutes les icônes fonctionnelles</li>
                                <li className='mb-2'>Devicon pour les icônes des outils et technologies</li>
                            </ul>
                        </div>
                        <div className='pt-20' id="serveurs">
                            <a href='#serveurs' className='text-xl font-semibold'>Serveurs</a>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'>Vercel pour la mise en ligne de mes sites en Javascript et Typescript</li>
                                <li className='mb-2'>AlwaysData pour la mise en ligne de mes sites en PHP</li>
                                <li className='mb-2'>OVH pour la gestion de mes noms de domaine</li>
                                <li className='mb-2'>UptimeRobot pour le monitoring des status de l&apos;ensemble de mes sites et APIs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}