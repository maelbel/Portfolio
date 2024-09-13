'use client';

import { FC } from 'react';
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
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-4 max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Prénom
                </label>
                <div className="mt-2.5">
                    <input
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        {...register('firstname', { required: true })}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Nom
                </label>
                <div className="mt-2.5">
                    <input
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        {...register('lastname', { required: true })}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
                </label>
                <div className="mt-2.5">
                    <input
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        {...register('email', { required: true })}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                Téléphone
                </label>
                <div className="mt-2.5">
                    <input
                        type="text"
                        autoComplete="phone"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        {...register('phone', { required: false })}
                    />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Sujet
                </label>
                <div className="mt-2.5">
                    <input
                        type="text"
                        autoComplete="subject"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        {...register('subject', { required: true })}
                    />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
                </label>
                <div className="mt-2.5">
                    <textarea
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                        {...register('message', { required: true })}
                    />
                </div>
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