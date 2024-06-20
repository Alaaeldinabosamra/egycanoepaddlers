import React, { useState } from "react";
import "./cardSlider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import images
// @ts-ignore


const myAthletes = [
  {athleteName: "Karem Emad", category: "general", imgPath: "../../../public/athletes/karem.jpg", joinIn: "2006", retireIn: "2022", permitNumber: "62", gender: "male"},
  {athleteName: "Momen Mahran", category: "general", imgPath: "../../../public/athletes/momen.jpg", joinIn: "2008", retireIn: "2023", permitNumber: "85", gender: "male"},
  {athleteName: "Ali Hassan", category: "general", imgPath: "../../../public/athletes/ali.jpg", joinIn: "2008", retireIn: "Practice", permitNumber: "112", gender: "male"},
  {athleteName: "Amr Abozaid", category: "general", imgPath: "../../../public/athletes/amr.jpg", joinIn: "2015", retireIn: "2020", permitNumber: "412", gender: "male"},
  {athleteName: "Alaaeldin Abousamra", category: "general", imgPath: "../../../public/athletes/alaa.jpg", joinIn: "2015", retireIn: "2024", permitNumber: "445", gender: "male"},
  {athleteName: "Ahmed Bedwehy", category: "U23", imgPath: "../../../public/athletes/Ahmed.jpg", joinIn: "2017", retireIn: "Practice", permitNumber: "618", gender: "male"},
  {athleteName: "Ahmed Khaled", category: "U23", imgPath: "../../../public/athletes/ahmedKhaled.jpg", joinIn: "2017", retireIn: "Practice", permitNumber: "642", gender: "male"},
  {athleteName: "Unknown", category: "U23", imgPath: "", joinIn: "2017", retireIn: "Practice", permitNumber: "642", gender: "male"},
]

const Main = () => {

  const [currentActive, setcurrentActive] = useState("general")
  const [currentCategory, setcurrentCategory] = useState(myAthletes)
  return (
    <main className="">
        <h1 className="mainTitle">Athletes</h1>

        <div className='px-4 lg:px-14 mx-w-screen-2xl mx-auto my-8 mt-20'>
          <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 border'>
            <div>
              <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper" id="kayakAthletes">
                {currentCategory.map((item) => {
                  return(
                    <SwiperSlide key={item.permitNumber}>
                      <article className="card">
                        <img src={item.imgPath} alt="egycanoepaddlers" />
                        <span className="card-badge">{item.category === "general" ? "GNR" : item.category }</span>
                        <div className="box">
                          <h1 className="card-title">{item.athleteName}</h1>
                          <p className="card-desc">
                            <div>Category: {item.category}</div>
                            <div>Joined in: {item.joinIn}</div>
                            <div>Retire in: {item.retireIn}</div>
                            <div>Permit Number: {item.permitNumber}</div>
                          </p>
                        </div>
                      </article>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            {/* script */}
            <div className='md:w-3/5 mx-auto lg:w-11/12 lg:ml-16'>
                <h1 className='text-4xl text-neutralGrey font-semibold mb-4 md:w-4/5 lg:w-11/12 '>
                    egycanoepaddlers the watersport platform
                </h1>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quasi, magnam deserunt quisquam quas iste dolore atque enim amet facere, inventore commodi, earum aliquid placeat eaque itaque unde totam repellendus.</p>
                <button className='btn-primary'>Learn More</button>
            </div>
          </div>
        </div>
    </main>
  );
};

export default Main;

