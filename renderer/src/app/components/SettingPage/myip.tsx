'use client';
import { animationState, messageState1 } from '../../../app/state/AnimationState';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';


const Form = () => {

    const [ip, setIP] = useState("");
    const [snm, setSNM] = useState("");
    const [dgw, setDGW] = useState("");

    /**
     * Electron上でfs.writeで登録
     */
    const readingParams = async () => {
        // e.preventDefault();
        // const settingValues = await window.electronAPI.readParams();
        setIP("");//settingValues.ipAdress);
        setSNM("");//settingValues.subnetMask");
        setDGW("");//settingValues.defaultGateWay");
    };

    useEffect(() => {
        console.log("useeffect");
        // useEffect内での非同期処理のパターン
        const fetchData = async () => {
            await readingParams();
        };

        fetchData();
    }, []);


    //アニメーションセット
    const [isAnimating, setIsAnimating] = useRecoilState(animationState);
    const [popMessage1, setPopMessage1] = useRecoilState(messageState1);

    //値の変更を検知してフォームに保持する
    const changeIP = (e: any) => {
        setIP(() => e.target.value)
    }
    const changeSNM = (e: any) => {
        setSNM(() => e.target.value)
    }
    const changeDGW = (e: any) => {
        setDGW(() => e.target.value)
    }

    /**
     * Electron上でfs.writeで登録
     * @param e マウスイベント
     */
    const registration = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.electronAPI.sendExample(ip, snm, dgw);
        setIsAnimating(true);
        setPopMessage1("Now Registing...");
    };

    return (
        <div className={`text-white font-bold py-6 px-9 bg-gray-800 rounded-lg col-span-6`}>

            <h1 className="text-2xl font-bold ">執務室の登録</h1>

            <div className="py-3">
                <label >IPアドレス</label>
                <input type="text" value={ip} onChange={changeIP} className="w-full border border-sea rounded py-1 px-4 text-sumi-800" />
            </div>

            <div className="py-3">
                <label >サブネットマスク</label>
                <input type="text" value={snm} onChange={changeSNM} className="w-full border border-sea rounded py-1 px-4 text-sumi-800" />
            </div>

            <div className="py-3">
                <label >デフォルトゲートウェイ</label>
                <input type="text" value={dgw} onChange={changeDGW} className="w-full border border-sea rounded py-1 px-4 text-sumi-800" />
            </div>

            <button onClick={registration} className="w-full bg-sea text-white py-2 mt-6 mb-4 rounded hover:bg-sea-800 focus:outline-none focus:shadow-outline">変更</button>

        </div>
    )

}

export default Form;
