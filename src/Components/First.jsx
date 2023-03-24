import React from "react";
import "./css/lightbox.css";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  coverflowEffect,
  Autoplay,
  Keyboard,
  EffectCoverflow,
  EffectFlip
} from "swiper";
import "swiper/swiper.min.css";
// import 'swiper/modules/pagination/pagination.min.css'

import { Link, NavLink, Outlet } from "react-router-dom";

import lightbox_plus from "./css/lightbox-plus-jquery.js";
// import "https://use.fontawesome.com/releases/v5.7.2/css/all.css"
import "./css/style.css";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.jpg";
import pic7 from "./images/pic7.jpg";
import pic8 from "./images/pic8.jpg";
import pic9 from "./images/pic9.jpg";
import contact from "./images/contact.png";
import facebook from "./images/facebook.png";
import email from "./images/email.png";
SwiperCore.use([Autoplay,Keyboard,EffectCoverflow,Pagination,Navigation,EffectFlip]);

// SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];

const First = () => {
  return (
    <>
      <section className="h1">
        <nav className="nav">
          <p>
            <a href="#work"> Projects</a>
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
          <p>
            <a href="#location">Location</a>
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
          <p>
            <a href="#Contact">Contact</a>
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </nav>
        <div className="start">
          <header className="uppersvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#000000"
                fill-opacity="1"
                d="M0,64L48,101.3C96,139,192,213,288,234.7C384,256,480,224,576,186.7C672,149,768,107,864,112C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </header>
          <header className="head">
            <h1>VISHWAKARMA</h1>
            <p>Aluminium and Steel works</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#000000"
                fill-opacity="1"
                d="M0,64L48,101.3C96,139,192,213,288,234.7C384,256,480,224,576,186.7C672,149,768,107,864,112C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </header>
        </div>
      </section>
      <section className="body">
        <section className="work" id="work">
          <h1 className="heading1">Projects</h1>
          <div className="swiper mySwiper">
            <Itimages />
          </div>
          {/* <lightbox_plus /> */}
          <h1 className="heading4">
            <NavLink to="/Vishwakarma-Reactjs-/LoadMore">Load More</NavLink>
          </h1>
        </section>
        <section className="Loc">
          <div className="location" id="location">
            <div className="heading2">
              <h1>Location</h1>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.507293813609!2d76.64918411744384!3d31.37257290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39053967217c7ac9%3A0x61dae9ee071bd0e3!2sVishwakarma%20aluminium%20and%20steel%20work!5e0!3m2!1sen!2sin!4v1654926094135!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        <div className="heading2" style={{ "background-color": "black" }}>
          <h1>Contact</h1>
        </div>
        <section className="Contact" id="Contact">
          <p className="ptext">
            {" "}
            <a
              data="Email id:"
              href="mailto:sumitsambial@gmail.com"
              style={{ "text-decoration": "none" }}
            >
              <img src={email} alt="Email" className="img1" />
            </a>{" "}
          </p>
          <p className="ptext">
            {" "}
            <a
              data="Facebook:"
              href="https://www.facebook.com/sumit.sambial"
              style={{ "text-decoration": "none" }}
              target="_blank"
            >
              <img src={facebook} className="img1" />
            </a>{" "}
          </p>
          <p className="ptext">
            <a href="tele:+919817715000" style={{ "text-decoration": "none" }}>
              <img src={contact} className="img1" />{" "}
            </a>
            : +91 9817715000{" "}
          </p>
        </section>
      </section>
    </>
  );
};
var Itimages = () => {
  return (
    <Swiper                       // for making the swip effect for the slides or images.
      keyboard={{enabled: true}}
      effect={"flip"}
      flipEffect={{
        limitRotation: true, // sets limit on edge slide rotation
        slideShadows: false, // disables shadows on the swiper container
      }}
      pagination={{ clickable: true, dynamicBullets: true }}  // for bullets at the bottom of slides to change the slides
      navigation                // for next or previous slides arrows.
      grabCursor={true}
      // slidesPerView={"auto"}           //it was not helping for symmetric transition so used it with breakpoints
      // initialSlide={0}           // for starting the slide with 0 but even default starts with 0 so....
      centeredSlides={true}         // for getting the slides at center.
      // spaceBetween={100}         // if slidesPreView is more than 1 then it gives space
      // loop={true}                // for loop of slides.
      autoplay={{                   // for autoplay of slides.
        delay: 2500,                // changes in every 2.5 seconds
        disableOnInteraction: false // it will not disable even if we click on the slides
      }}
      params={{                     // for additional parameters.
        zoom: {   
          enabled: true,
        },
      }}
      // onSlideChange={() => console.log("slide change")} 
      // onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{    // for different size of device i.e. phones tabs etc.
        0:
        {
          slidesPerView:'auto'    // auto number of slides as per best req.
        },
      }}
    >
      {images.map((image) => (        // traversing the array images and putting in the page
        <SwiperSlide  zoom className="">
          <a href={image} data-lightbox="work" data-title="sample work">  {/* for making clickable for lightbox effect that openeing the image*/}
            <img src={image} alt="product" className="rounded-lg" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export { First };
