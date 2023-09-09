// state.tsx
import { atom } from 'recoil';

//アニメーション状態
export const animationState = atom({
    key: 'animationState',
    default: false
});

//表示メッセージ内容
export const messageState1 = atom({
    key: 'messageState1',
    default: "",
});
export const messageState2 = atom({
    key: 'messageState2',
    default: "",
});