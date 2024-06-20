import React from 'react'
import spon1 from '../../public/logos/egycanoe.png'
import spon2 from '../../public/logos/federation-bg.png'
import spon3 from '../../public/logos/canoeplaent.png'
import spon4 from '../../public/logos/monsterwave.webp'

function Services() {
  const services = [
    {id: 1, title:"Membership Organisations", description:"Our membership management software provides full automation of membership renewals and payment", image:"../../public/logos/team.png"},
    {id: 2, title:"Hand with Hand together", description:"Our membership management software provides full automation of membership renewals and payment", image:"../../public/logos/together.png"},
    {id: 3, title:"Winner Ranker", description:"Our membership management software provides full automation of membership renewals and payment", image:"../../public/logos/winner.jfif"},
  ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto mt-6'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-brandPrimary font-semibold mb-2'>Our Sponsers</h2>
            <p className='text-neutralGrey'>We support the game for our love of it, not for the money. Always be a fan of the good sport.</p>
            {/* sponsers logos */}
            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
              <img src={spon1} alt="" className='w-12'/>
              <img src={spon2} alt="" className='w-12'/>
              <img src={spon3} alt="" className='w-12'/>
              <img src={spon4} alt="" className='w-12'/>
            </div>
        </div>

        {/* Services card */}
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
          <h2 className='text-4xl text-brandPrimary font-semibold mb-3'>
            Manage your entire level in a single system
          </h2>
          <p className='text-neutralGrey'>who is Next suitable for?!</p>
        </div>

        {/* cards */}
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
          {
            services.map(service => 
              <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full'>
                  <div>
                    <div className='bg-[#d32222cf] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt='' className='-ml-5' /></div>
                    <h4 className='text-2xl font-bold text-neutralGrey mb-2 px-2'>{service.title}</h4>
                    <p className='text-sm text-neutralGrey'>{service.description}</p>
                  </div>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Services