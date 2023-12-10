import Head from "next/head";
import { Box, Text, Image, Center } from "@chakra-ui/react";
import pImg from "../public/vercel.svg";
import profileImage from "../public/static/images/IMG_0069.png";
import Header from "../components/header";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import mainBg from "../public/static/images/Main_BG.jpg"
import { getBlogPosts } from '../public/notion';
export default function Home() {
  console.log("---------------------------------------------")
  console.log(getBlogPosts());
  return (
    <div>
      {/* HEADER */}
      <Header />



      <div className="w-full">
  <div className="relative w-full bg-white">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
        
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl font-sans">
          Gaurav Nagoshe
        </h1>
        <div className="mt-3 mx-2 flex max-w-max items-center space-x-2 rounded-full bg-gray-200 px-4 p-2">
        <p className="text-m font-semibold font-sans">Senior Software Engineer</p>
        </div>
      </div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9]"
          src="static/images/IMG_0069.png"
        />
      </div>
    </div>
  </div>
  
</div>



    <Footer />
   

      
    </div>
  );
}
