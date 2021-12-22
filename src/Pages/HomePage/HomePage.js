import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import BannerSlider from "../SharedComponents/BannerSlider/BannerSlider";
import Footer from "../SharedComponents/Footer/Footer";
import "./HomePage.css";
import HomeSectionOne from "./HomeSectionOne";
const HomePage = () => {
  // home slider
  const [sliderBanner, setSliderBanner] = useState([]);

  useEffect(() => {
    fetch("./Api/homebanner.json")
      .then(res => res.json())
      .then(data => {
        setSliderBanner(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);


  return (
    <Box>
      <BannerSlider page={`Home`} banner={sliderBanner}></BannerSlider>
      <HomeSectionOne/>
      <Footer></Footer>
    </Box>
  );
};

export default HomePage;
