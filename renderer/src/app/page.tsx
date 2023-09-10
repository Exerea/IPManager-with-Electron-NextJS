"use client"
import Footer from './components/Homepage/footer';
import Header from './components/Header';
import ImageMap from './components/Homepage/imagemap';
import Activation from './components/Activation';
import { RecoilRoot } from 'recoil';
import { StrictMode } from 'react';


const Page = () => {


  return (
    <StrictMode>
      <RecoilRoot>

        <div className="flex flex-col h-screen bg-sumi-500 overflow-hidden">
          <Header></Header>

          <div className="flex-grow flex flex-col relative ">
            <Activation></Activation>
            <ImageMap></ImageMap>
          </div>
          <Footer></Footer>

        </div>
      </RecoilRoot>

    </StrictMode>
  );
};

export default Page;
