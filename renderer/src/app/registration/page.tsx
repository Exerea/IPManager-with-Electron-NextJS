"use client"

import { StrictMode } from 'react';
import DesignForm from '../components/SettingPage/designform';
import MyIPForm from '../components/SettingPage/myip';
import Footer from '../components/SettingPage/footer';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { RecoilRoot } from 'recoil';



const Page = () => {

    //アニメーションの状態
    const variants = {

        //初期状態
        initial: {
            opacity: 0,
            x: -40,
        },

        //アニメーション
        animate: {
            opacity: 1,//出現から消滅
            x: 0,
            transition: {
                opacity: { duration: 0.3 },
                x: { duration: 0.3 },
            }

        },


    };


    return (
        <StrictMode>
            <RecoilRoot>

                <Header></Header>

                <motion.div
                    className="flex flex-col h-screen bg-sumi-900 grid grid-cols-12 items-center gap-4 p-4"
                    initial="initial"　//初期状態
                    animate={"animate"} //表示イベント順
                    variants={variants}
                >

                    <DesignForm ></DesignForm>
                    <MyIPForm ></MyIPForm>
                    <Footer></Footer>
                </motion.div>


            </RecoilRoot>
        </StrictMode >
    );
};

export default Page;
