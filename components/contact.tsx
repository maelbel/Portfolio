'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: FC = () => {

  const { register, handleSubmit, reset } = useForm<FormData>();

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  async function onSubmit(data: FormData) {
    const { type, msg } = await sendEmail(data);
    setMessage(msg);
    setMessageType(type);

    reset();
  }

  const closeNotification = () => {
    setMessage('');
    setMessageType('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto my-12 max-w-xl">
        {message && (
        <div id="toast"
            className="flex items-center w-full p-4 mb-4 text-gray-500 bg-gray-100 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert">
            <div
                className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-lg ${
                    messageType === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}>

                {messageType === 'success' ? (
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                    </svg>
                )}
                
                <span className="sr-only">Check icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">{message}</div>
            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700" onClick={closeNotification} aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>)}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6">
                Prénom
                </label>
                <div className="mt-2.5">
                    <input
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-800"
                        required
                        {...register('firstname', { required: true })}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6">
                Nom
                </label>
                <div className="mt-2.5">
                    <input
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-800"
                        required
                        {...register('lastname', { required: true })}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6">
                Email
                </label>
                <div className="mt-2.5">
                    <input
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-800"
                        required
                        {...register('email', { required: true })}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-semibold leading-6">
                Téléphone
                </label>
                <div className="mt-2.5">
                    <input
                        type="text"
                        autoComplete="phone"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-800"
                        required
                        {...register('phone', { required: false })}
                    />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6">
                Sujet
                </label>
                <div className="mt-2.5">
                    <input
                        type="text"
                        autoComplete="subject"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-800"
                        required
                        {...register('subject', { required: true })}
                    />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6">
                Message
                </label>
                <div className="mt-2.5">
                    <textarea
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-800"
                        required
                        defaultValue={''}
                        {...register('message', { required: true })}
                    />
                </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
                <label className="relative flex h-6 items-center text-sm">
                    <input type="checkbox" className="peer appearance-none w-10 h-4" required/>
                    <span className="absolute top-1 left-0 w-8 h-4 cursor-pointer forced-colors:hidden bg-gray-200 dark:bg-gray-700 before:absolute before:content[''] before:w-3 before:h-3 before:bg-gray-50 dark:before:bg-gray-900 before:left-0.5 before:bottom-0.5 before:rounded-lg before:transition-all before:duration-400 peer-checked:bg-blue-600 peer-checked:before:translate-x-4 transition-all duration-400 rounded-lg"></span>
                    En sélectionnant ceci, vous acceptez notre&nbsp;
                    <a href="/legal/privacy" className="font-semibold text-gray-900 dark:text-gray-50 underline">politique de confidentialité</a>.
                </label>
            </div>
        </div>
        <div className="mt-10">
            <button
                type="submit"
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                Parlons&#45;en
            </button>
        </div>
    </form>
  );
};

export default Contact;