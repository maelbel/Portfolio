import Title from '@/components/title';

export default function Page() {
  
    return (
        <main className="relative">
            <section id="notices">
                <div className="relative">
                    <div className="container flex flex-col px-5 py-28 mx-auto max-w-screen-lg">
                        <Title title='Mentions légales'/>
                        <span className='text-semibold text-gray-800 dark:text-gray-200'>Dernières modifications: 20 septembre 2024</span>
                        <p className='mt-10'>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique, il est précisé aux utilisateurs du site Mael Belliard | Portfolio l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
                        <div className='pt-20' id="edition">
                            <a href='#edition' className='text-xl font-semibold'>Édition du site</a>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'><b>Nom du site:</b> Mael Belliard | Portfolio</li>
                                <li className='mb-2'><b>URL du site:</b> maelbelliard.dev</li>
                                <li className='mb-2'><b>Propriétaire:</b> Mael Belliard</li>
                                <li className='mb-2'><b>Adresse:</b> 69100 Villeurbanne, France</li>
                                <li className='mb-2'><b>Email:</b> mael.belliard@laposte.net</li>
                                <li className='mb-2'><b>Téléphone:</b> 06 02 73 67 87</li>
                            </ul>
                        </div>
                        <div className='pt-20' id="hebergeur">
                            <a href='#hebergeur' className='text-xl font-semibold'>Hébergeur</a>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'>Nom de l&apos;hébergeur: Vercel Inc.</li>
                                <li className='mb-2'>URL de l&apos;hébergeur: vercel.com</li>
                                <li className='mb-2'>Adresse: 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                                <li className='mb-2'>Téléphone: (559) 288-7060</li>
                            </ul>
                        </div>
                        <div className='pt-20' id="propriete-intellectuelle-contrefacons">
                            <a href='#propriete-intellectuelle-contrefacons' className='text-xl font-semibold'>Propriété intellectuelle et contrefaçons</a>
                            <p className='py-5'>
                                Le contenu du site Mael Belliard | Portfolio (y compris les textes, images, graphiques, logo, icônes, etc.) est la propriété exclusive de Mael Belliard ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Mael Belliard.
                            </p>
                        </div>
                        <div className='pt-20' id="limitation-responsabilite">
                            <a href='#limitation-responsabilite' className='text-xl font-semibold'>Limitation de responsabilité</a>
                            <p className='py-5'>
                                L&apos;éditeur ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site Mael Belliard | Portfolio, résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications techniques requises, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
                                L&apos;éditeur ne pourra également être tenu responsable des dommages indirects (tels qu&apos;une perte de marché ou perte d&apos;une chance) consécutifs à l&apos;utilisation du site.
                            </p>
                        </div>
                        <div className='pt-20' id="gestion-donnees-personnelles">
                            <a href='#gestion-donnees-personnelles' className='text-xl font-semibold'>Gestion des données personnelles</a>
                            <p className='py-5'>
                                Les informations collectées sur le site Mael Belliard | Portfolio sont traitées dans le respect de la confidentialité. Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
                                Pour exercer ces droits, vous pouvez nous contacter à mael.belliard@laposte.net.
                            </p>
                        </div>
                        <div className='pt-20' id="liens-hypertextes-cookies">
                            <a href='#liens-hypertextes-cookies' className='text-xl font-semibold'>Liens hypertextes et cookies</a>
                            <p className='py-5'>
                                Le site Mael Belliard | Portfolio contient des liens hypertextes vers d&apos;autres sites. L&apos;éditeur ne saurait être tenu pour responsable des contenus de ces sites externes.
                                La navigation sur le site Mael Belliard | Portfolio est susceptible de provoquer l&apos;installation de cookie(s) sur l&apos;ordinateur de l&apos;utilisateur. Un cookie est un fichier de petite taille qui ne permet pas l&apos;identification de l&apos;utilisateur, mais qui enregistre des informations relatives à la navigation d&apos;un ordinateur sur un site.
                            </p>
                        </div>
                        <div className='pt-20' id="droit-applicable-attribution-juridiction">
                            <a href='#droit-applicable-attribution-juridiction' className='text-xl font-semibold'>Droit applicable et attribution de juridiction</a>
                            <p className='py-5'>
                                Tout litige en relation avec l&apos;utilisation du site Mael Belliard | Portfolio est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Villeurbanne.
                            </p>
                        </div>
                        <div className='pt-20' id="notices-contact">
                            <a href='#notices-contact' className='text-xl font-semibold'>Contact</a>
                            <p className='py-5'>
                                Pour toute question relative aux mentions légales, vous pouvez nous contacter à l&apos;adresse suivante : mael.belliard@laposte.net.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}