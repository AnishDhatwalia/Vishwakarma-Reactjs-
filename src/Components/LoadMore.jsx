import React from 'react'
//import "./css/lightbox.css"
//import "swiper/swiper-bundle.css";
import "./css/style2.css"
import pic1 from "./images/3d sheets/1.jpg"
import pic2 from "./images/3d sheets/2.jpg"
import pic3 from "./images/3d sheets/3.jpg"
import pic4 from "./images/3d sheets/4.jpg"
import pic5 from "./images/3d sheets/5.jpg"
import pic6 from "./images/3d sheets/6.jpg"
import pic7 from "./images/front fitting/1.jpg"
import pic8 from "./images/front fitting/2.jpg"
import pic9 from "./images/front fitting/3.jpg"
import pic10 from "./images/front fitting/4.jpg"
import pic11 from "./images/front fitting/5.jpg"
import pic12 from "./images/front fitting/6.jpg"
import pic13 from "./images/door/1.jpg"
import pic14 from "./images/door/2.jpg"
import pic15 from "./images/door/3.jpg"
import pic16 from "./images/door/4.jpg"
import pic17 from "./images/door/5.jpg"
import pic18 from "./images/door/6.jpg"
import pic19 from "./images/Modular/1.jpg"
import pic20 from "./images/Modular/2.jpg"
import pic21 from "./images/Modular/3.jpg"
import pic22 from "./images/Modular/4.jpg"
import pic23 from "./images/Modular/5.jpg"
import pic24 from "./images/Modular/6.jpg"
import pic25 from "./images/steel railing/1.jpg"
import pic26 from "./images/steel railing/2.jpg"
import pic27 from "./images/steel railing/3.jpg"
import pic28 from "./images/steel railing/4.jpg"
import pic29 from "./images/steel railing/51.png"
import pic30 from "./images/steel railing/6.jpg"
import contact from "./images/contact.png"
import facebook from "./images/facebook.png"
import email from "./images/email.png"

import { FaBars, FaBackward} from 'react-icons/fa';
import { useEffect ,useState} from 'react';
const Sheets=[pic1,pic2,pic3,pic4,,pic5,,pic6];
const front=[pic7,pic8,pic9,pic10,pic11,pic12];
const door=[pic13,pic14,pic15,pic16,pic17,pic18];
const modular=[pic19,pic20,pic21,pic22,pic23,pic24];
const steel=[pic25,pic26,pic27,pic28,pic29,pic30];
const LoadMore = () => {
  const [navbar,setNavbar] = useState(false); {/* state for navbar so it can change immediately */}
  useEffect(() => {
    const handleScroll = event => {
      if(window.scrollY>80) 
      {
        {/* when the scroll is done more than 80 then the state is true that is add 'sticky' class to navbar */}
        setNavbar(true);
      }
      else
      {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
  <>
  <body >
  <div className="navbr" >
    <nav className={navbar?"navbar sticky":"navbar"}> {/*usestate is used so setnavbar is true then it checks and adds sticky class to nav bar */}
      <div className="content">
        <div className="logo">
          <a href="/">VISHWAKARMA</a>
        </div>
        <ul className="menu-list">
          <div className="icon cancel-btn">
          
            <FaBackward onClick={()=>{
              const body=document.querySelector("body");
              const navbar = document.querySelector(".navbar");
              const menuBtn = document.querySelector(".menu-btn");
              body.classList.remove("disabled");
              navbar.classList.remove("show");
              menuBtn.classList.remove("hide");
            }}/>
          </div>
          <li><a href="#3dsheets">3D Sheets</a></li>
          <li><a href="#FrontFitting">Front Fitting</a></li>
          <li><a href="#door">Steel Doors/Gates</a></li>
          <li><a href="#Modular">Modular Finish</a></li>
          <li><a href="#SteelRailing">Steel Railing</a></li>
        </ul>
        <div className="icon menu-btn">
          <FaBars onClick={()=>{
          const body=document.querySelector("body");
          const navbar = document.querySelector(".navbar");
          const menuBtn = document.querySelector(".menu-btn");
          navbar.classList.add("show");
          menuBtn.classList.add("hide");
          body.classList.add("disabled");
        }}/>
        </div>
      </div>
    </nav>
    <br/><br/><br/>
  </div>
  
    <section className="Logo">
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
    </section>
    <section className='body'>

    <section className="work" id="work">
        <h1 className="heading1" id="3dsheets">3D Sheets on Doors and Almirah's</h1>
        <div className="imgs">
            {Sheets.map((image)=> (
              <div className="swiper-slide1">
                <a href={image} data-lightbox="3dSheets" data-title="3D Sheets"><img src={image} /></a>
                </div>
            ))}
            </div>
          
        <h1 className="heading1" id="FrontFitting">Front Fitting</h1>
        <div className="imgs">
        {front.map((image)=> (
          <div className="swiper-slide1">
            <a href={image} data-lightbox="FrontFitting" data-title="Front Fitting"><img src={image} /></a>
          </div>
        ))}
        </div>
        <h1 className="heading1" id="door">Steel Gates</h1>
        <div className="imgs">
        {door.map((image)=> (
          <div className="swiper-slide1">
            <a href={image} data-lightbox="doors" data-title="Doors and Gates"><img src={image} /></a>
          </div>
        ))}
        </div>
        <h1 className="heading1" id="Modular">Modular Kitchen</h1>
        <div className="imgs">
        {modular.map((image)=> (
          <div className="swiper-slide1">
            <a href={image} data-lightbox="Modular" data-title="Modular"><img src={image} /></a>
          </div>
        ))}
        </div>
        <h1 className="heading1" id="SteelRailing">Steel Railing</h1>
        <div className="imgs">
        {steel.map((image)=> (
          <div className="swiper-slide1">
            <a href={image} data-lightbox="steel" data-title="Steel Railing"><img src={image} /></a>
          </div>
        ))}
        </div>
          <br/>
    </section>
      <h1 style={{'background-color':"black"}} className='heading1'>Contact</h1>
    <section className='Contact' id="Contact">
      <p className="ptext"> <a data="Email id:" href="mailto:sumitsambial@gmail.com" style={{"text-decoration":'none'}} ><img src={email} alt="Email" className="img1"/></a> </p> 
      <p className="ptext"> <a data="Facebook:" href="https://www.facebook.com/sumit.sambial" style={{"text-decoration":"none"}} target="_blank"><img src={facebook} className="img1"/></a> </p>
      <p className="ptext" ><a href='tele:+919817715000' style={{"text-decoration":"none"}}><img src={contact} className="img1"/> </a>: +91 9817715000 </p>
    </section>
            </section>
    </body>
    </>
)}

export {LoadMore};