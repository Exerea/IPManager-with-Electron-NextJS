
import { animationState, messageState1 } from '../../../app/state/AnimationState';
import { type } from 'os';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';


const Form = () => {


    const [ip, setIP] = useState("");
    const [snm, setSNM] = useState("");
    const [dgw, setDGW] = useState("");



    useEffect(() => {
        // 非同期処理を行う関数
        const fetchData = async () => {
            try {
                const urlString = `/api/readIP`;
                const response = await fetch(urlString, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                const data = await response.json();
                setIP(data.ip);
                setSNM(data.snm);
                setDGW(data.dgw);

            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        // 非同期処理を呼び出し
        fetchData();
    }, []);




    //アニメーションセット
    const [isAnimating, setIsAnimating] = useRecoilState(animationState);
    const [popMessage1, setPopMessage1] = useRecoilState(messageState1);


    const process = async (ip: string, snm: string, dgw: string) => {

        const params = new URLSearchParams();
        params.append('IPAdress', ip);
        params.append('Subnetmask', snm);
        params.append('DefaultGateWay', dgw);

        // バックティックを使用してテンプレートリテラルを正しく展開
        const urlString = `/api/registration_ip?${params.toString()}`;
        const response = await fetch(urlString, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });



        setIsAnimating(true);

        setPopMessage1("regist");
    };

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

            <button onClick={() => process(ip, snm, dgw)} className="w-full bg-sea text-white py-2 mt-6 mb-4 rounded hover:bg-sea-800 focus:outline-none focus:shadow-outline">変更</button>

        </div>
    )

}

export default Form;
