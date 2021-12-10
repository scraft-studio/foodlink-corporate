import { Typography, Button, Container, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const BannerSlider = () => {
  const settings = {
    dots: true,
    // arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="BannerSlider">
      <div className="home_vertical">
        <Typography>Home</Typography>
      </div>
      <Slider {...settings}>
        <Box
          sx={{
            width: "100%",
            maxHeight: "574px",
            height: "574px",
            textAlign: "center",
            color: "#fff",
            backgroundImage: `url("https://i.ibb.co/tXh2DrX/Group-4.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Container
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ width: "70%", marginBottom: "30px" }}
            >
              We deliver premium food services to your team so you can focus on
              your core business activities
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderColor: "#fff", color: "#fff" }}
            >
              READ MORE
            </Button>
          </Container>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxHeight: "574px",
            height: "574px",
            textAlign: "center",
            color: "#fff",
            backgroundImage: `url("https://i.ibb.co/tXh2DrX/Group-4.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Container
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ width: "70%", marginBottom: "30px" }}
            >
              We deliver premium food services to your team so you can focus on
              your core business activities
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderColor: "#fff", color: "#fff" }}
            >
              READ MORE
            </Button>
          </Container>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxHeight: "574px",
            height: "574px",
            textAlign: "center",
            color: "#fff",
            backgroundImage: `url("https://i.ibb.co/tXh2DrX/Group-4.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Container
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ width: "70%", marginBottom: "30px" }}
            >
              We deliver premium food services to your team so you can focus on
              your core business activities
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderColor: "#fff", color: "#fff" }}
            >
              READ MORE
            </Button>
          </Container>
        </Box>
      </Slider>
      <div className="social_vertical">
        <Link href="#">
          <FaEnvelope />
        </Link>
        <Link href="#">
          <IoMdCall />
        </Link>
        <Link href="#">
          <FaFacebook />
        </Link>
        <Link href="#">
          <FaInstagram />
        </Link>
        <Link href="#">
          <FaTwitter />
        </Link>
      </div>
    </div>
  );
};

export default BannerSlider;
