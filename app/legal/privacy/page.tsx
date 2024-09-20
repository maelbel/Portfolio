import Title from '@/components/title';

export default function Page() {
  
    return (
        <main className="relative">
            <section id="changelog">
                <div className="relative">
                    <div className="container flex flex-col px-5 py-28 mx-auto max-w-screen-lg">
                        <Title title='Politique de confidentilaté'/>
                        <span className='text-semibold'>Découvrez les dernières mise à jour du site.</span>
                        <div className='pt-20' id="18-09-2024">
                            <a href='#18-09-2024' className='text-xl font-semibold'>18 septembre 2024</a>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'>Modification du contenu de la page d&apos;accueil</li>
                                <li className='mb-2'>Modification de la section &apos;contact&apos;</li>
                                <li className='mb-2'>Ajout du footer</li>
                                <li className='mb-2'>Ajout de la page &apos;changelog&apos;</li>
                            </ul>
                        </div>
                        <div className='pt-20' id="17-09-2024">
                            <a href='#17-09-2024' className='text-xl font-semibold'>17 septembre 2024</a>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'>Modification de la section &apos;projets&apos;</li>
                            </ul>
                        </div>
                        <div className='pt-20' id="16-09-2024">
                            <a href='#16-09-2024' className='text-xl font-semibold'>16 septembre 2024</a>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'>Refonte du design du site</li>
                                <li className='mb-2'>Ajout du basculement entre le thème clair et sombre</li>
                                <li className='mb-2'>Ajout du status des services</li>
                            </ul>
                        </div>
                        <div className='pt-20' id="13-09-2024">
                            <a href='#13-09-2024' className='text-xl font-semibold'>13 septembre 2024</a>
                            <ul className='list-disc list-inside py-5'>
                                <li>Mise en ligne du site</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}