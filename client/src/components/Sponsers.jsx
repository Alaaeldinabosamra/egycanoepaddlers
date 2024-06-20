import spon1 from '../../public/logos/egycanoe.png'
import spon2 from '../../public/logos/federation-bg.png'
import spon3 from '../../public/logos/canoeplaent.png'
import spon4 from '../../public/logos/monsterwave.webp'


export default function Sponsers () {
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
    </div>
  )
}
