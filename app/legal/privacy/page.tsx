import Title from '@/components/title';

export default function Page() {
  
    return (
        <main className="relative">
            <section id="changelog">
                <div className="relative">
                    <div className="container flex flex-col px-5 py-28 mx-auto max-w-screen-lg">
                        <Title title='Politique de confidentilaté'/>
                        <span className='text-semibold text-gray-800 dark:text-gray-200'>Dernière modification: 20 septembre 2024</span>
                        <p className='mt-10'>Cette politique de confidentialité décrit comment nous collectons, utilisons, et protégeons les informations personnelles que vous fournissez sur notre site web Mael Belliard | Portfolio (ci-après &quot;le site&quot;).</p>
                        <div className='pt-20' id="collecte-informations">
                            <a href='#collecte-informations' className='text-xl font-semibold'>Collecte des Informations</a>
                            <p className='py-5'>
                                Nous recueillons des informations lorsque vous visitez le site, remplissez un formulaire de contact ou interagissez avec certaines sections de notre site. Les types d&apos;informations que nous pouvons collecter incluent :
                            </p>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'>Nom et prénom</li>
                                <li className='mb-2'>Adresse e-mail</li>
                                <li className='mb-2'>Message ou contenu des formulaires de contact</li>
                                <li className='mb-2'>Informations techniques liées à votre utilisation du site (adresse IP, type de navigateur, pages consultées)</li>
                            </ul>
                        </div>
                        <div className='pt-20' id="utilisation-informations">
                            <a href='#utilisation-informations' className='text-xl font-semibold'>Utilisation des Informations</a>
                            <p className='py-5'>
                                Les informations que nous collectons peuvent être utilisées pour :
                            </p>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'>Répondre à vos demandes ou questions soumises via le formulaire de contact</li>
                                <li className='mb-2'>Améliorer l&apos;expérience utilisateur et optimiser la navigation sur le site</li>
                                <li className='mb-2'>Analyser l&apos;audience et les statistiques du site pour en améliorer la performance</li>
                            </ul>
                        </div>
                        <div className='pt-20' id="partage-informations">
                            <a href='#partage-informations' className='text-xl font-semibold'>Partage des Informations</a>
                            <p className='py-5'>
                                Vos informations personnelles ne seront ni vendues, ni échangées, ni transférées à des tiers sans votre consentement préalable, sauf dans les cas suivants :
                            </p>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'>Conformité avec la loi : nous pouvons divulguer vos informations si cela est requis par la loi ou pour répondre à des requêtes légales.</li>
                                <li className='mb-2'>Fournisseurs de services : nous pourrions partager vos informations avec des prestataires techniques pour l&apos;hébergement du site ou l&apos;analyse des données, qui s&apos;engagent à respecter la confidentialité de vos données.</li>
                            </ul>
                        </div>
                        <div className='pt-20' id="cookies">
                            <a href='#cookies' className='text-xl font-semibold'>Cookies</a>
                            <p className='py-5'>
                                Nous utilisons des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers stockés sur votre appareil qui nous permettent d&apos;analyser l&apos;utilisation du site et d&apos;adapter son contenu. Vous pouvez désactiver l&apos;utilisation des cookies en modifiant les paramètres de votre navigateur, cependant certaines fonctionnalités du site pourraient en être affectées.
                            </p>
                        </div>
                        <div className='pt-20' id="securite-donnees">
                            <a href='#securite-donnees' className='text-xl font-semibold'>Sécurité des Données</a>
                            <p className='py-5'>
                                Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles. Cependant, nous ne pouvons garantir la sécurité absolue des données transmises via Internet.
                            </p>
                        </div>
                        <div className='pt-20' id="droits">
                            <a href='#droits' className='text-xl font-semibold'>Vos Droits</a>
                            <p className='py-5'>
                                Conformément aux lois applicables en matière de protection des données, vous avez le droit de :
                            </p>
                            <ul className='list-disc list-inside py-5'>
                                <li className='mb-2'>Accéder à vos informations personnelles</li>
                                <li className='mb-2'>Demander la correction ou la suppression de vos données</li>
                                <li className='mb-2'>Vous opposer au traitement de vos données personnelles ou demander leur limitation</li>
                            </ul>
                            <p className='py-5'>Pour exercer ces droits, vous pouvez nous contacter à mael.belliard@laposte.net.</p>
                        </div>
                        <div className='pt-20' id="modifications-politique-confidentialite">
                            <a href='#modifications-politique-confidentialite' className='text-xl font-semibold'>Modifications de la Politique de Confidentialité</a>
                            <p className='py-5'>
                                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour. Il est recommandé de consulter régulièrement cette page pour rester informé des éventuelles mises à jour.
                            </p>
                        </div>
                        <div className='pt-20' id="privacy-contact">
                            <a href='#privacy-contact' className='text-xl font-semibold'>Contact</a>
                            <p className='py-5'>
                                Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à mael.belliard@laposte.net.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}