"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Footer = () => {

    //ページ遷移
    const router = useRouter();

    const toHomePage = () => {
        router.push('/');
    };


    return (
        <footer className="w-full h-20 bg-sumi-900  col-span-4">
            <button onClick={toHomePage} className="w-full bg-forest-500 hover:bg-forest-600 text-white font-bold  py-2 mt-6 mb-3 rounded focus:outline-none focus:shadow-outline col-span-3">Back</button>
        </footer>
    );
}

export default Footer;
