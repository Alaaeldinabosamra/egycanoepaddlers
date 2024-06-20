"use client";
import { Carousel } from "flowbite-react";
import banner1 from "../../public/posters/post.png"
import banner2 from "../../public/posters/post2.png"
import banner5 from "../../public/posters/post5.png"

export default function Home() {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" className="lg:scale-75 " />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralGrey md: w-3/4 leading-snug">Fights and Wins <span className="text-brandPrimary leading-snug">from 16 years</span></h1>
              <p>This is only place which support a watersports games around Egypt we hope to grow up our squad to high possible number</p>
              <button className="btn-primary">Register</button>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner2} alt="" className="lg:scale-75 " />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralGrey md: w-3/4 leading-snug">Rank in Africa and Middle east <span className="text-brandPrimary leading-snug">With us we can do any thing</span></h1>
              <p>This is only place which support a watersports games around Egypt we hope to grow up our squad to high possible number</p>
              <button className="btn-primary">Register</button>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner5} alt="" className="lg:scale-75 " />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 ">
              <h1 className="text-5xl font-semibold mb-4 text-neutralGrey md: w-3/4 leading-snug">Hit The Man of The Match <span className="text-brandPrimary leading-snug">In our Canoe Polo Matches</span></h1>
              <p>This is only place which support a watersports games around Egypt we hope to grow up our squad to high possible number</p>
              <button className="btn-primary">Register</button>
            </div>
          </div>

            

          
        </Carousel>
      </div>
    </div>
  )
}
