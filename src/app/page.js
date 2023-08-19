import Image from 'next/image'

import logo from '../../public/images/millys-logo.png'
import noodleImage from '../../public/images/noodles.png'
import bgSmoke from '../../public/images/bg-smoke.png'
import building from '../../public/images/building.png'
import ring from '../../public/images/bg-ring.png'
import ringTwo from '../../public/images/bg-ring-2.png'
import bao from '../../public/images/bao.png'

export default function Home() {
  return (
    <main className="relative">
      <nav className="grid grid-cols-2 gap-5 md:grid-cols-6 py-5 border-b-4 border-black border-double px-20">
        <div className='col-span-1 md:col-span-2 text-left font-heading'>Based in Gqeberha, EC</div>
        <div className='col-span-1 md:col-span-2 text-center font-heading'>Authentic Chinese</div>
        <div className='col-span-2 md:col-span-2 text-right font-heading'>Contact</div>
      </nav>

      <div className='absolute top-0 right-0 z-0'>
        <Image
          src={bgSmoke}
          alt="Smoke Background"
        />
      </div>

      <section className='p-20'>
        <div className='grid grid-cols-6'>
          <div className='col-span-2'>
            <Image
                src={noodleImage}
                alt="Noodle Illustration"
              />
          </div>
          <div className='col-span-4 z-10'>
            <Image
              src={logo}
              alt="Milly'g Logo"
            />
          </div>
          <span className='col-span-2'></span>
          <div className='col-span-2'>
            <p className='font-heading text-center px-16'>
              Just a grandma from qhebeqha doing what she loves - making people happy through their tummys.
            </p>
          </div>
          <span className='col-span-2'></span>
        </div>
      </section>

     {/* how it works */}

      <section className='p-20'>
        <div className='relative grid grid-cols-6 gap-20 px-10'>
          <div className='col-span-3 font-heading text-8xl text-red'>
            <h2>How it works</h2>
            <Image
                src={ring}
                alt="Background decoration"
                className='absolute -top-40 -left-20'
            />
          </div>
          <div className='col-span-1'></div>
          <div className='col-span-2'>
            <Image
                src={building}
                alt="Building Illustration"
                className='absolute -top-52'
            />
          </div>

          {/* step one */}
          
          <div className='col-span-1'></div>
          <div className='col-span-2'>
            <h3 className='font-heading'>1. Choose your item</h3>
            <p className='font-body'>Select your items that you want to buy. Limited stock available so its first come first serve. All items are made fresh and should be collected when advised.</p>
          </div>
          <div className='col-span-3'></div>

          {/* step two */}

          <div className='col-span-2'></div>
          <div className='col-span-2'>
            <h3 className='font-heading'>2. Place your order</h3>
            <p className='font-body'>Fill in the form to request the items you want to purchase. Your request will be evaluated and confirmed on whatsapp if all is good to go.</p>
          </div>
          <div className='col-span-2'></div>

          {/* step three */}

          <div className='col-span-3'>
          < Image
                src={bao}
                alt="Bao Illustration"
                className='absolute'
            />
          </div>
          <div className='col-span-2'>
            <h3 className='font-heading'>3. Collect your order & Pay</h3>
            <p className='font-body'>You have to collect your order at the given address and pay cash on collection.</p>
          </div>
          <div className='col-span-1'></div>

          {/* step four */}

          <div className='col-span-4'></div>
          <div className='col-span-1'>
            <h3 className='font-heading'>4. Indulge</h3>
            <p className='font-body'>Plate up and enjoy your meal!</p>
          </div>
          <div className='col-span-1'>
            <Image
                src={ringTwo}
                alt="Background decoration"
                className='absolute top-96'
            />
          </div>
        </div>
      </section>

      {/* menu */}

      <section className='p-20'>
        <div className='grid grid-cols-6'>
          <div className='col-span-1'></div>
          <div className='col-span-4 p-8 h-96 border-4 border-black border-double'>
            <h3 className='text-5xl font-heading text-center text-red'> Milly's Menu</h3>
          </div>
          <div className='col-span-1'></div>

          
        </div>
      </section>
    </main>
  )
}
