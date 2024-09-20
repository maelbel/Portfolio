import Title from '@/components/title';
import Contact from '@/components/contact';

import {
  EnvelopeIcon,
  CalendarIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="footer">
      <section id="contact">
        <div className='container flex flex-col px-5 pt-28 mx-auto max-w-screen-lg'>
          <Title title='Contactez-moi' />
          <div className='flex justify-center'>
            <div className="px-6 lg:px-8">
              <div className='flex flex-col justify-around gap-5 mt-4 sm:mt-10'>
                <a href="mailto:mael.belliard@laposte.net" target='_blank' rel='noopener noreferrer' className='flex justify-between items-center gap-5 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-400'>
                  <div className='flex items-center gap-2'>
                    <EnvelopeIcon className='w-5' />
                    <span>Envoyer un mail</span>
                  </div>
                  <ArrowTopRightOnSquareIcon className='w-4'/>
                </a>
                <a href="https://www.linkedin.com/in/mael-belliard/" target='_blank' rel='noopener noreferrer' className='flex justify-between items-center gap-5 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-400'>
                  <div className='flex items-center gap-2'>
                    <svg width="25" height="25"><use href='/stack.svg#linkedin' className="fill-gray-900 dark:fill-gray-50"></use></svg>
                    <span>Envoyer un message</span>
                  </div>
                  <ArrowTopRightOnSquareIcon className='w-4'/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=330602736787" target='_blank' rel='noopener noreferrer' className='flex justify-between items-center gap-5 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-400'>
                  <div className='flex items-center gap-2'>
                  <ChatBubbleLeftEllipsisIcon className="w-5" />
                    <span>Envoyer un message</span>
                  </div>
                  <ArrowTopRightOnSquareIcon className='w-4'/>
                </a>
                <a href="https://calendly.com/mael-belliard/entretien-15min" target='_blank' rel='noopener noreferrer' className='flex justify-between items-center gap-5 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-400'>
                  <div className='flex items-center gap-2'>
                    <CalendarIcon className='w-5' />
                    <span>Planifier un entretien</span>
                  </div>
                  <ArrowTopRightOnSquareIcon className='w-4'/>
                </a>
                <a href="/CV_Alternance.pdf" download="BELLIARD_Mael_CV.pdf" className='flex justify-between items-center gap-5 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-400'>
                  <div className='flex items-center gap-2'>
                    <DocumentTextIcon className="w-5" />
                    <span>Télécharger mon CV</span>
                  </div>
                  <ArrowDownTrayIcon className='w-4'/>
                </a>
              </div>
            </div>
            <div className="px-6 lg:px-8 border-l border-gray-200 dark:border-gray-700">
              <Contact />
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col">
        <div className="container p-5 mx-auto max-w-screen-lg">
          <div className="flex justify-end">
            <a href="#">Revenir en haut</a>
          </div>
        </div>
        <hr className='border-gray-200 dark:border-gray-700'/>
        <div className="container p-5 mx-auto max-w-screen-lg flex justify-between items-center">
          <a href="/"><h1 className='text-xl font-bold'>Mael Belliard</h1></a>
          <a href="https://stats.uptimerobot.com/3Ao7tMWcUq" target="_blank" rel="noopener noreferrer" className='flex gap-2 justify-center sm:justify-end items-center'>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Services Opérationnels</a>
        </div>
        <hr className='border-gray-200 dark:border-gray-700'/>
        <div className="container p-5 mx-auto max-w-screen-lg flex justify-between items-center">
          <div className="">
            <div className="flex gap-2 mb-2">
              <a href="/changelog">Changelog</a>
              <span>-</span>
              <a href="#footer">Mentions légales</a>
              <span>-</span>
              <a href="#footer">Politique de confidentialité</a>
              <span>-</span>
              <a href="#footer">Conditions d&apos;utilisations</a>
              <span>-</span>
              <a href="#footer">Crédits</a>
            </div>
            <div className="text-sm">
              © 2024 ▸ Tous droits réservés
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:mael.belliard@laposte.net" className='flex justify-center items-center h-[50px] rounded-full p-3 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800 md:flex-none md:justify-start md:p-2 md:px-3 transition-all duration-400'><EnvelopeIcon width={25} height={25}/></a>
            <a href="https://github.com/maelbel" target="_blank" className='flex justify-center items-center h-[50px] rounded-full p-3 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800 md:flex-none md:justify-start md:p-2 md:px-3 transition-all duration-400'><svg width="25" height="25" viewBox="0 0 128 128" className='fill-gray-900 dark:fill-gray-50'><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></svg></a>
            <a href="https://www.linkedin.com/in/mael-belliard/" target="_blank" className='flex justify-center items-center h-[50px] rounded-full p-3 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800 md:flex-none md:justify-start md:p-2 md:px-3 transition-all duration-400'><svg width="25" height="25"><use href='/stack.svg#linkedin' className="fill-gray-900 dark:fill-gray-50"></use></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
