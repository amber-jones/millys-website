import Image from 'next/image'
import ListItem from './components/item'

import logo from '../../public/images/millys-logo.png'
import noodleImage from '../../public/images/noodles.png'
import bgSmoke from '../../public/images/bg-smoke.png'
import building from '../../public/images/building.png'
import ring from '../../public/images/bg-ring.png'
import ringTwo from '../../public/images/bg-ring-2.png'
import bao from '../../public/images/bao.png'
import box from '../../public/images/box.png'

import './globals.css';

export default function Home() {
  return (
    <main className="relative">
      <nav className="grid grid-cols-2 gap-5 md:grid-cols-6 py-5 border-b-4 border-black border-double px-10 md:px-20">
        <div className='col-span-1 md:col-span-2 text-left font-heading'>Based in Gqeberha, EC</div>
        <div className='col-span-1 md:col-span-2 text-center font-heading'>Authentic Chinese</div>
        <div className='col-span-2 md:col-span-2 text-center md:text-right font-heading'>Contact</div>
      </nav>

      <div className='absolute top-0 right-0 z-0'>
        <Image
          src={bgSmoke}
          alt="Smoke Background"
        />
      </div>

      <section className='p-10 md:p-20'>
        <div className='grid grid-cols-1 md:grid-cols-6'>
          <div className='md:col-span-2'>
            <Image
                src={noodleImage}
                alt="Noodle Illustration"
                className='absolute top-52 md:top-32'
              />
          </div>
          <div className='md:col-span-4 z-10'>
            <Image
              src={logo}
              alt="Milly' Logo"
              className='w-full'
            />
          </div>
          <span className='md:col-span-2'></span>
          <div className='md:col-span-2 pt-96 md:pt-32'>
            <p className='text-center px-2 md:px-16 font-heading'>
              Just a grandma from qhebeqha doing what she loves - making people happy through their tummies.
            </p>
          </div>
          <span className='md:col-span-2'></span>
        </div>
      </section>

     {/* how it works */}

      <section className='p-10 md:p-20'>
        <div className='relative grid grid-cols-1 md:grid-cols-6 gap-20 px-2 md:px-10'>
          <div className='col-span-1 md:col-span-3'>
            <h2 className='relative font-heading text-7xl md:text-8xl text-red z-50'>How it works</h2>
            <Image
                src={ring}
                alt="Background decoration"
                className='absolute -top-40 -left-20'
            />
          </div>
          <div className='hidden md:block md:col-span-1'></div>
          <div className='md:col-span-2 z-0'>
            <Image
                src={building}
                alt="Building Illustration"
                className='absolute top-0 md:-top-52 md:-right-20 z-0'
            />
          </div>

          {/* step one */}
          
          <div className='col-span-1 md:col-span-1'></div>
          <div className='col-span-1 pt-32 md:pt-0 md:col-span-2'>
            <h3 className='font-heading'>1. Choose your item</h3>
            <p>Select your items that you want to buy. Limited stock available so its first come first serve. All items are made fresh and should be collected when advised.</p>
          </div>
          <div className='hidden md:block md:col-span-3'></div>

          {/* step two */}

          <div className='hidden md:block md:col-span-2'></div>
          <div className='md:col-span-2'>
            <h3 className='font-heading'>2. Place your order</h3>
            <p>Fill in the form to request the items you want to purchase. Your request will be evaluated and confirmed on whatsapp if all is good to go.</p>
          </div>
          <div className='hidden md:block md:col-span-2'></div>

          {/* step three */}

          <div className='hidden md:block md:col-span-3'>
          < Image
                src={bao}
                alt="Bao Illustration"
                className='absolute bottom-0'
            />
          </div>
          <div className='col-span-1 md:block md:col-span-2'>
            <h3 className='font-heading'>3. Collect your order & Pay</h3>
            <p>You have to collect your order at the given address and pay cash on collection.</p>
          </div>
          <div className='hidden md:block md:col-span-1'></div>

          {/* step four */}

          <div className='hidden md:block md:col-span-4'></div>
          <div className='md:col-span-2'>
            <h3 className='font-heading'>4. Indulge</h3>
            <p>Plate up and enjoy your meal!</p>
          </div>
          <div className='hidden md:col-span-1'>
            <Image
                src={ringTwo}
                alt="Background decoration"
                className='absolute top-96 -right-20'
            />
          </div>
        </div>
      </section>

      {/* menu */}

      <section className='p-10 md:p-20'>
        <div className='relative grid grid-cols-1 md:grid-cols-6'>
          <div className='col-span-1'></div>
          
          <div className='md:col-span-4 p-5 md:p-8 border-4 border-black border-double'>
            <h3 className='text-5xl font-heading text-center text-red'> Millys Menu</h3>
            <div className='py-8'>
              <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-40'>
                
                {/* left column */}
                <div>
                  <h4 className='text-left font-heading text-2xl'>Chinese</h4>  
                  <ListItem
                    title="Char Siu Bao Buns"
                    description="6 x Sweet Pork Buns"
                    price="R60"
                  />
                  <ListItem
                    title="Chicken Chow Mein"
                    description="Feeds two people"
                    price="R80"
                  />
                  <ListItem
                    title="Beef Chow Mein"
                    description="Feeds two people"
                    price="R80"
                  />
                </div>

                {/* right column */}
                <div>
                  <h4 className='text-left font-heading text-2xl'>Not So Chinese</h4>  
                  <ListItem
                    title="Curry Bunnies"
                    description="4 x Med Curry Bunnies"
                    price="R60"
                  />
                  <ListItem
                    title="Crispy Chicken"
                    description="6 pieces"
                    price="R60"
                  />
                </div>

              </div>
            </div>  
          </div>
          <div className='md:col-span-1'></div>

          <div className='md:col-span-1'>
          <Image
              src={box}
              alt="Dumpling Box Illustration"
              className='absolute top-52 right-0 hidden md:block'
          />
          </div>
        </div>
      </section>

      {/* form */}

      <section className='relative p-10 md:p-20'>
        <div className='grid grid-cols-1 md:grid-cols-6'>
          <div className='md:col-span-4'>
            <h2 className='font-heading text-7xl md:text-8xl md:whitespace-nowrap text-red'>Complete the form</h2>
            <Image
                src={ring}
                alt="Background decoration"
                className='absolute -top-96 -left-20 z-10'
            />
            <form className="relative z-50 flex flex-col md:pr-20" action="/send-data-here" method="post">
                <div className='flex flex-col md:flex-row gap-3 md:gap-10'>
                  <div className='flex flex-col w-full md:w-1/2'>
                    <label for="first">Name</label>
                    <input type="text" id="first" name="first" />
                  </div>
                  <div className='flex flex-col w-full md:w-1/2'>
                    <label className="" for="first">Phone</label>
                    <input type="text" id="first" name="first" />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label for="email">Email</label>
                  <input type="text" id="last" name="last" />
                </div>
                <div className='flex flex-col md:flex-row gap-3 md:gap-10'>
                  <div className='flex flex-col w-full md:w-1/2'>
                    <label for="items">Choose your item:</label>
                      <select id="item" name="item">
                        <option value="Cha Su Bao Buns">Char Siu Bao Buns</option>
                        <option value="Chickn Chow Main">Chicken Chow Main</option>
                        <option value="Beef Chow Main">Beef Chow Main</option>
                        <option value="Bow Ties">Bow Ties</option>
                      </select>
                  </div>
                  <div className='flex flex-col w-full md:w-1/2'>
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" step="1" min="1" max="3"></input>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label for="message">Anything else on your mind?</label>
                  <input className="h-40" type="text" id="last" name="last" />
                </div>
                <div className='mx-auto p-3 mt-5 w-32 text-center border-4 border-black border-double font-heading'>
                  <a href="#" type="submit">Send Order</a>
                </div>
             
            </form>
          </div>
          <div className='md:col-span-2 pt-20 md:pt-32'>
            <p className='text-center px-16 font-heading'>
              Lucky you! enjoy your meal and let me know how it was. Hope to hear from you soon!
            </p>
          </div>
        </div>
      </section>
      
      <div className="border-b-4 border-black border-double mb-10"></div>
    </main>
  )
}
