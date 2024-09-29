import Title from "@/components/title";
import Parcours from "@/components/parcours";
import Tags from "@/components/tags";

export default function Page() {
  
    return (
        <main className="relative">
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
        </main>
    );

}