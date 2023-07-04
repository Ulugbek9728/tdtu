import React, { useEffect } from "react";
import HomeCarusel from "@/components/home/homeCarusel/HomeCarusel";
import Layout from "@/locales/en/layout/Layout";
import News from "@/components/home/news/News";
import VideoHome from "@/components/home/video/VideoHome";
import Fakultet from "@/components/home/fakultetlar/Fakultet";
import OurAlumni from "@/components/home/ourAlumni/OurAlumni";
import NumberInst from "@/components/home/numberInst/NumberInst";
import InteractiveServices from "@/components/home/interactiveServices/InteractiveServices";
import bgColl from "../CALL CENER.jpg"
import {Link} from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
        <Link to='/qabul'>
            <img src={bgColl} style={{width: '100%', height:"auto", padding:'2%'}} alt=""/>
        </Link>

      <HomeCarusel />
      <News />
      <VideoHome />
      <Fakultet />
      <OurAlumni />
      <NumberInst />
      <InteractiveServices />
    </Layout>
  );
};

export default Home;
