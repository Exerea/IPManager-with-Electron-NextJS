"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { animationState, messageState1 } from '../../state/AnimationState';

const Footer = () => {


    //アニメーションセット
    const [isAnimating, setIsAnimating] = useRecoilState(animationState);
    const [popMessage1, setPopMessage1] = useRecoilState(messageState1);

    const process = async (path: string) => {

        const response = await fetch(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        setIsAnimating(true);

        const message = data.message;
        setPopMessage1(message);
    };

    /**
     * Electron上Reboot
     * @param e マウスイベント
     */
    const rebootTeams = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.electronAPI.rebootTeams();
        setIsAnimating(true);
        setPopMessage1("Now Registing...");
    };

    //ページ遷移
    const router = useRouter();

    const toSettingPage = () => {
        router.push('/registration');
    };

    return (
        <footer className="w-full h-20 bg-sumi-900 grid grid-cols-12 items-center gap-4 p-4">
            <button onClick={() => process("/api/searchChangeIP")} className="bg-sea-500 hover:bg-sea-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline col-span-3">
                Search IP address
            </button>
            <button onClick={rebootTeams} className="bg-sea-500 hover:bg-sea-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline col-span-3">
                Reboot Teams
            </button>

            <button onClick={toSettingPage} className="bg-forest-500 hover:bg-forest-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline col-span-3">
                Setting
            </button>


        </footer>
    );
}

export default Footer;

