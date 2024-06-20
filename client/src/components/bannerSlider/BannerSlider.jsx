"use client";
import { Carousel } from "flowbite-react";

import "./bannerSlider.css";
import { useState } from "react";

const banners = [
  {
    id: 1,
    imagePath: "../../../public/posters/post.png",
    title: "EGYPT CUP CHAMPIONSHIP",
    desc: "FIRST CHAMPIONSHIP IN PORTSAID....",
  },
  {
    id: 2,
    imagePath: "../../../public/posters/post2.png",
    title: "Republic CHAMPIONSHIP",
    desc: "FIRST CHAMPIONSHIP IN GIZA....",
  },
  {
    id: 3,
    imagePath: "../../../public/posters/post3.png",
    title: "ARAB CHAMPIONCHIP",
    desc: "FIRST CHAMPIONSHIP IN LUXOR....",
  },
  {
    id: 4,
    imagePath: "../../../public/posters/post5.png",
    title: "AFRICAN CHAMIONCHIP",
    desc: "FIRST CHAMPIONSHIP IN ASWAN....",
  },
  {
    id: 5,
    imagePath: "../../../public/posters/post1.jpg",
    title: "AFRICAN CHAMIONCHIP",
    desc: "FIRST CHAMPIONSHIP IN Alexandria....",
  },
];

const BannerSlider = () => {

  const [currentSlide, setCurrentSlide] = useState("asdas")
  
  return (
    <div className="contain">
      <div className="main">
        <Carousel className="w-full mx-auto" onChange={() =>{
          
        }}>
          {banners.map((item) => {
            return (
                <div className="flex flex-col md:flex-row-reverse items-center justify-between" key={item.id}>
                  <div className="img-container">
                    <img
                      src={item.imagePath}
                      className="img"
                      alt=""
                    />
                  </div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                  <div className="mobile-overlay">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                  </div>
                </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}


export default BannerSlider;