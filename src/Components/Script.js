import Helmet from "react-helmet";

var Script =()=>{
 return (
 <>
    <Helmet>

const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick ={ ()=>{
    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    navbar.classNameList.add("show")
    console.log(navbar.classNameList);
    menuBtn.classNameList.add("hide");
    body.classNameList.add("disabled");
}}
cancelBtn.onclick ={()=>{
    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    body.classNameList.remove("disabled");
    navbar.classNameList.remove("show");
    menuBtn.classNameList.remove("hide");
}}
window.onscroll ={()=>{
    const navbar = document.querySelector(".navbar");
    this.scrollY > 20 ? navbar.classNameList.add("sticky") : navbar.classNameList.remove("sticky");
}}
</Helmet>
</>)
}

export {Script};