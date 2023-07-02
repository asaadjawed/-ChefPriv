import React from "react";
import { Header } from "../component/Header/Header";
import { NavBar } from "../component/navbar/Navbar";
import { DownloadImage } from "../component/Banner/Mobile_Download";
import { Categories } from "../component/Categories/Categories";
import MultipleItems from "../component/slick/Slick_slider";
import Testimonal from "../component/Testimonal/Testimonal";
import { Footer } from "../component/Footer/Footer";
export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <DownloadImage />
      <MultipleItems />
      <Categories />
      <Testimonal />
      <Footer />
    </>
  );
};
