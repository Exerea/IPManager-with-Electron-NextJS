import React, { useEffect, useState } from 'react';
import { animate, motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { animationState, messageState1, messageState2 } from '../state/AnimationState';
const Message = () => {

  const [isAnimating, setIsAnimating] = useRecoilState(animationState);


  //アニメーションの状態
  const variants = {

    //初期状態
    initial: {
      opacity: 0,
      y: 40,
    },

    //アニメーション
    animate: {
      opacity: [0, 1, 1, 0],//出現から消滅
      y: [40, 0, 0, -40],//下から上へ
      transition: {
        opacity: { times: [0, 0.4, 0.9, 1], duration: 1.6 },
        y: { times: [0, 0.2, 0.7, 1], duration: 1.6 },
        duration: 1
      }

    },
  };


  const message1 = useRecoilValue(messageState1);
  const message2 = useRecoilValue(messageState2);


  return (

    <motion.div
      className="w-full h-full bg-sumi-900 text-center text-white absolute top-0 left-0 pointer-events-none"
      initial="initial"　//初期状態
      animate={isAnimating ? "animate" : "initial"} //表示イベント順
      variants={variants}//お約束
      onAnimationComplete={() => setIsAnimating(false)}
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-8xl mb-8">{message1}</p>
          <p className="text-4xl">{message2}</p>
        </div>
      </div>

    </motion.div >
  );
};

export default Message;
