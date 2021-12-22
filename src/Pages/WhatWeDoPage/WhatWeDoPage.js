import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BannerSlider from '../SharedComponents/BannerSlider/BannerSlider';
import Footer from '../SharedComponents/Footer/Footer';

const WhatWeDoPage = () => {
  // banner slider
  const [sliderBanner, setSliderBanner] = useState([]);

  useEffect(() => {
    fetch("./Api/whatWeDobanner.json")
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
          <BannerSlider page={`What We Do`} banner={sliderBanner}></BannerSlider>
          <Footer></Footer>
        </Box>
    );
};

export default WhatWeDoPage;