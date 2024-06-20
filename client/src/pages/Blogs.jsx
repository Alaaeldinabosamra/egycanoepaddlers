"use client";
import { Carousel } from "flowbite-react";

import "./blogs.css";

export default function Blogs() {
  return (
      <div className="contain">
        <div className="main">
          <Carousel className="w-full mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="img-container">
                <img src="../../public/posters/post.png" className="img" alt="" />
              </div>
              <div className="overlay">
                <div className="overlay-content">
                  <h1>kayak</h1>
                  <p>this is my presentations</p>
                  <p>
                    this is my presentationssada sdsadsasdsadasd asdasdsa
                    asdasdsads asdasdsa dasdsadsads adssdasadsasa
                  </p>
                </div>
              </div>
              <div className="mobile-overlay">
                <h1>EGYPT CUP CHAMPIONSHIP</h1>
                <p>
                  asdasdsadsdasasdsadsad asdasdsadsdasasdsadsaddasdaasasda
                  aasdasdasda
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="img-container">
                <img
                  src="../../public/posters/post3.png"
                  className="img"
                  alt=""
                />
              </div>
              <div className="overlay">
                <div className="overlay-content">
                  <h1>kayak</h1>
                  <p>this is my presentations</p>
                  <p>
                    this is my presentationssada sdsadsasdsadasd asdasdsa
                    asdasdsads asdasdsa dasdsadsads adssdasadsasa
                  </p>
                </div>
              </div>
              <div className="mobile-overlay">
                <h1>EGYPT CUP CHAMPIONSHIP</h1>
                <p>
                  asdasdsadsdasasdsadsad asdasdsadsdasasdsadsaddasdaasasda
                  aasdasdasda
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-between"></div>
          </Carousel>
        </div>
      </div>
  );
}
