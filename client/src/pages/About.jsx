import React from 'react'
import aboutImg from "../../public/logos/logo-nbg.png"


function About() {
  return (
    
    <div>
        {/* about text */}
        <div className='px-4 lg:px-14 mx-w-screen-2xl mx-auto my-8 mt-20'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
                <div className='md:w-3/5 mx-auto lg:w-11/12'>
                    <h1 className='text-4xl text-neutralGrey font-semibold mb-4 md:w-4/5 lg:w-11/12 '>
                        egycanoepaddlers the watersport platform
                    </h1>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quasi, magnam deserunt quisquam quas iste dolore atque enim amet facere, inventore commodi, earum aliquid placeat eaque itaque unde totam repellendus.</p>
                    <button className='btn-primary'>Learn More</button>
                </div>
            </div>
        </div>
        {/* company status */}
        <div className='px-4 lg:px-14 mx-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div>
                <div className='md:w-1/2 mx-auto lg:w-11/12'>
                    <h2 className='text-4xl text-neutralGrey font-semibold mb-4 md:w-4/5 lg:w-11/12 '>
                        egycanoepaddlers squad <br/> <span className='text-xl'>IT Administrators | Sports injury specialists | 
                        physical therapy Doctors | Broadcasters | Volunteers
                        </span>
                    </h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quasi, magnam deserunt quisquam quas iste dolore atque enim amet facere, inventore commodi, earum aliquid placeat eaque itaque unde totam repellendus.</p>
                    <button className='btn-primary'>Learn More</button>
                </div>
                {/* status */}
                <div className='md:w-1/2 mx-auto flex flex-col sm:flex-row sm:items-center justify-around gap-12 mt-5'>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src="../../public/logos/member.png" alt="" />
                            <div className='flex items-center gap-4'>
                                <h4 className='text-2xl text-brandPrimary font-semibold'>2,456</h4>
                                <p className='text-neutralGrey'>Members</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="../../public/logos/clubs.png" alt="" />
                            <div className='flex items-center gap-4'>
                                <h4 className='text-2xl text-brandPrimary font-semibold'>27</h4>
                                <p className='text-neutralGrey'>Clubs</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="../../public/logos/tab.png" alt="" />
                            <div className='flex items-center gap-4'>
                                <h4 className='text-2xl text-brandPrimary font-semibold'>1,213,554</h4>
                                <p className='text-neutralGrey'>Taps</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="../../public/logos/payments.png" alt="" />
                            <div className='flex items-center gap-4'>
                                <h4 className='text-2xl text-brandPrimary font-semibold'>1,213</h4>
                                <p className='text-neutralGrey'>Mails</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About