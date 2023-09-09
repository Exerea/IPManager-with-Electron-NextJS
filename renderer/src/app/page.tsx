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

        <div className="flex flex-col h-screen bg-sumi-500">
          <Header></Header>

          <div className="relative ">
            <Activation></Activation>
            <ImageMap></ImageMap>
            <Footer></Footer>
          </div>

        </div>
      </RecoilRoot>

    </StrictMode>
  );
};

export default Page;
